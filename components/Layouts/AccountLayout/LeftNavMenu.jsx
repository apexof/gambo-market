import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ViewListIcon from '@material-ui/icons/ViewList';
import Link from '../../Elements/Link';
import cx from 'clsx';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles(theme => ({
    menu: {
        borderRadius: 5,
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        overflow: "hidden",
    },
    link: {
        padding: "8px 16px",
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
        "&:hover": {
            background: theme.palette.type === "dark" ? "#333" : "#ffecec",
        }
    },
    linkActive: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        "&:hover": {
            background: theme.palette.secondary.main,
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        },
        "& svg": {
            color: theme.palette.secondary.contrastText,

        },
    },
    item: {
        padding: 0,
        display: "block",
    },
}))

export default function LeftNavMenu({ rootPath }) {
    const classes = useStyles();
    const router = useRouter();
    const menu = [
        {
            id: 2,
            title: "Overview",
            href: "",
            icon: <ViewListIcon className={classes.icon} />,
        },
        {
            id: 1,
            title: "My Orders",
            href: "/my-orders",
            icon: <DashboardIcon className={classes.icon} />,
        },
        {
            id: 4,
            title: "My Rewards",
            href: "/my-rewards",
            icon: <CardGiftcardIcon className={classes.icon} />,

        },
        {
            id: 5,
            title: "My Wallet",
            href: "/my-wallet",
            icon: <AccountBalanceWalletIcon className={classes.icon} />,
        },
        {
            id: 6,
            title: "Shopping Wishlist",
            href: "/shopping-wishlist",
            icon: <FavoriteBorderIcon className={classes.icon} />,
        },
        {
            id: 7,
            title: "My Address",
            href: "/my-address",
            icon: <LocationOnIcon className={classes.icon} />,
        },
        {
            id: 8,
            title: "Invoice",
            href: "/invoice",
            icon: <ListAltIcon className={classes.icon} />,
        },
        {
            id: 9,
            title: "Logout",
            href: "/logout",
            icon: <StarBorderIcon className={classes.icon} />,
        },
    ]
    return (
        <List disablePadding className={cx(classes.menu, "shadow1")}>
            {menu.map(item => {
                const active = `${rootPath}${item.href}` === router.pathname;
                return (
                    <ListItem key={item.id} className={classes.item}>
                        <Link href={`${rootPath}${item.href}`} className={cx(classes.link, active && classes.linkActive)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>
                                {item.title}
                            </ListItemText>
                        </Link>
                    </ListItem>
                )
            })}
        </List>
    )
}