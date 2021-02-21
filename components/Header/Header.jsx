import { AppBar, Box, Toolbar } from '@material-ui/core';
import React from 'react'
import Link from '../Elements/Link'
import HeaderSelect from '../Elements/Select1'
import { useThemeContext } from '../ThemeSwitcher/MyThemeProvider'
import HeaderSearch from './HeaderTop/HeaderSearch'
import ProfileMenu from './HeaderTop/ProfileMenu'
import ContactMenu from './HeaderTop/ContactMenu'
import CartDrawer from './HeaderBottom/CartDrawer'
import HeaderNavMenu from './HeaderBottom/HeaderNavMenu'
import SelectCategoryModal from './HeaderBottom/SelectCategoryModal'
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
}));

const selectItems = [
    {
        id: 0,
        title: "Alessandria"
    },
    {
        id: 1,
        title: "Milano"
    },
    {
        id: 2,
        title: "Monza"
    },
    {
        id: 3,
        title: "Novara"
    },
    {
        id: 4,
        title: "Torino"
    },
    {
        id: 5,
        title: "Cremona"
    },
    {
        id: 6,
        title: "Brescia"
    },
    {
        id: 7,
        title: "Parma"
    },
    {
        id: 8,
        title: "Bregamo"
    },
    {
        id: 9,
        title: "Venezia"
    },
    {
        id: 10,
        title: "Genova"
    },
    {
        id: 11,
        title: "Reggio Emiglia"
    },
    {
        id: 10,
        title: "Modena"
    },
]

export default function HeaderTop() {
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
                <Box mx={2}>
                    <ContactMenu />
                </Box>
                <ProfileMenu />
            </Toolbar>
            <Toolbar className={classes.toolbar2}>
                <SelectCategoryModal />
                <HeaderNavMenu />
                <CartDrawer />
            </Toolbar>
        </AppBar >
    )
}

