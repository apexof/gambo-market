import { Box, List, ListItem, } from '@material-ui/core'
import React from 'react'
import Link from "../../Link";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const menuItems = [
    {
        id: 1,
        title: "Home",
        green: true,
        subMenu: [
            {
                id: 1,
                title: "Food",
            },
            {
                id: 2,
                title: "Food",
            },
            {
                id: 3,
                title: "Food",
            },
            {
                id: 4,
                title: "Food",
            },
            {
                id: 5,
                title: "Food",
            },
        ]
    },
    {
        id: 2,
        title: "New Products",
    },
    {
        id: 3,
        title: "Featured Products",
        subMenu: [
            {
                id: 1,
                title: "About Us",
            },
            {
                id: 2,
                title: "About Us",
            },
            {
                id: 3,
                title: "About Us",
            },
            {
                id: 4,
                title: "About Us",
            },
            {
                id: 5,
                title: "About Us",
            },
            {
                id: 6,
                title: "About Us",
            },
        ]
    },
    {
        id: 4,
        title: "Pages",
        green: true,
        subMenu: [
            {
                id: 1,
                title: "Account",
                href: "/account",
            },
            {
                id: 2,
                title: "Store",
                href: "/store",
            },
            {
                id: 3,
                title: "Shop Grid",
                href: "/shop-grid",
            },
        ]
    },
    {
        id: 5,
        title: "Blog",
    },
    {
        id: 6,
        title: "Contact Us",
    },
]

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        marginRight: "auto",
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
    },
    listItem: {
        position: 'relative',
        '&:hover': {
            '& ul': {
                transform: 'scaleY(1)',
            }
        }
    },
    link: {
        whiteSpace: 'nowrap',
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main,
        },
    },
    arrow: {
        // color: theme.palette.primary.black,
    },
    subMenu: {
        position: 'absolute',
        left: '0',
        top: '100%',
        minWidth: '150px',
        backgroundColor: theme.palette.primary.main,
        transform: 'scaleY(0)',
        transformOrigin: 'top',
        transition: 'all 0.3s ease',
        zIndex: '2',
        borderRadius: '0 0 5px 3px',
        boxShadow: `1px 2px 2px 1px ${theme.palette.primary.dark}`
    },
}))

export default function HederMenu() {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            {menuItems.map(item => (
                <ListItem key={item.id} className={classes.listItem}>
                    <Link className={classes.link} href="#">
                        <Box>
                            {item.title}
                        </Box>
                        {item.subMenu && <ExpandMoreIcon className={classes.arrow} />}
                    </Link >
                    {item.subMenu && (
                        <List className={classes.subMenu}>
                            {item.subMenu.map(subItem => (
                                <ListItem key={subItem.id}>
                                    <Link href={subItem.href || "#"} className={classes.link}>
                                        {subItem.title}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </ListItem>
            ))}
        </List >
    )
}
