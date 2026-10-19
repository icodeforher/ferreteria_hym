import { Minus, Plus, Trash2, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useQuote } from "../features/quote/quote-context";
import { quoteMessage, whatsAppHref } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

type QuoteDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function QuoteDrawer({ open, onClose }: QuoteDrawerProps) {
  const { items, increase, decrease, remove } = useQuote();
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const href = items.length > 0 ? whatsAppHref(quoteMessage(items)) : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end bg-graphite-950/50 md:items-stretch">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cotizacion-titulo"
        className="flex max-h-[88vh] w-full flex-col rounded-t-3xl bg-white md:h-full md:max-h-none md:max-w-md md:rounded-none"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id="cotizacion-titulo" className="font-sans text-xl font-semibold">
            Tu cotización
          </h2>
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Cerrar cotización"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col justify-between gap-6 p-5">
            <p className="text-muted">Todavía no hay materiales en la lista.</p>
            <a
              href="#inicio"
              onClick={onClose}
              className="rounded-full bg-graphite-950 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Volver al inicio
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto p-5">
              {items.map((item) => (
                <li key={item.id} className="rounded-2xl border border-line p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-ink">{item.name}</p>
                      {item.reference && (
                        <p className="text-sm text-muted">Ref. {item.reference}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      aria-label={`Quitar ${item.name}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-stone-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 inline-flex items-center rounded-full border border-line">
                    <button
                      type="button"
                      onClick={() => decrease(item.id)}
                      aria-label={`Disminuir cantidad de ${item.name}`}
                      disabled={item.quantity <= 1}
                      className="inline-flex h-11 w-11 items-center justify-center disabled:opacity-40"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => increase(item.id)}
                      aria-label={`Aumentar cantidad de ${item.name}`}
                      className="inline-flex h-11 w-11 items-center justify-center"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line p-5">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Enviar por WhatsApp
              </a>
              <p className="mt-2 text-center text-xs text-muted">
                Se abre WhatsApp para que confirmes el envío. No es una compra.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
