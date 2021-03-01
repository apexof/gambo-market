import React from 'react'
import Link from '../../Elements/Link'
import { List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        [theme.breakpoints.down('md')]: {
            marginLeft: "auto",
        },
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    link: {
        whiteSpace: 'nowrap',
        display: "flex",
        alignItems: 'center',
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main,
        }
    },
    icon: {
        marginRight: "5px"
    },
}));

const menuItems = [
    {
        id: 1,
        title: "1800-000-000",
        icon: "phone",
        href: "tel:1800-000-000",
        nativeLink: true,
    },
    {
        id: 2,
        title: "Offers",
        icon: "redeem",
        href: "/"
    },
    {
        id: 3,
        title: "Help",
        icon: "help",
        href: "/"
    },
]

export default function HeaderNavList() {
    const classes = useStyles();

    return (
        <List
            className={classes.flexContainer}
        >
            {menuItems.map(item => (
                <ListItem key={item.id}>
                    {item.nativeLink ?
                        < a href={item.href} className={classes.link}>
                            <Icon className={classes.icon}>{item.icon}</Icon>
                            <Typography variant="body2">
                                {item.title}
                            </Typography>
                        </a>
                        :
                        <Link href={item.href} className={classes.link}>
                            <Icon className={classes.icon}>{item.icon}</Icon>
                            <Typography variant="body2">
                                {item.title}
                            </Typography>
                        </Link>
                    }
                </ListItem>
            ))
            }
        </List >
    )
}
