import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useQuote } from "../features/quote/quote-context";
import { quoteMessage, whatsAppHref } from "../lib/whatsapp";
import type { QuoteLine } from "../types";
import WhatsAppIcon from "./WhatsAppIcon";

function enteredLine(before: QuoteLine[], after: QuoteLine[]) {
  return after.find((item) => {
    const prior = before.find((line) => line.id === item.id);
    return !prior || item.quantity > prior.quantity;
  });
}

export default function QuoteSummary() {
  const { items, increase, decrease, remove } = useQuote();
  const href = items.length > 0 ? whatsAppHref(quoteMessage(items)) : undefined;
  const listRef = useRef<HTMLUListElement>(null);
  const [prevItems, setPrevItems] = useState(items);
  const [markedId, setMarkedId] = useState<string | null>(null);

  if (items !== prevItems) {
    setPrevItems(items);
    const entered = enteredLine(prevItems, items);
    if (entered) setMarkedId(entered.id);
  }

  useEffect(() => {
    if (!markedId) return;
    const list = listRef.current;
    const row = list?.querySelector<HTMLElement>(`[data-line="${CSS.escape(markedId)}"]`);
    if (list && row && row.getBoundingClientRect().height > 0) {
      const box = list.getBoundingClientRect();
      const rowBox = row.getBoundingClientRect();
      const delta =
        rowBox.bottom > box.bottom
          ? rowBox.bottom - box.bottom
          : rowBox.top < box.top
            ? rowBox.top - box.top
            : 0;
      if (delta !== 0) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        list.scrollTo({
          top: list.scrollTop + delta,
          behavior: reduce ? "auto" : "smooth",
        });
      }
    }
    const timeout = window.setTimeout(() => {
      setMarkedId((current) => (current === markedId ? null : current));
    }, 900);
    return () => window.clearTimeout(timeout);
  }, [markedId]);

  return (
    <div className="flex h-full min-h-0 flex-col text-ink">
      <h2 className="font-sans text-xl font-semibold text-ink">Tu lista</h2>
      {items.length === 0 ? (
        <p className="mt-4 text-sm text-muted">
          Todavía no hay materiales. Escribe lo que necesitas y súmalo aquí.
        </p>
      ) : (
        <ul ref={listRef} className="mt-4 max-h-64 min-h-0 flex-1 space-y-3 overflow-y-auto lg:max-h-none">
          {items.map((item) => (
            <li
              key={item.id}
              data-line={item.id}
              className={`rounded-2xl border p-4 motion-safe:transition-colors motion-safe:duration-500 ${
                markedId === item.id ? "border-accent bg-accent/10" : "border-line"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  {item.reference && <p className="text-sm text-muted">Ref. {item.reference}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => remove(item.id)}
                  aria-label={`Quitar ${item.name}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-stone-100"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 inline-flex items-center rounded-full border border-line text-ink">
                <button
                  type="button"
                  onClick={() => decrease(item.id)}
                  aria-label={`Disminuir cantidad de ${item.name}`}
                  disabled={item.quantity <= 1}
                  className="inline-flex h-11 w-11 items-center justify-center text-ink disabled:opacity-40"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-8 text-center text-sm font-semibold text-ink">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => increase(item.id)}
                  aria-label={`Aumentar cantidad de ${item.name}`}
                  className="inline-flex h-11 w-11 items-center justify-center text-ink"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {href && (
        <div className="mt-4 shrink-0">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enviar lista por WhatsApp
          </a>
          <p className="mt-2 text-center text-xs text-muted">
            Se abre WhatsApp para que confirmes el envío. No es una compra.
          </p>
        </div>
      )}
    </div>
  );
}
