import { makeStyles, } from "@material-ui/core/styles"
import React, { FC, } from "react"
import { Product, } from "../../../../types"
import Link from "../../../Elements/Link"
import WishIcon from "../../../Elements/WishBtn/WishIcon"

const useStyles = makeStyles((theme) => ({
    wishLink: {
        position: "relative",
        margin: "0 10px",
        [theme.breakpoints.down("sm")]: { marginLeft: "auto", },
    },
    countWishes: {
        background: "#f55d2c",
        fontSize: 10,
        fontWeight: "500",
        position: "absolute",
        top: "-4px",
        color: "#fff",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        right: "-4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}))

interface IProps {
    wishList: Product[]
}

const WishLink: FC<IProps> = ({ wishList, }) => {
    const classes = useStyles()

    return (
        <Link href="/account/shopping-wishlist" className={classes.wishLink}>
            <WishIcon />
            <div className={classes.countWishes}>{wishList.length}</div>
        </Link>
    )
}

export default WishLink
