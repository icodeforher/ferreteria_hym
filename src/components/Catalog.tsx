import type { Product } from "../types";

type CatalogProps = {
  products: Product[];
  onWhatsApp?: (product: Product) => void;
  onWhatsAppGeneral?: () => void;
};

export default function Catalog({ products, onWhatsApp, onWhatsAppGeneral }: CatalogProps) {
  return (
    <section id="catalogo" className="container py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Catálogo
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            Algunos destacados. Podemos cargar tu catálogo completo más
            adelante.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-xl border border-neutral-200 bg-white"
          >
            <div className="aspect-[4/3] bg-white grid place-items-center">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-neutral-900">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-600 h-10 overflow-hidden">
                {p.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-mustard/20 px-2 py-1 text-xs font-medium text-wood">
                  Disponible
                </span>
                <button
                  onClick={() => onWhatsApp?.(p)}
                  className="inline-flex items-center gap-2 rounded-md bg-brick px-3 py-2 text-sm text-white hover:bg-brick-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M20.52 3.48A11.76 11.76 0 0012.06 0C5.5 0 .15 5.34.15 11.86c0 2.08.55 4.13 1.59 5.93L0 24l6.4-1.67a11.84 11.84 0 005.66 1.45h.01c6.55 0 11.9-5.35 11.9-11.88 0-3.18-1.24-6.17-3.45-8.42zM12.06 21.2a9.3 9.3 0 01-4.75-1.3l-.34-.2-3.8 1 1.02-3.7-.22-.38a9.3 9.3 0 01-1.37-4.86c0-5.16 4.21-9.37 9.46-9.37 2.53 0 4.91.98 6.7 2.77a9.4 9.4 0 012.77 6.69c0 5.16-4.2 9.35-9.47 9.35zm5.17-7.03c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.6.14-.17.28-.69.89-.85 1.07-.15.17-.3.2-.57.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.3.43-.46.14-.17.2-.28.3-.47.1-.2.05-.35-.02-.49-.07-.14-.6-1.46-.83-2-.22-.53-.44-.46-.6-.46-.15 0-.33-.02-.5-.02-.18 0-.46.07-.7.35-.24.28-.92.89-.92 2.17 0 1.28.95 2.51 1.08 2.68.14.17 1.86 2.84 4.5 3.98.63.27 1.12.44 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.63-.66 1.86-1.3.23-.64.23-1.18.16-1.3-.07-.12-.26-.2-.54-.34z" />
                  </svg>
                  Consultar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-lg bg-cream ring-1 ring-neutral-200 p-4 text-sm text-neutral-700 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Tenemos muchísimos productos más. Escribinos por WhatsApp y contanos qué
          necesitás para tu obra.
        </p>
        <button
          type="button"
          onClick={onWhatsAppGeneral}
          className="inline-flex items-center gap-2 self-start rounded-md bg-brick px-3 py-2 text-white hover:bg-brick-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M20.52 3.48A11.76 11.76 0 0012.06 0C5.5 0 .15 5.34.15 11.86c0 2.08.55 4.13 1.59 5.93L0 24l6.4-1.67a11.84 11.84 0 005.66 1.45h.01c6.55 0 11.9-5.35 11.9-11.88 0-3.18-1.24-6.17-3.45-8.42zM12.06 21.2a9.3 9.3 0 01-4.75-1.3l-.34-.2-3.8 1 1.02-3.7-.22-.38a9.3 9.3 0 01-1.37-4.86c0-5.16 4.21-9.37 9.46-9.37 2.53 0 4.91.98 6.7 2.77a9.4 9.4 0 012.77 6.69c0 5.16-4.2 9.35-9.47 9.35zm5.17-7.03c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.6.14-.17.28-.69.89-.85 1.07-.15.17-.3.2-.57.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.3.43-.46.14-.17.2-.28.3-.47.1-.2.05-.35-.02-.49-.07-.14-.6-1.46-.83-2-.22-.53-.44-.46-.6-.46-.15 0-.33-.02-.5-.02-.18 0-.46.07-.7.35-.24.28-.92.89-.92 2.17 0 1.28.95 2.51 1.08 2.68.14.17 1.86 2.84 4.5 3.98.63.27 1.12.44 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.63-.66 1.86-1.3.23-.64.23-1.18.16-1.3-.07-.12-.26-.2-.54-.34z" />
          </svg>
          Escribir por WhatsApp
        </button>
      </div>
    </section>
  );
}
