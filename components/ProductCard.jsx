import { Card, CardActions, CardContent, CardHeader, CardMedia, Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import WishIcon from './WishIcon';

const useStyles = makeStyles(theme => ({
    card: {
        margin: "0 5px",
        padding: 20,
        position: "relative",
        boxShadow: "1px 1px 2px 1px rgb(0 0 0 / 3%)",
        "&:hover $imgWrapper": {
            transform: "scale(1.1)",
        }
    },
    wishIcon: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 1,
    },
    discount: {
        position: "absolute",
        top: 20,
        left: 20,
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
        transition: "transform .5s ease",
    },
    priceBlock: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    price: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: "24px",
        color: "#f55d2c",
    },
    oldPrice: {
        fontSize: 18,
        color: "#c7c7c7",
        textDecoration: "line-through",
        marginLeft: 10,
        fontWeight: 600,
    },
}))

export default function ProductCard({ title, img, price, oldPrice, available, discount, }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {/* <CardHeader className={classes.header}>
            </CardHeader> */}
            <div className={classes.discount}>
                {`${discount} OFF`}
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
                    <Typography variant="body2" className={classes.price}>
                        ${price}
                    </Typography>
                    <Typography variant="body2" className={classes.oldPrice}>
                        ${oldPrice}
                    </Typography>
                </div>
            </CardContent>

            {/* <CardActions >

            </CardActions> */}

        </Card>
    )
}
