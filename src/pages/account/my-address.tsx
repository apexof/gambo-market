import { Button, } from "@material-ui/core"
import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import AccountLayout from "../../components/Layouts/AccountLayout/AccountLayout"
import AddressList from "../../components/PagesData/Account/Address/AddressList"
import BlockTitle from "../../components/Elements/BlockTitle"

export interface IAddress {
    id: number
    title: string
    address: string
}

const list: IAddress[] = [
    {
        id: 1,
        address: "#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001",
        title: "Home",
    },
    {
        id: 2,
        address: "#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001",
        title: "Office",
    },
    {
        id: 3,
        address: "#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001",
        title: "Other",
    }
]

const useStyles = makeStyles((theme) => ({
    blockWithOutBorder: {
        padding: "15px 20px",
        background: theme.palette.background.paper,
    },
}))

const MyAddressPage: FC = () => {
    const classes = useStyles()

    return (
        <AccountLayout title="My Address">
            <BlockTitle>My Address</BlockTitle>
            <div className={classes.blockWithOutBorder}>
                <Button variant="contained" color="secondary">
                    Add New Address
                </Button>
            </div>
            <AddressList items={list} />
        </AccountLayout>
    )
}

export default MyAddressPage
