import React, { FC, } from "react"
import { Button, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"
import WishIcon from "./WishIcon"
import { Product, AddToCart, RemoveFromCart, } from "../../../types"
import { haveItemInWishList, } from "../../../helpers"

const useStyles = makeStyles((theme) => ({
    btn: {
        height: "35px",
        width: "35px",
        minWidth: "unset",
        borderRadius: "50%",
    },
}))

interface IProps {
    product: Product,
    wishList: Product[],
    addToWishList: AddToCart
    removeFromWishList: RemoveFromCart
}

const WishIconBtn: FC<IProps> = ({ addToWishList, product, wishList, removeFromWishList, }) => {
    let wished = false
    if (product) {
        wished = haveItemInWishList(wishList, product.id)
    }
    const classes = useStyles()

    const handleClick = () => {
        if (product) {
            if (wished) removeFromWishList(product.id)
            else addToWishList(product)
        }
    }

    return (
        <Button
            onClick={handleClick}
            className={classes.btn}
            title={wished ? "Remove from wish list" : "Add to wish list"}
        >
            <WishIcon wished={wished} />
        </Button>
    )
}

export default WishIconBtn
