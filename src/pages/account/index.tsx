import { Box, Typography, } from "@material-ui/core"
import React, { FC, } from "react"
import OverviewList from "../../components/PagesData/Account/Overview/OverviewList"
import AccountLayout from "../../components/Layouts/AccountLayout/AccountLayout"

const Overview: FC = () => {
    return (
        <AccountLayout title="Overview">
            <Box mb={3.5}>
                <Typography variant="h2">
                    Hi! John Doe
                </Typography>
            </Box>
            <OverviewList />
        </AccountLayout>
    )
}

export default Overview
