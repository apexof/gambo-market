import { Box, Button, Menu, MenuItem, Typography } from '@material-ui/core'
import React from 'react'
import { menuItems } from '../../../menus/profileMenu'
import cx from 'clsx'
import Link from '../../Elements/Link'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from "@material-ui/core/styles";
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher';
import NightsStayIcon from '@material-ui/icons/NightsStay';


const useStyles = makeStyles(theme => ({
    btn: {
        height: "40px",
        borderRadius: "10px",
        background: theme.palette.primary.light,
        padding: "0 15px",
        flexShrink: 0,
        textTransform: 'none',
        whiteSpace: "nowrap",
        marginLeft: theme.spacing(2),
    },
    img: {
        height: "30px",
        marginRight: "10px",
        borderRadius: "50%",
    },
    item: {
        padding: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
        width: 275,
        color: theme.palette.text.primary,
    },
    menuIcon: {
        marginRight: "15px"
    },
    nightMode: {
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        background: theme.palette.background.default
    },
    logInLink: {
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(1),
    },
}));

export default function HeaderMenu({ loggedIn = false }) {
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
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem key={101} className={cx(classes.nightMode, classes.item)}>
                    <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                        <Box display="flex" alignItems="center">
                            <NightsStayIcon />
                            <Box ml={2}>
                                <Typography variant="body2">
                                    Night Mode
                                </Typography>
                            </Box>
                        </Box>
                        <ThemeSwitcher />
                    </Box>
                </MenuItem>
                {menuItems.map(item => (
                    <Link key={item.id} href={item.href} onClick={handleClose}>
                        <MenuItem className={classes.item}>
                            <Icon className={classes.menuIcon}>{item.icon}</Icon>
                            <Typography variant="body2">
                                {item.title}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </>
    )
}
