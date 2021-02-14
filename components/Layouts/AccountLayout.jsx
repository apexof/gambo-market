import React from 'react'
import Footer from '../Footer'
import CommonHead from './CommonHead'
import Header from '../Header/Header'
import BreadCrumbs from '../Elements/BreadCrumbs'
import LeftNavMenu from '../PagesData/Account/LeftNavMenu'
import ProfileHeader from '../PagesData/Account/ProfileHeader'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    page: {
    },
    containerMui: {
        overflow: "visible",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 50,
    },
    menuWrap: {
        width: "30%",
    },
    menu: {
        paddingRight: 15,
        position: "sticky",
        top: 167,
    },
    content: {
        width: "70%",
        paddingLeft: 15,
    },
}))

export default function AccountLayout({ children, title }) {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <CommonHead />
            <Header />
            <BreadCrumbs />
            <ProfileHeader />
            <Container className={classes.containerMui}>
                <div className={classes.container}>
                    <div className={classes.menuWrap}>
                        <div className={classes.menu}>
                            <LeftNavMenu />
                        </div>
                    </div>
                    <div className={classes.content}>
                        <Typography variant="h2">{title}</Typography>
                        {children}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
