import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import Link from '../../Elements/Link'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import WishIcon from '../../Elements/WishIcon';
import Price from '../../Elements/Price';
import OldPrice from '../../Elements/OldPrice';
import Discount from './DiscountBlock';
import CartControls from './CartControls/CartControls';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    card: {
        padding: 15,
        position: "relative",
        "&:hover $imgWrapper": {
            transform: "scale(1.1)",
        },
        "&:hover": {
            boxShadow: `2px 2px 2px 2px ${theme.palette.type === "dark" ? "#242424" : "#e9e9e9"} !important`,
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
        display: "flex",
        justifyContent: "center",
    },
    priceBlock: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cardActions: {
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
    },
    cartIcon: {
        cursor: "pointer",
    },
    discountWrapp: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 1,
    },
}))

export default function ProductCard({ title, img, price, oldPrice, available, discount, id }) {
    const classes = useStyles();

    return (
        <Card className={cx(classes.card, "shadow1")}>
            <div className={classes.discountWrapp}>
                <Discount>{discount}</Discount>
            </div>
            <div className={classes.wishIcon}>
                <WishIcon />
            </div>
            <CardMedia>
                <Link href={`/product/${id}`} className={classes.imgWrapper}>
                    <img src={img} alt="" />
                </Link>
            </CardMedia>
            <CardContent>
                <Typography variant="subtitle2">
                    {`Available ${available}`}
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
                <ShoppingCartIcon className={classes.cartIcon} />
            </CardActions>
        </Card>
    )
}
