import { products } from "./productsData";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: [string];
// }

export const categorySet = new Set<string>();
export const brandSet = new Set<string>();
export const price: number[] = [];
export const title: string[] = [];
const stock: number[] = [];

products.forEach((prod) => {
  categorySet.add(prod.category);
  brandSet.add(prod.brand);
  price.push(prod.price);
  stock.push(prod.stock);
  title.push(prod.title);
});

export const priceMin: number = Math.min(...price);
export const priceMax: number = Math.max(...price);
export const stockMin: number = Math.min(...stock);
export const stockMax: number = Math.max(...stock);
