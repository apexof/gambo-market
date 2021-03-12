import { List, ListItem, } from "@material-ui/core"
import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Link, } from "react-scroll"

const menuItems = [
    {
        id: 1,
        title: "Categories",
        alias: "categories",
    },
    {
        id: 2,
        title: "Top Products",
        alias: "top-featured-products",
    },
    {
        id: 3,
        title: "Best Values",
        alias: "best-values",
    },
    {
        id: 4,
        title: "Max discount",
        alias: "max-discount",
    },
    {
        id: 5,
        title: "New Products",
        alias: "added-new-products",
    }
]

const useStyles = makeStyles((theme) => ({
    list: {
        flexDirection: "row",
        padding: 0,
        marginRight: "auto",
        display: "none",
        [theme.breakpoints.up("md")]: { display: "flex", },
    },
    listItem: {
        position: "relative",
        cursor: "pointer",
    },
    link: {
        whiteSpace: "nowrap",
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.secondary.main,
        },
    },
    active: {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
    },
}))

const HederMenu: FC = () => {
    const classes = useStyles()

    return (
        <List className={classes.list}>
            {menuItems.map((item) => (
                <ListItem key={item.id} className={classes.listItem}>
                    <Link
                        activeClass={classes.active}
                        className={classes.link}
                        to={item.alias}
                        spy
                        hashSpy
                        smooth
                        offset={-150}
                        duration={300}
                    >
                        {item.title}
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default HederMenu
