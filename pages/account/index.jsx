import { Box, Typography } from '@material-ui/core'
import OverviewList from '../../components/PagesData/Account/Overview/OverviewList'
import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}))

export default function Overview() {
    const classes = useStyles();

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