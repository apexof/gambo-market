import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import WishItem from "../../../Product/ProductCards/WishItem"

const useStyles = makeStyles((theme) => ({
    item: {
        width: "100%",
        "& + $item": { borderTop: `1px solid ${theme.palette.grey["50"]}`, },
    },
}))

export default function WishList({ wishList, }) {
    const classes = useStyles()

    return (
        <div>
            {wishList.map((item) => (
                <div key={item.id} className={classes.item}>
                    <WishItem
                        id={item.id}
                        product={item}
                    />
                </div>
            ))}
        </div>
    )
}
