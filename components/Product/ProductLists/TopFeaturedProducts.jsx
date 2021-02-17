import React from 'react'
import ProductListSlider from './ProductListSlider'
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
        img: "img/products/product-1.jpg",
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
    {
        id: 7,
        title: "Product Title Here",
        img: "img/products/product-1.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 8,
        title: "Product Title Here",
        img: "img/products/product-2.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 9,
        title: "Product Title Here",
        img: "img/products/product-3.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 10,
        title: "Product Title Here",
        img: "img/products/product-4.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 11,
        title: "Product Title Here",
        img: "img/products/product-5.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
    {
        id: 12,
        title: "Product Title Here",
        img: "img/products/product-5.jpg",
        price: "12",
        oldPrice: "15",
        available: "Available (In Stock)",
        discount: "6%",
    },
]

export default function TopFeaturedProducts({ slider = true }) {
    const classes = useStyles();

    return (
        <section className={classes.section}>
            {slider &&
                <ProductListSlider
                    productArray={productArray}
                    title="Top Featured Products"
                    clarification="For You"
                />
            }
            {!slider &&
                <ProductList
                    productArray={productArray}
                    title="Top Featured Products"
                />
            }
        </section>
    )
}
