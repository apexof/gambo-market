import React from 'react'
import { productItems } from './lists'
import ProductCard from '../ProductCards/CartProductCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {

    },
}))

export default function CartList() {
    const classes = useStyles();
    const productArray = productItems.slice(0, 2)
    return (
        <div className={classes.list}>
            {productArray.map(item => (
                <ProductCard
                    key={item.id}
                    id={item.id}
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