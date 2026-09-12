export type ProductType = {
  id: number;
  name: string;
   category: string;
  collection: "best-seller" | "hyped" | "value-for-money";
  price: number;
  rating: number;

  image: string;
  images: string[];

  description: string;
  colors: string[];
  tags: string[];

  vendor: string;
  stock: number;
  deliveryDays: string;
  reviewCount: number;
};

export type ProductCard = {
   id: number;
  name: string;
  category: string;
  collection: "best-seller" | "hyped" | "value-for-money";
  price: number;
  image: string;
}