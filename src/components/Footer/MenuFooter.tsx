import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Link, List, ListItem, Typography, } from "@material-ui/core"
import { IMenuItem, } from "./menus"

const useStyles = makeStyles((theme) => ({
    link: {
        color: theme.palette.primary.contrastText,
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.secondary.main,
            textDecoration: "none",
        },
    },
}))

interface IProps {
    title: string
    items: IMenuItem[]
}

const MenuFooter: FC<IProps> = ({ title, items, }) => {
    const classes = useStyles()

    return (
        <>
            <Typography variant="h4">{title}</Typography>
            <List>
                {items.map((item) => (
                    <ListItem key={item.id} disableGutters>
                        <Link className={classes.link} href="#">
                            {item.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default MenuFooter
