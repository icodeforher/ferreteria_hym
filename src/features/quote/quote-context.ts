import { createContext, useContext } from "react";
import type { QuoteDraft, QuoteLine } from "../../types";

export const STORAGE_KEY = "el-maestro-quote-v1";

export type QuoteContextValue = {
  items: QuoteLine[];
  add: (draft: QuoteDraft) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  remove: (id: string) => void;
};

export const QuoteContext = createContext<QuoteContextValue | null>(null);

export function readStored(): QuoteLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return [];
    const record = parsed as { version?: unknown; items?: unknown };
    if (record.version !== 1 || !Array.isArray(record.items)) return [];
    return record.items.flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const line = item as Partial<QuoteLine>;
      if (typeof line.id !== "string" || typeof line.name !== "string") return [];
      if (
        typeof line.quantity !== "number" ||
        !Number.isInteger(line.quantity) ||
        line.quantity < 1
      ) {
        return [];
      }
      return [
        {
          id: line.id,
          name: line.name,
          reference: typeof line.reference === "string" ? line.reference : undefined,
          quantity: line.quantity,
        },
      ];
    });
  } catch {
    return [];
  }
}

export function useQuote() {
  const value = useContext(QuoteContext);
  if (!value) throw new Error("useQuote debe usarse dentro de QuoteProvider");
  return value;
}
