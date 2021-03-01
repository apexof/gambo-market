import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import Link from '../../../Elements/Link'
import OverviewBox from './OverviewBox'
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ViewListIcon from '@material-ui/icons/ViewList';
import Tooltip from '../../../Elements/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(theme => ({
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
        <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} sm={6} md={12} lg={6}>
                <OverviewBox
                    title={"My Rewards"}
                    footerTitle={"6 Rewards"}
                    contentTitle={"Rewards and Details"}
                >
                    <Grid container spacing={1}>
                        <Grid item>
                            <Button size="small" variant="contained" color="secondary">Won 40% Off</Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" variant="contained" color="secondary">Won $2</Button>
                        </Grid>
                        <Grid item>
                            <Button size="small" variant="contained" color="secondary">Caskback $1</Button>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                <Link className={classes.rewardLink} href="/">+ More</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </OverviewBox>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={6}>
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
            </Grid>
            <Grid item xs={12} >
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
            </Grid>
        </Grid>
    )
}