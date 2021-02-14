import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Link from '../../Link';
import cx from 'clsx';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    item: {

    },
    link: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        "&:hover": {
            background: "#ffecec",
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
    icon: {

    },
}))

export default function BannerSection() {
    const classes = useStyles();
    const router = useRouter();
    const menu = [
        {
            id: 2,
            title: "Overview",
            href: "/account",
            icon: <StarBorderIcon className={classes.icon} />,
        },
        {
            id: 1,
            title: "My Orders",
            href: "/account/my-orders",
            icon: <DashboardIcon className={classes.icon} />,
        },
        {
            id: 4,
            title: "My Rewards",
            href: "/account/my-rewards",
            icon: <StarBorderIcon className={classes.icon} />,

        },
        {
            id: 5,
            title: "My Wallet",
            href: "/account/my-wallet",
            icon: <DashboardIcon className={classes.icon} />,
        },
        {
            id: 6,
            title: "Shopping Wishlist",
            href: "/account/shopping-wishlist",
            icon: <StarBorderIcon className={classes.icon} />,
        },
        {
            id: 7,
            title: "My Address",
            href: "/account/my-address",
            icon: <DashboardIcon className={classes.icon} />,
        },
        {
            id: 8,
            title: "Logout",
            href: "/account/logout",
            icon: <StarBorderIcon className={classes.icon} />,
        },
    ]
    return (
        <div className={classes.der}>
            <List disablePadding>
                {menu.map(item => {
                    const active = item.href === router.pathname;
                    return (
                        <Link key={item.id} href={item.href} className={cx(classes.link, active && classes.linkActive)}>
                            <ListItem className={classes.item}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>
                                    {item.title}
                                </ListItemText>
                            </ListItem>
                        </Link>
                    )
                })}
            </List>
        </div >
    )
}