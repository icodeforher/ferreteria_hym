import seed from "./inventario_semilla_el_maestro.json";
import type { CatalogProduct } from "../types";

type SeedRow = {
  sku?: string;
  nombre?: string;
  marca_referencial?: string;
  categoria?: string;
  descripcion?: string;
  unidad_venta?: string;
  presentacion?: string;
  imagen_url?: string;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function toProduct(row: SeedRow): CatalogProduct | null {
  const id = text(row.sku);
  const name = text(row.nombre);
  const category = text(row.categoria);
  const imageUrl = text(row.imagen_url);
  if (!id || !name || !category || !imageUrl) return null;

  const brand = text(row.marca_referencial);
  const presentation = text(row.presentacion);
  const unit = text(row.unidad_venta);

  return {
    id,
    name,
    description: text(row.descripcion),
    category,
    brand: brand && brand.toLowerCase() !== "genérica" ? brand : undefined,
    presentation:
      presentation && !presentation.toLocaleLowerCase("es").includes("por confirmar")
        ? presentation
        : undefined,
    unit: unit || undefined,
    imageUrl,
  };
}

export function loadCatalog():
  | { ok: true; products: CatalogProduct[] }
  | { ok: false } {
  if (!Array.isArray(seed)) return { ok: false };
  const products = seed
    .map((row) => toProduct(row as SeedRow))
    .filter((product): product is CatalogProduct => product !== null);
  if (products.length === 0) return { ok: false };
  return { ok: true, products };
}

export function categoriesOf(products: CatalogProduct[]) {
  return [...new Set(products.map((product) => product.category))];
}

export function searchProducts(products: CatalogProduct[], query: string) {
  const needle = query.trim().toLocaleLowerCase("es");
  if (!needle) return [];
  return products.filter((product) =>
    [product.name, product.brand, product.category, product.id, product.description]
      .filter(Boolean)
      .some((value) => value!.toLocaleLowerCase("es").includes(needle)),
  );
}

export function productDetail(product: CatalogProduct) {
  return [product.brand, product.presentation].filter(Boolean).join(" · ");
}
