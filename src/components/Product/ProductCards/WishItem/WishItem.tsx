import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Typography, } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/DeleteOutlineOutlined"
import { Product, RemoveFromCart, } from "../../../../types"
import Discount from "../DiscountBlock"
import Link from "../../../Elements/Link"
import Price from "../../../Elements/Price"
import OldPrice from "../../../Elements/OldPrice"
import ImgWithPreview from "../../../Elements/LazyImg/Img"

const useStyles = makeStyles((theme) => ({
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
    delIcon: { cursor: "pointer", },
    link: { width: "100px", },
}))

type Props = {
    product: Product
    removeFromWishList: RemoveFromCart
}

const WishItem: FC<Props> = ({ product, removeFromWishList, }) => {
    const { title, img, price, oldPrice, discount, id, } = product
    const classes = useStyles()

    return (
        <div className={classes.item}>
            <div className={classes.discountWrapp}>
                <Discount>{discount}</Discount>
            </div>
            <Link href={`/product/${id}`} className={classes.link}>
                <ImgWithPreview img={img} aspectRatio={1} />
            </Link>
            <Box ml={2}>
                <Typography variant="h4">{title}</Typography>
                <Box display="flex" mt={1}>
                    <Price>{price}</Price>
                    <OldPrice>{oldPrice}</OldPrice>
                </Box>
            </Box>
            <Box ml="auto">
                <DeleteIcon className={classes.delIcon} onClick={() => removeFromWishList(id)} />
            </Box>
        </div>
    )
}

export default WishItem
