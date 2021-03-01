export type Product = {
    id: number
    title: string
    img: string
    price: number
    oldPrice: number
    available: string
    discount: number
    weight: number[]
    category: string
    quantity?: number
}

export type Category = {
    id: string
    title: string
}