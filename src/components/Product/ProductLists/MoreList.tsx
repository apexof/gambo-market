import React, { FC, } from "react"
import { Product, } from "../../../types"
import ProductCard from "../ProductCards/CartProductCard"

interface Props {
    items: Product[]
}

const CartList: FC<Props> = ({ items, }) => {
    return (
        <>
            {items.map((item) => (
                <ProductCard
                    key={item.id}
                    product={item}
                />
            ))}
        </>
    )
}

export default CartList
