import { Box, Grid, } from "@material-ui/core"
import React, { FC, } from "react"
import AccountLayout from "../../components/Layouts/AccountLayout/AccountLayout"
import Table from "../../components/Elements/Table"
import Reward from "../../components/PagesData/Account/Rewards/Rewards/Reward"
import HistoryList from "../../components/PagesData/Account/Wallet/History/HistoryList"
import Balance from "../../components/PagesData/Account/Wallet/Balance"

const history = [
    {
        id: 1,
        date: "6 May 2018, 12.56PM",
        price: 25,
        type: "Purchase",
        transactionID: "GAMBO14255896",
    },
    {
        id: 2,
        date: "6 May 2021, 12.56PM",
        price: 20,
        type: "Sell",
        transactionID: "GAMBO14255896",
    },
    {
        id: 3,
        date: "16 May 2019, 12.56PM",
        price: 35,
        type: "Purchase",
        transactionID: "GAMBO14255896",
    },
    {
        id: 4,
        date: "26 May 2018, 12.56PM",
        price: 125,
        type: "Purchase",
        transactionID: "GAMBO14255896",
    },
    {
        id: 5,
        date: "6 May 2018, 12.56PM",
        price: 25,
        type: "Purchase",
        transactionID: "GAMBO14255896",
    }
]

const reward = {
    id: 1,
    value: "$2",
    type: "Cashback Won",
    date: "Added : 8 May 2020",
    icon: "/img/account/gift.svg",
}
const cashBack = {
    id: 1,
    value: "$2",
    type: "Cashback Won",
    info: "100% of thiscan be used for your next order.",
    icon: "/img/account/gift.svg",
}

const MyWallet: FC = () => {
    return (
        <AccountLayout title="My Wallet">
            <Box display="flex" m={-2}>
                <Box width="50%" p={2}>
                    <Reward
                        reward={reward}
                    />
                </Box>
                <Box width="50%" p={2}>
                    <Reward
                        reward={cashBack}
                    />
                </Box>
            </Box>
            <Box my={4}>
                <Table title="Active Offers" />
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                    <Balance />
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                    <HistoryList items={history} />
                </Grid>
            </Grid>
        </AccountLayout>
    )
}

export default MyWallet
