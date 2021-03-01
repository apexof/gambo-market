import { AppBar, Box, Toolbar, } from "@material-ui/core"
import React from "react"
import { useRouter, } from "next/router"
import { makeStyles, useTheme, } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import BreadCrumbs from "../Elements/BreadCrumbs"
import Link from "../Elements/Link"
import HeaderSelect from "../Elements/Select1"
import { useThemeContext, } from "../ThemeSwitcher/MyThemeProvider"
import HeaderSearch from "./HeaderTop/HeaderSearch"
import ProfileMenu from "./HeaderTop/ProfileMenu"
import CartDrawer from "./HeaderBottom/CartDrawer"
import HeaderNavMenu from "./HeaderBottom/HeaderNavMenu"
import SelectCategoryModal from "./HeaderBottom/SelectCategoryModal"
import HeaderNavList from "./HeaderTop/HeaderNavList"
import WishLink from "./HeaderTop/WishLink"

const useStyles = makeStyles((theme) => ({
    header: { boxShadow: (prop) => (prop.scrolled ? "0px 1px 12px -3px rgba(0, 0, 0, 0.3)" : "none"), },
    logo: {
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        height: "45px",
        "& img": { height: "45px", },
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
}))

const selectItems = [
    {
        id: 0,
        title: "Alessandria",
    },
    {
        id: 1,
        title: "Milano",
    },
    {
        id: 2,
        title: "Monza",
    },
    {
        id: 3,
        title: "Novara",
    },
    {
        id: 4,
        title: "Torino",
    },
    {
        id: 5,
        title: "Cremona",
    },
    {
        id: 6,
        title: "Brescia",
    },
    {
        id: 7,
        title: "Parma",
    },
    {
        id: 8,
        title: "Bregamo",
    },
    {
        id: 9,
        title: "Venezia",
    },
    {
        id: 10,
        title: "Genova",
    },
    {
        id: 11,
        title: "Reggio Emiglia",
    },
    {
        id: 10,
        title: "Modena",
    }
]

function Header({ scrolled, }) {
    const { nightMode, } = useThemeContext()
    const classes = useStyles({ scrolled, })
    const theme = useTheme()
    const router = useRouter()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const logo = matches ? "/min-logo.svg" : nightMode ? "/dark-logo.svg" : "/main-logo.svg"

    return (
        <AppBar position="sticky" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <Link href="/" onClick={(e) => e.preventDefault} className={classes.logo}>
                    <img
                        className={classes.img}
                        src={logo}
                        alt=""
                    />
                </Link>
                <Box display={{ xs: "none", lg: "block", }}>
                    <HeaderSelect selectItems={selectItems} />
                </Box>
                <HeaderSearch />
                <HeaderNavList />
                <WishLink />
                <ProfileMenu />
            </Toolbar>
            <Toolbar className={classes.toolbar2}>
                <SelectCategoryModal />
                {router.pathname === "/"
                    ? <HeaderNavMenu />
                    : (
                        <Box mr="auto" ml={2}>
                            <BreadCrumbs />
                        </Box>
                    )}
                <CartDrawer />
            </Toolbar>
        </AppBar>
    )
}

export default Header
