import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Discount from './DiscountBlock';
import Link from '../../Elements/Link';
import Price from '../../Elements/Price';
import OldPrice from '../../Elements/OldPrice';
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
    delIcon: {
        cursor: "pointer",
    },
}))

export default function WishItem({ title, img, price, oldPrice, discount, id }) {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <div className={classes.discountWrapp}>
                <Discount>{discount}</Discount>
            </div>
            <Link href={`/product/${id}`}>
                <div className={classes.img}>
                    <img width={110} src={img} alt="" />
                </div>
            </Link>
            <Box ml={2}>
                <Typography variant="h4">{title}</Typography>
                <Box display="flex" mt={1}>
                    <Price>{price}</Price>
                    <OldPrice>{oldPrice}</OldPrice>
                </Box>
            </Box>
            <Box ml="auto">
                <DeleteIcon className={classes.delIcon} />
            </Box>
        </div>
    )
}