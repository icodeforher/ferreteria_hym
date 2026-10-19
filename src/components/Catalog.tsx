import { useState } from "react";
import type { CatalogProduct } from "../types";
import { whatsAppHref } from "../lib/whatsapp";

type CatalogProps = {
  products: CatalogProduct[];
  categories: string[];
  activeCategory: string | null;
  query: string;
  onClear: () => void;
  onSelectCategory: (category: string | null) => void;
  onOpen: (product: CatalogProduct) => void;
  onAdd: (product: CatalogProduct) => void;
};

function ProductPhoto({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative aspect-square bg-stone-200">
      {failed ? (
        <p className="absolute inset-0 grid place-items-center px-4 text-center text-xs text-muted">
          Foto ilustrativa no disponible
        </p>
      ) : (
        <img
          src={src}
          alt={alt}
          width={320}
          height={320}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Catalog({
  products,
  categories,
  activeCategory,
  query,
  onClear,
  onSelectCategory,
  onOpen,
  onAdd,
}: CatalogProps) {
  const advice = whatsAppHref(
    "Hola, busco un material y quiero asesoría para cotizarlo.",
  );

  return (
    <section id="catalogo" className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-4xl text-ink uppercase md:text-5xl">Productos destacados</h2>
          <p className="mt-3 text-sm text-muted">
            Catálogo de referencia. Las fotos son ilustrativas. Precio y existencia están por confirmar.
          </p>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filtrar por categoría">
          <button
            type="button"
            aria-pressed={activeCategory === null}
            onClick={() => onSelectCategory(null)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm ${
              activeCategory === null ? "bg-graphite-950 text-white" : "bg-stone-100 text-ink"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => onSelectCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm ${
                activeCategory === category ? "bg-graphite-950 text-white" : "bg-stone-100 text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {products.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-line bg-stone-100 p-6">
            <p className="text-ink">No hay productos que coincidan con esa búsqueda.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onClear}
                className="rounded-full bg-graphite-950 px-4 py-2 text-sm text-white"
              >
                Limpiar búsqueda
              </button>
              <a
                href={advice}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Pedir asesoría
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article key={product.id} className="cv-auto flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
                <button type="button" onClick={() => onOpen(product)} className="text-left">
                  <ProductPhoto src={product.imageUrl} alt="" />
                  <div className="p-4">
                    <h3 className="font-sans text-base font-semibold text-ink">{product.name}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {[product.brand, product.presentation].filter(Boolean).join(" · ") || product.category}
                    </p>
                  </div>
                </button>
                <div className="mt-auto px-4 pb-4">
                  <button
                    type="button"
                    onClick={() => onAdd(product)}
                    className="w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
                  >
                    Agregar a cotización
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        {query && (
          <p className="mt-4 text-sm text-muted">
            Resultados para “{query}”.
          </p>
        )}
      </div>
    </section>
  );
}
