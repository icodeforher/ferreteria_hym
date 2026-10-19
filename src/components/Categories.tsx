import type { CatalogProduct } from "../types";

type CategoriesProps = {
  products: CatalogProduct[];
  categories: string[];
  active: string | null;
  onSelect: (category: string) => void;
};

export default function Categories({
  products,
  categories,
  active,
  onSelect,
}: CategoriesProps) {
  return (
    <section id="categorias" className="bg-stone-100 py-16 md:py-20">
      <div className="container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-4xl text-ink uppercase md:text-5xl">Categorías</h2>
          <a href="#catalogo" className="text-sm font-semibold text-accent hover:text-accent-hover">
            Ver catálogo
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category) => {
            const cover = products.find((product) => product.category === category);
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelect(category)}
                aria-pressed={selected}
                className={`group relative h-52 w-44 shrink-0 overflow-hidden rounded-2xl text-left text-white ${
                  selected ? "ring-2 ring-accent ring-offset-2" : ""
                }`}
              >
                {cover && (
                  <img
                    src={cover.imageUrl}
                    alt=""
                    width={320}
                    height={320}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <span className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/25 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 font-display text-2xl leading-none uppercase">
                  {category}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
