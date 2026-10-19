export type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand?: string;
  presentation?: string;
  unit?: string;
  imageUrl: string;
};

export type QuoteLine = {
  id: string;
  name: string;
  reference?: string;
  quantity: number;
};

export type QuoteDraft = {
  id: string;
  name: string;
  reference?: string;
};
