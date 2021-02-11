import { AppBar, Container, Toolbar, Link } from '@material-ui/core';
import React from 'react'
import HeaderSelect from './HeaderTop/HeaderSelect'
import { useThemeContext } from '../ThemeSwither/MyThemeProvider'
import HeaderNavList from './HeaderTop/HeaderNavList'
import HeaderSearch from './HeaderTop/HeaderSearch'
import HeaderMenu from './HeaderTop/HeaderMenu'
import LeftDrawer from './HeaderBottom/LeftDrawer'
import HeaderNavMenu from './HeaderBottom/HeaderNavMenu'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    header: {
        height: '127px',
    },
    img: {
        width: "125px",
    },
    toolbar: {
        height: '60px',
        display: "flex",
        justifyContent: "space-between",
        borderBottom: `1px solid #efefef`

    },
    toolbar2: {
        height: '67px',
        display: "flex",
        justifyContent: "space-between"
    }
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
                <Link href="#" onClick={e => e.preventDefault}>
                    <img
                        className={classes.img}
                        src={nightMode ? "/dark-logo.svg" : "/main-logo.svg"}
                        alt=""
                    />
                </Link>

                <HeaderSelect selectItems={selectItems} />
                <HeaderSearch />

                <HeaderNavList />
                <HeaderMenu />
            </Toolbar>
            <Toolbar className={classes.toolbar2}>
                <HeaderNavMenu />
                <LeftDrawer />
            </Toolbar>
        </AppBar >
    )
}

