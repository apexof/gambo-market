import React from 'react'
import CartControls from '../../../Product/ProductCards/CartControls'
import Price from '../../../Elements/Price'
import WishIcon from '../../../Elements/WishIcon'
import OldPrice from '../../../Elements/OldPrice'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import { connect } from "react-redux"

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.default,
        width: "100%",
        borderRadius: 5,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    lineThrough: {
        textDecoration: "line-through",
    }
}))

function PriceBlock({ price, oldPrice, product, addToCart }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box display="flex">
                <Typography variant="h4">Discount Price</Typography>
                <Box ml={2}>
                    <Price>{price}</Price>
                </Box>
                <Box mx={3}>
                    <Typography variant="h4">-</Typography>
                </Box>
                <Typography variant="h4" className={classes.lineThrough}>MRP Price</Typography>
                <OldPrice>{oldPrice}</OldPrice>
            </Box>
            <Box display="flex" my={3}>
                <CartControls product={product} />
                <Box ml={2}>
                    <WishIcon product={product} />
                </Box>
            </Box>
            <Box display="flex">
                <Button variant="contained" color="secondary" className={classes.btn} onClick={() => addToCart(product)}>
                    Add to Cart
                </Button>
                <Box ml={2}>
                    <Button variant="outlined" color="secondary" className={classes.btn}>
                        Order Now
                </Button>
                </Box>
            </Box>
        </div>
    )
}


export default PriceBlock