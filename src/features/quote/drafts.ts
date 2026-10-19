import type { CatalogProduct, QuoteDraft } from "../../types";

export function productDraft(product: CatalogProduct): QuoteDraft {
  return { id: product.id, name: product.name, reference: product.id };
}
