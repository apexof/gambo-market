import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CreateIcon from '@material-ui/icons/Create';
import Discount from '../../../ProductCard/DiscountBlock';
import Price from '../../../ProductCard/Price';
import OldPrice from '../../../ProductCard/OldPrice';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(3),
        display: "flex",
        background: theme.palette.background.paper,
        position: "relative",
    },
    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        width: 32,
        borderRadius: "5px",
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        marginRight: theme.spacing(2),
    },
    actions: {
        "& svg": {
            marginRight: theme.spacing(1),
            cursor: "pointer",
        },
    },
    discountWrapp: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 1,
    },
}))

export default function WishItem({ title, img, price, oldPrice, discount, }) {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <div className={classes.discountWrapp}>
                <Discount>{discount}</Discount>
            </div>
            <div className={classes.img}>
                <img width={110} src={img} alt="" />
            </div>
            <Box ml={2}>
                <Typography variant="h4">{title}</Typography>
                <Box display="flex" mt={1}>
                    <Price>{price}</Price>
                    <OldPrice>{oldPrice}</OldPrice>
                </Box>
            </Box>
            <Box ml="auto">
                <DeleteIcon />
            </Box>
        </div>
    )
}