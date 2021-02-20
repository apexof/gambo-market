import { AppBar, Box, Container, Toolbar } from '@material-ui/core';
import React from 'react'
import Link from '../Elements/Link'
import HeaderSelect from '../Elements/Select1'
import { useThemeContext } from '../ThemeSwitcher/MyThemeProvider'
import HeaderSearch from './HeaderTop/HeaderSearch'
import ProfileMenu from './HeaderTop/ProfileMenu'
import ContactMenu from './HeaderTop/ContactMenu'
import HeaderBtn from '../Elements/HeaderBtn'
import CartDrawer from './HeaderBottom/CartDrawer'
import HeaderNavMenu from './HeaderBottom/HeaderNavMenu'
import SelectCategoryModal from './HeaderBottom/SelectCategoryModal'
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
const useStyles = makeStyles(theme => ({
    header: {
        boxShadow: "none",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        height: "45px",
        "& img": {
            height: "45px",
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        alignItems: "center",
    },
    toolbar2: {
        display: "flex",
        justifyContent: "space-between",
        padding: 0,
    },
    wishLink: {
        position: "relative",
        margin: "0 10px",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "auto",
        },
    },
    countWishes: {
        background: "#f55d2c",
        fontSize: "11px",
        fontWeight: "600",
        position: "absolute",
        top: "-4px",
        right: "8px",
        color: "#fff",
        width: "16px",
        height: "16px",
        textAlign: "center",
        borderRadius: "50%",
        right: "-4px",
    },
}));

const selectItems = [
    {
        id: 0,
        title: "Gurugram"
    },
    {
        id: 1,
        title: "New Delhi"
    },
    {
        id: 2,
        title: "Bangaluru"
    },
    {
        id: 3,
        title: "Mumbai"
    },
    {
        id: 4,
        title: "Hyderabad"
    },
    {
        id: 5,
        title: "Kolkata"
    },
    {
        id: 6,
        title: "Ludhiana"
    },
    {
        id: 7,
        title: "Chandigrah"
    },
]

export default function HeaderTop({ loggedIn = false }) {
    const { nightMode } = useThemeContext()
    const classes = useStyles();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const logo = matches ? "/min-logo.svg" : nightMode ? "/dark-logo.svg" : "/main-logo.svg"
    return (
        <AppBar position="sticky" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <Link href="/" onClick={e => e.preventDefault} className={classes.logo}>
                    <img
                        className={classes.img}
                        src={logo}
                        alt=""
                    />
                </Link>
                <Box display={{ xs: "none", md: "block" }}>
                    <HeaderSelect selectItems={selectItems} />
                </Box>
                <HeaderSearch />
                {!loggedIn ?
                    <>
                        <Box mx={2}>
                            <ContactMenu />
                        </Box>
                        <ProfileMenu />
                    </>
                    :
                    <>
                        <Box mx={2}>
                            <HeaderBtn icon={<LibraryAddOutlinedIcon />} href="/add-store" text="Add Store" />
                        </Box>
                        <HeaderBtn icon={<AccountBoxOutlinedIcon />} href="/logIn" text="Log In" />
                    </>
                }
            </Toolbar>
            <Toolbar className={classes.toolbar2}>
                <SelectCategoryModal />
                <HeaderNavMenu />
                <CartDrawer />
            </Toolbar>
        </AppBar >
    )
}

