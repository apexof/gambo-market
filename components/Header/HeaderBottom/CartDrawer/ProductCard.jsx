import { Card, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core'
import React from 'react'
import Discount from '../../../ProductCard/DiscountBlock'
import { makeStyles } from '@material-ui/core/styles';
import Price from '../../../ProductCard/Price';
import Weight from './CardWeight';
import OldPrice from '../../../ProductCard/OldPrice';
import CartControls from '../../../ProductCard/CartControls/CartControls';
import CloseIcon from '@material-ui/icons/Close';

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
    cardFlex: {
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardContent: {
        width: "70%",
        height: "100%",
        padding: "0 0 0 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:last-child": {
            paddingBottom: 0,
        }
    },
    cardMedia: {
        width: "30%",
    },
    weightBlock: {
        display: "flex",
        alignItems: "center",
        margin: "20px -5px auto",
        "& div": {
            margin: "0 5px",
        }
    },
    imgWrapper: {
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    discountWrapp: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 1,
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
        cursor: "pointer",
        color: theme.palette.primary.contrastText,
        "&:hover": {
            color: theme.palette.secondary.main,
        }
    },
}))

export default function ProductCard({ title, img, price, oldPrice, discount, weight }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CloseIcon
                fontSize="small"
                className={classes.closeIcon}
            />
            <div className={classes.discountWrapp}>
                <Discount>{discount}</Discount>
            </div>
            <div className={classes.cardFlex}>
                <CardMedia className={classes.cardMedia}>
                    <Link href="#" className={classes.imgWrapper}>
                        <img src={img} alt="" />
                    </Link>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                    <div className={classes.weightBlock}>
                        {weight.map(item => (
                            <Weight key={item}>{item}</Weight>
                        ))}
                    </div>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <CartControls />
                        <div className={classes.priceBlock}>
                            <Price>{price}</Price>
                            <OldPrice>{oldPrice}</OldPrice>
                        </div>
                    </CardActions>
                </CardContent>
            </div>
        </Card>
    )
}
