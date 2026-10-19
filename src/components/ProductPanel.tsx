import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CatalogProduct } from "../types";

type ProductPanelProps = {
  product: CatalogProduct | null;
  onClose: () => void;
  onAdd: (product: CatalogProduct) => void;
};

export default function ProductPanel({ product, onClose, onAdd }: ProductPanelProps) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!product) return;
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
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-graphite-950/60 md:items-center md:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="producto-titulo"
        className="max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white p-5 md:max-w-3xl md:rounded-3xl md:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="producto-titulo" className="font-sans text-2xl font-semibold text-ink">
            {product.name}
          </h2>
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-200">
            {failed ? (
              <p className="absolute inset-0 grid place-items-center px-4 text-center text-sm text-muted">
                Foto ilustrativa no disponible
              </p>
            ) : (
              <img
                src={product.imageUrl}
                alt=""
                width={640}
                height={640}
                className="h-full w-full object-cover"
                onError={() => setFailed(true)}
              />
            )}
          </div>
          <div>
            <p className="text-sm text-muted">
              {[product.brand, product.presentation, product.unit].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-3 text-sm leading-6 text-ink">{product.description}</p>
            <p className="mt-3 text-sm text-muted">Referencia {product.id}. Precio y existencia por confirmar.</p>
            <button
              type="button"
              onClick={() => onAdd(product)}
              className="mt-6 w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Agregar a cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
