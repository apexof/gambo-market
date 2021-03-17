import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import Address from "./Address"
import { IAddress, } from "../../../../pages/account/my-address"

const useStyles = makeStyles((theme) => ({
    item: {
        width: "100%",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        "&:last-child": { borderBottom: 0, },
    },
}))

interface IProps {
    items: IAddress[]
}

const AddressList: FC<IProps> = ({ items, }) => {
    const classes = useStyles()

    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className={classes.item}>
                    <Address
                        id={item.id}
                        title={item.title}
                        address={item.address}
                    />
                </div>
            ))}
        </div>
    )
}

export default AddressList
