import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import Order from "./Order"
import { IOrder, } from "../../../../pages/account/my-orders"

const useStyles = makeStyles((theme) => ({ itemWrap: { "& + $itemWrap": { marginTop: theme.spacing(4), }, }, }))

interface IProps {
    items: IOrder[]
}

const OrderList: FC<IProps> = ({ items, }) => {
    const classes = useStyles()

    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className={classes.itemWrap}>
                    <Order
                        order={item}
                    />
                </div>
            ))}
        </div>
    )
}

export default OrderList
