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

export type ProductCard = Pick<
  ProductType,
  "id" | "name" | "category" | "collection" | "price" | "image" | "stock"
>;