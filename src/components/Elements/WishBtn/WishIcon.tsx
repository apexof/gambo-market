import React, { FC, } from "react"
import cx from "clsx"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { makeStyles, } from "@material-ui/core/styles"
import { Button, } from "@material-ui/core"
import { Product, AddToCart, RemoveFromCart, } from "../../../types"
import { haveItemInWishList, } from "../../../helpers"

const useStyles = makeStyles((theme) => ({
    iconBox: {
        borderRadius: "50%",
        cursor: "pointer",
        height: "35px",
        width: "35px",
        minWidth: "unset",
        flexShrink: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.type === "dark" ? "rgba(255,255,255,0.2)" : "rgba(246,151,51,0.2)",
        color: theme.palette.type === "dark" ? "#c7c7c7" : "#f69733",
        "&:hover": {
            background: theme.palette.type === "dark" ? "rgba(255,255,255,0.2)" : "rgba(246,151,51,0.2)",
            color: theme.palette.type === "dark" ? "#c7c7c7" : "#f69733",
        },
    },
    wished: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        "&:hover": {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
    },
}))

interface IProps {
    wished?: boolean
}

const WishIcon: FC<IProps> = ({ wished = false, }) => {
    const classes = useStyles()

    return (
        <span className={cx(classes.iconBox, wished && classes.wished)}>
            <FavoriteBorderIcon fontSize="small" />
        </span>
    )
}

export default WishIcon
