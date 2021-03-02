import { Product, Category, } from "../../../../types"
import product1 from "./product-1.jpg"
import product2 from "./product-2.jpg"
import product3 from "./product-3.jpg"
import product4 from "./product-4.jpg"
import product5 from "./product-5.jpg"
import product6 from "./product-6.jpg"
import product7 from "./product-7.jpg"

export const getItemById = (itemID: number): Product => {
    const item = productItems.find((item) => item.id === itemID)

    return item
}

export const getItemsFromCategory = (category: string): Product[] => {
    const items = productItems.filter((item) => item.category === category)

    return items
}

export const getTitleOfCategory = (categoryId: string): string => {
    const needCategory = categories.find((item) => item.id === categoryId)

    return needCategory.title
}

type AllProductIds = {
    params: { id: string, }
}

export function getAllProductIds(): AllProductIds[] {
    return productItems.map((item) => ({ params: { id: item.id.toString(), }, }))
}

export const categories: Category[] = [
    {
        id: "all",
        title: "All",
    },
    {
        id: "top-featured-products",
        title: "Top Featured Products",
    },
    {
        id: "fresh-and-fruits",
        title: "Fresh Vegetables & Fruits",
    },
    {
        id: "added-new-products",
        title: "Added New Products",
    },
    {
        id: "grocery-staples",
        title: "Grocery & Staples",
    },
    {
        id: "dairy-eggs",
        title: "Dairy & Eggs",
    }
]

export const productItems: Product[] = [
    {
        id: 1,
        title: "Product Title Here",
        img: product7,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "fresh-and-fruits",
    },
    {
        id: 2,
        title: "Product Title Here",
        img: product2,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "fresh-and-fruits",
    },
    {
        id: 3,
        title: "Product Title Here",
        img: product3,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "fresh-and-fruits",
    },
    {
        id: 4,
        title: "Product Title Here",
        img: product4,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "fresh-and-fruits",
    },
    {
        id: 5,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "fresh-and-fruits",
    },
    {
        id: 6,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "fresh-and-fruits",
    },
    {
        id: 101,
        title: "Product Title Here",
        img: product1,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 102,
        title: "Product Title Here",
        img: product2,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 103,
        title: "Product Title Here",
        img: product3,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 104,
        title: "Product Title Here",
        img: product4,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 105,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 106,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 107,
        title: "Product Title Here",
        img: product1,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 108,
        title: "Product Title Here",
        img: product2,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 109,
        title: "Product Title Here",
        img: product3,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 110,
        title: "Product Title Here",
        img: product4,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 111,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 112,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "top-featured-products",
    },
    {
        id: 201,
        title: "Product Title Here",
        img: product6,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "added-new-products",
    },
    {
        id: 202,
        title: "Product Title Here",
        img: product2,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "added-new-products",
    },
    {
        id: 203,
        title: "Product Title Here",
        img: product3,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "added-new-products",
    },
    {
        id: 204,
        title: "Product Title Here",
        img: product4,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "added-new-products",
    },
    {
        id: 205,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "added-new-products",
    },
    {
        id: 206,
        title: "Product Title Here",
        img: product5,
        price: 12,
        oldPrice: 15,
        available: "(In Stock)",
        discount: 6,
        weight: [2, 3, 4],
        category: "added-new-products",
    }
]

export const TopFeaturedProducts = getItemsFromCategory("top-featured-products")

export const FreshAndFruits = getItemsFromCategory("fresh-and-fruits")

export const AddedNewProducts = getItemsFromCategory("added-new-products")
