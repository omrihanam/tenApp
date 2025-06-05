export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  attributes: Record<string, string>;
}

export interface ProductTypeStat {
  type: string;
  count: number;
}
