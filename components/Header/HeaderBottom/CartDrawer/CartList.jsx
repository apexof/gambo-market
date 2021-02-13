import React from 'react'
import ProductCard from './ProductCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {

    },
}))

const productArray = [
    {
        id: 1,
        title: "Product Title Here",
        img: "img/products/product-2.jpg",
        price: 12,
        oldPrice: 15,
        discount: "6%",
        weight: [1, 2, 3],
    },
    {
        id: 2,
        title: "Product Title Here",
        img: "img/products/product-1.jpg",
        price: 12,
        oldPrice: 15,
        discount: "6%",
        weight: [1, 2],
    },
]

export default function CartList() {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            {productArray.map(item => (
                <ProductCard
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    discount={item.discount}
                    weight={item.weight}
                />
            ))}
        </div>
    )
}