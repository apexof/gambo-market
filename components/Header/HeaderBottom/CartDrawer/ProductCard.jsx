import { Card, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Price from '../../../ProductCard/Price';
import OldPrice from '../../../ProductCard/OldPrice';
import CartControls from '../../../ProductCard/CartControls/CartControls';

const useStyles = makeStyles(theme => ({
    card: {
        margin: 0,
        padding: 15,
        position: "relative",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        "&:hover $imgWrapper": {
            transform: "scale(1.1)",
        }
    },
    discount: {
        position: "absolute",
        top: 15,
        left: 15,
        fontSize: 12,
        fontWeight: 500,
        color: "#fff",
        background: "#f55d2c",
        padding: "3px 10px",
        borderRadius: 3,
        lineHeight: "20px",
        textTransform: "uppercase",
        zIndex: 1,
    },
    imgWrapper: {
        display: "block",
        padding: "10px 20px",
        width: 90,
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
}))

export default function ProductCard({ title, img, price, oldPrice, discount, }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.discount}>
                {`${discount} OFF`}
            </div>
            <CardMedia >
                <Link href="#" className={classes.imgWrapper}>
                    <img src={img} alt="" />
                </Link>
            </CardMedia>
            <CardContent >
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
