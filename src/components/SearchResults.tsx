import { productDetail, searchProducts } from "../data/catalog";
import { productDraft } from "../features/quote/drafts";
import { useQuote } from "../features/quote/quote-context";
import type { CatalogProduct } from "../types";

type SearchResultsProps = {
  products: CatalogProduct[];
  query: string;
  onAdded: (name: string) => void;
};

export default function SearchResults({ products, query, onAdded }: SearchResultsProps) {
  const { add } = useQuote();
  const text = query.trim().replace(/\s+/g, " ");
  const matches = text ? searchProducts(products, text).slice(0, 8) : [];

  const addProduct = (product: CatalogProduct) => {
    add(productDraft(product));
    onAdded(product.name);
  };

  return (
    <div className="rounded-3xl border border-line bg-white p-5 md:p-6">
      <h2 className="font-sans text-2xl font-semibold text-ink">Resultados</h2>
      {!text ? (
        <p className="mt-3 text-sm text-muted">
          Escribe en el banner el material que necesitas. Aquí aparecen las coincidencias para
          sumarlas a la lista.
        </p>
      ) : (
        <div className="mt-4">
          {matches.length > 0 ? (
            <ul className="space-y-2">
              {matches.map((product) => {
                const detail = productDetail(product);
                return (
                  <li key={product.id} className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-ink">{product.name}</p>
                      {detail && <p className="text-sm text-muted">{detail}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={() => addProduct(product)}
                      className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
                    >
                      Agregar
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-muted">
              No hay una ficha con ese nombre en el inventario de referencia.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
