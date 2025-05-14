
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  prime: boolean;
  features?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
