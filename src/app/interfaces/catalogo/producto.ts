export interface Producto {

  id: string,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],

}

export interface respCatalogo {

  products: Producto[]
  total: number,
  skip: number | null,
  limit: number,



}
