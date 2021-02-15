import { Button, Typography } from '@material-ui/core'
import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import AddressList from '../../components/PagesData/Account/Address/AddressList'
import { makeStyles } from '@material-ui/core/styles';
const list = [
    {
        id: 1,
        address: "#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001",
        title: "Home"
    },
    {
        id: 2,
        address: "#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001",
        title: "Office"
    },
    {
        id: 3,
        address: "#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001",
        title: "Other"
    },
]

const useStyles = makeStyles(theme => ({
    root: {

    },
    title: {

    },
    block: {
        padding: "15px 20px",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        background: theme.palette.background.paper,
    },
    blockWithOutBorder: {
        padding: "15px 20px",
        background: theme.palette.background.paper,
    },
}))

export default function MyAddress() {
    const classes = useStyles();

    return (
        <AccountLayout title="My Address">
            <div className={classes.root}>
                <div className={classes.block}>
                    <Typography variant="h4">My Address</Typography>
                </div>
                <div className={classes.blockWithOutBorder}>
                    <Button variant="contained" color="secondary" className={classes.btn}>
                        Add New Address
                    </Button>
                </div>

                <AddressList items={list} />
            </div>
        </AccountLayout>
    )
}