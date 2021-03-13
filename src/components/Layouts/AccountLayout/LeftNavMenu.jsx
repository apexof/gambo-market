import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import cx from "clsx"
import { useRouter, } from "next/router"
import { List, ListItem, ListItemIcon, ListItemText, } from "@material-ui/core"
import Link from "../../Elements/Link"
import { menuItems, } from "../../../menus/profileMenu"

const useStyles = makeStyles((theme) => ({
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
        "&:hover": { background: theme.palette.type === "dark" ? "#333" : "#ffecec", },
    },
    linkActive: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        "&:hover": {
            background: theme.palette.secondary.main,
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        },
        "& svg": { color: theme.palette.secondary.contrastText, },
    },
    item: {
        padding: 0,
        display: "block",
    },
}))

export default function LeftNavMenu() {
    const classes = useStyles()
    const router = useRouter()

    return (
        <List disablePadding className={cx(classes.menu, "shadow1")}>
            {menuItems.map((item) => {
                const active = item.href === router.pathname

                return (
                    <ListItem key={item.id} className={classes.item}>
                        <Link href={item.href} className={cx(classes.link, active && classes.linkActive)}>
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
