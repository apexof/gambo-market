import React, { FC, } from "react"
import { List, ListItem, Typography, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"
import Icon from "@material-ui/core/Icon"
import PhoneIcon from "@material-ui/icons/Phone"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import RedeemIcon from "@material-ui/icons/Redeem"
import Link from "../../Elements/Link"

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 0,
        [theme.breakpoints.down("md")]: { marginLeft: "auto", },
        [theme.breakpoints.down("sm")]: { display: "none", },
    },
    link: {
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        color: theme.palette.text.primary,
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.secondary.main,
        },
    },
    icon: { marginRight: "5px", },
}))

const HeaderNavList: FC = () => {
    const classes = useStyles()
    const menuItems = [
        {
            id: 1,
            title: "1800-000-000",
            icon: <PhoneIcon className={classes.icon} />,
            href: "tel:1800-000-000",
            nativeLink: true,
        },
        {
            id: 2,
            title: "Offers",
            icon: <RedeemIcon className={classes.icon} />,
            href: "/",
        },
        {
            id: 3,
            title: "Help",
            icon: <HelpOutlineIcon className={classes.icon} />,
            href: "/",
        }
    ]

    return (
        <List
            className={classes.flexContainer}
        >
            {menuItems.map((item) => (
                <ListItem key={item.id}>
                    {item.nativeLink
                        ? (
                            <a href={item.href} className={classes.link}>
                                {item.icon}
                                <Typography variant="body2">
                                    {item.title}
                                </Typography>
                            </a>
                        )
                        : (
                            <Link href={item.href} className={classes.link}>
                                <Icon className={classes.icon}>{item.icon}</Icon>
                                <Typography variant="body2">
                                    {item.title}
                                </Typography>
                            </Link>
                        )}
                </ListItem>
            ))}
        </List>
    )
}

export default HeaderNavList
