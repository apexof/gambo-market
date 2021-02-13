import { Card, CardActions, CardContent, CardHeader, CardMedia, Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WishIcon from '../WishIcon';
import Price from './Price';
import OldPrice from './OldPrice';
import Discount from './DiscountBlock';
import CartControls from './CartControls/CartControls';

const useStyles = makeStyles(theme => ({
    card: {
        margin: "0 5px",
        padding: 15,
        position: "relative",
        boxShadow: "1px 1px 2px 1px rgb(0 0 0 / 3%)",
        "&:hover $imgWrapper": {
            transform: "scale(1.1)",
        }
    },
    wishIcon: {
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1,
    },
    imgWrapper: {
        display: "block",
        padding: "10px 20px",
        transition: "transform .5s ease",
    },
    priceBlock: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cardActions: {
        padding: 0,
    },
    discountWrapp: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 1,
    },
}))

export default function ProductCard({ title, img, price, oldPrice, available, discount, }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {/* <CardHeader className={classes.header}>
            </CardHeader> */}
            <div className={classes.discountWrapp}>
                <Discount>{discount}</Discount>
            </div>
            <div className={classes.wishIcon}>
                <WishIcon />
            </div>
            <CardMedia >
                <Link href="#" className={classes.imgWrapper}>
                    <img src={img} alt="" />
                </Link>
            </CardMedia>
            <CardContent >
                <Typography variant="subtitle2">
                    {available}
                </Typography>
                <Typography variant="subtitle1">
                    {title}
                </Typography>
                <div className={classes.priceBlock}>
                    <Price>{price}</Price>
                    <OldPrice>{oldPrice}</OldPrice>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <CartControls />
            </CardActions>
        </Card>
    )
}
