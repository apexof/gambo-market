import React from 'react'
import ProductCard from '../../ProductCards/CartProductCard'

export default function CartList({ cart }) {
    return (
        <div>
            {cart.map(item => (
                <ProductCard
                    key={item.id}
                    product={item}
                />
            ))}
        </div>
    )
}