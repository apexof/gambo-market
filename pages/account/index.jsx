import { Box, Button, Fab, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import Link from '../../components/Link'
import OverviewBox from '../../components/PagesData/Account/Overview/OverviewBox'
import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ViewListIcon from '@material-ui/icons/ViewList';
import Tooltip from '../../components/Elements/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        justifyContent: "space-between",
        margin: `-${theme.spacing(2)}`,
        flexWrap: "wrap",
    },
    itemWrap: {
        padding: theme.spacing(2),
    },
    itemPart: {
        width: "50%",
    },
    itemFull: {
        width: "100%",
    },
    rewardBtn: {
        marginRight: theme.spacing(1),
    },
    rewardLink: {
        marginTop: theme.spacing(1),
        display: "block",
        color: theme.palette.text.primary,
        "&:hover": {
            color: theme.palette.secondary.main,
        }
    },
    walletLink: {
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
    },
    walletList: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        marginBottom: theme.spacing(1),
    },
    walletIcon: {
        minWidth: "unset",
        marginRight: theme.spacing(0.5),
    },
    ordersList: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ordersTooltipBlock: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        "& svg": {
            marginLeft: theme.spacing(1),
            cursor: "pointer",
        },
    },
}))


export default function Overview() {
    const classes = useStyles();
    const menu = [
        {
            id: 2,
            title: "Points Earning",
            href: "/account",
            icon: <ViewListIcon className={classes.walletIconImg} />,
        },
        {
            id: 1,
            title: "3 offers Active",
            href: "/account/my-orders",
            icon: <DashboardIcon className={classes.walletIconImg} />,
        },
        {
            id: 4,
            title: "Payment Methods",
            href: "/account/my-rewards",
            icon: <CardGiftcardIcon className={classes.walletIconImg} />,
        },
    ]
    return (
        <AccountLayout title="Overview">
            <Typography variant="h2">
                Hi! John Doe
            </Typography>
            <Box className={classes.box}>
                <div className={`${classes.itemWrap} ${classes.itemPart}`}>
                    <OverviewBox
                        title={"My Rewards"}
                        footerTitle={"6 Rewards"}
                        contentTitle={"Rewards and Details"}
                    >
                        <Button size="small" variant="contained" color="secondary" className={classes.rewardBtn}>
                            Won 40% Off
                        </Button>
                        <Button size="small" variant="contained" color="secondary" className={classes.rewardBtn}>
                            Won $2
                        </Button>
                        <Button size="small" variant="contained" color="secondary" className={classes.rewardBtn}>
                            Caskback $1
                        </Button>
                        <Typography variant="body2">
                            <Link className={classes.rewardLink} href="/">
                                + More
                            </Link>
                        </Typography>
                    </OverviewBox>
                </div>
                <div className={`${classes.itemWrap} ${classes.itemPart}`}>
                    <OverviewBox
                        title={"My Orders"}
                        footerTitle={"2 Recently Purchases"}
                        contentTitle={"All Orders"}
                    >
                        <div className={classes.ordersList}>
                            <Typography variant="body2" className={classes.ordersTooltipBlock} >
                                2 Items
                            <Tooltip title="2kg brocoli 1kg apple">
                                    <HelpIcon fontSize="small" />
                                </Tooltip>
                            </Typography>
                            <Typography color="secondary">On the way</Typography>
                            <Typography>$22</Typography>
                        </div>
                    </OverviewBox>
                </div>
                <div className={`${classes.itemWrap} ${classes.itemFull}`}>
                    <OverviewBox
                        title={"My Wallet"}
                        footerTitle={"Credits $100"}
                        contentTitle={"Rewards and Details"}
                    >
                        <List disablePadding className={classes.walletList}>
                            {menu.map(item => (
                                <Link key={item.id} href={item.href} className={classes.walletLink}>
                                    <ListItem>
                                        <ListItemIcon className={classes.walletIcon}>{item.icon}</ListItemIcon>
                                        <ListItemText>
                                            {item.title}
                                        </ListItemText>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </OverviewBox>
                </div>
            </Box>
        </AccountLayout>
    )
}