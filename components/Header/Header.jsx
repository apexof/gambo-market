import { AppBar, Container, Toolbar } from '@material-ui/core';
import React from 'react'
import Link from '../Link'
import HeaderSelect from './HeaderTop/HeaderSelect'
import { useThemeContext } from '../ThemeSwither/MyThemeProvider'
import HeaderNavList from './HeaderTop/HeaderNavList'
import HeaderSearch from './HeaderTop/HeaderSearch'
import HeaderMenu from './HeaderTop/HeaderMenu'
import LeftDrawer from './HeaderBottom/LeftDrawer'
import HeaderNavMenu from './HeaderBottom/HeaderNavMenu'
import SelectCategoryModal from './HeaderBottom/SelectCategoryModal'
import { makeStyles } from "@material-ui/core/styles";
import WishIcon from '../WishIcon';

const useStyles = makeStyles(theme => ({
    header: {
        boxShadow: "none",
    },
    logo: {
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        width: "125px",
        "& img": {
            width: "125px",
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

export default function HeaderTop(props) {
    const { nightMode } = useThemeContext()
    const classes = useStyles();

    return (
        <AppBar position="sticky" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <Link href="/" onClick={e => e.preventDefault} className={classes.logo}>
                    <img
                        className={classes.img}
                        src={nightMode ? "/dark-logo.svg" : "/main-logo.svg"}
                        alt=""
                    />
                </Link>
                <HeaderSelect selectItems={selectItems} />
                <HeaderSearch />
                <HeaderNavList />
                <Link href="#" className={classes.wishLink}>
                    <WishIcon />
                    <div className={classes.countWishes}>3</div>
                </Link>
                <HeaderMenu />
            </Toolbar>
            <Toolbar className={classes.toolbar2}>
                <SelectCategoryModal />
                <HeaderNavMenu />
                <LeftDrawer />
            </Toolbar>
        </AppBar >
    )
}

