import React, { FC, } from "react"
import { FreshAndFruits, } from "./lists"
import ProductCard from "../ProductCards/CartProductCard"

const CartList: FC = () => {
    return (
        <>
            {FreshAndFruits.map((item) => (
                <ProductCard
                    key={item.id}
                    product={item}
                />
            ))}
        </>
    )
}

export default CartList
