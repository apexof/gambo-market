import React from "react"
import { FreshAndFruits, } from "./lists"
import ProductCard from "../ProductCards/CartProductCard"

export default function CartList() {
    return FreshAndFruits.map((item) => (
        <ProductCard
            key={item.id}
            product={item}
        />
    ))
}
