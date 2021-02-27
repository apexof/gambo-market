import { Product } from "./product";

export type AddToCart = (item: Product) => ({
    type: string,
    item: Product
})

export type RemoveFromCart = (id: number) => ({
    type: string,
    id: number
})

export type SetCountOfProducts = (props: { item: Product, count: number }) => ({
    type: string,
    item: Product
    count: number,
})