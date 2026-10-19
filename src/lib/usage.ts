import type { QuoteLine } from "../types";
import { trackQuoteList } from "./analytics";

const DEDUPE_MS = 8000;
const STORAGE_KEY = "el-maestro-quote-sent-at";

export function recordQuoteSent(items: QuoteLine[]) {
  if (items.length === 0) return;
  const now = Date.now();
  const last = Number(sessionStorage.getItem(STORAGE_KEY) || "0");
  if (Number.isFinite(last) && now - last < DEDUPE_MS) return;
  sessionStorage.setItem(STORAGE_KEY, String(now));
  trackQuoteList(items.length);
  const payload = JSON.stringify({
    lines: items.length,
    units: items.reduce((sum, item) => sum + item.quantity, 0),
    references: items.map((item) => item.reference || item.id).slice(0, 40),
  });
  const body = new Blob([payload], { type: "application/json" });
  if (navigator.sendBeacon("/api/quotes", body)) return;
  void fetch("/api/quotes", {
    method: "POST",
    body: payload,
    headers: { "content-type": "application/json" },
    keepalive: true,
  });
}
