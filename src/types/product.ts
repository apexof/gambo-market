export type ProductImg = {
    lqip: string
    url: string
    webp: string
    width: number
    height: number
}

export type Product = {
    id: number
    title: string
    images: ProductImg[]
    price: number
    slug: number
    oldPrice: number
    available: string
    discount: number
    weight: number[]
    quantity?: number
    category?: {
        name: string
    }
}

export type Category23 = {
    id: string
    title: string
}

export type Category = {
    id: string
    name: string
    slug: string
    icon: {
        url: string
    }
}
