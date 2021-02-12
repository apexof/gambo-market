import React from 'react'
import ProductList from './ProductList'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section: {
        margin: "47px 0 0",
    },
}))
const productArray = [
    {
        id: 1,
        title: "Product Title Here",
        img: "img/products/product-6.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 2,
        title: "Product Title Here",
        img: "img/products/product-2.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 3,
        title: "Product Title Here",
        img: "img/products/product-3.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 4,
        title: "Product Title Here",
        img: "img/products/product-4.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 5,
        title: "Product Title Here",
        img: "img/products/product-5.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 6,
        title: "Product Title Here",
        img: "img/products/product-5.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
]

export default function AddedNewProducts() {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            <ProductList
                productArray={productArray}
                title="Added New Products"
                clarification="For You"
            />
        </section>
    )
}
