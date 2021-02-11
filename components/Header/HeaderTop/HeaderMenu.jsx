import { Button, Menu, MenuItem, Typography } from '@material-ui/core'
import React from 'react'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from "@material-ui/core/styles";
import ThemeSwitcher from '../../ThemeSwither/ThemeSwitcher';

const menuItems = [
    {
        id: 0,
        icon: "headset",
        href: "#",
        title: "Dashboard",
    },
    {
        id: 1,
        icon: "micOff",
        href: "#",
        title: "My orders",
    },
    {
        id: 2,
        icon: "dialpad",
        href: "#",
        title: "My wishlist",
    },
    {
        id: 3,
        icon: "call",
        href: "#",
        title: "My wallet",
    },
    {
        id: 4,
        icon: "contacts",
        href: "#",
        title: "Others",
    },
    {
        id: 5,
        icon: "dialpad",
        href: "#",
        title: "faq",
    },
]

const useStyles = makeStyles(theme => ({
    btn: {
        height: "40px",
        borderRadius: "10px",
        background: theme.palette.primary.light,
        padding: 15,
        textTransform: 'none',
        whiteSpace: "nowrap",
    },
    img: {
        height: "30px",
        marginRight: "10px",
        borderRadius: "50%",
    },
    menuIcon: {
        marginRight: "15px"
    },
}));

export default function HeaderMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
        <>
            <Button
                className={classes.btn}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <img className={classes.img} src="/profile-logo.jpg" alt="" />
                <Typography variant="body2" component="span">
                    John Doe
                </Typography>
            </Button>
            <ThemeSwitcher />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {menuItems.map(item => (
                    <MenuItem key={item.id} onClick={handleClose}>
                        <Icon className={classes.menuIcon}>{item.icon}</Icon>
                        <Typography variant="body2">
                            {item.title}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
