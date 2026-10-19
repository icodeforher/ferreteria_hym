import { productDetail, searchProducts } from "../data/catalog";
import { productDraft } from "../features/quote/drafts";
import { useQuote } from "../features/quote/quote-context";
import type { CatalogProduct } from "../types";

type ProductListProps = {
  products: CatalogProduct[];
  query: string;
  onQueryChange: (value: string) => void;
  onAdded: (name: string) => void;
};

export default function ProductList({ products, query, onQueryChange, onAdded }: ProductListProps) {
  const { add } = useQuote();
  const visible = query.trim() ? searchProducts(products, query) : products;

  return (
    <section id="productos" className="bg-stone-100 py-12 md:py-16">
      <div className="container">
        <h1 className="text-5xl uppercase text-ink">Productos</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Listado de referencia. Precio y existencia están por confirmar. Las fotos no hacen falta
          para armar la cotización.
        </p>
        <label htmlFor="buscar-productos" className="sr-only">
          Buscar productos
        </label>
        <input
          id="buscar-productos"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar material"
          className="mt-6 w-full max-w-xl rounded-full border border-line bg-white px-4 py-3 text-sm outline-none focus-visible:border-accent"
        />
        {visible.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-line bg-white p-6">
            <p className="text-ink">No hay productos que coincidan con esa búsqueda.</p>
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="mt-4 rounded-full bg-graphite-950 px-4 py-2 text-sm text-white"
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {visible.map((product) => {
              const detail = productDetail(product);
              return (
                <li key={product.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-sans text-base font-semibold normal-case text-ink">{product.name}</h2>
                    <p className="text-sm text-muted">{detail || product.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      add(productDraft(product));
                      onAdded(product.name);
                    }}
                    className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
                  >
                    Agregar a cotización
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
