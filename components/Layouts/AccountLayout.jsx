import React from 'react'
import Footer from '../Footer'
import CommonHead from './CommonHead'
import Header from '../Header/Header'
import BreadCrumbs from '../BreadCrumbs'
import LeftNavMenu from '../PagesData/Account/LeftNavMenu'
import ProfileHeader from '../PagesData/Account/ProfileHeader'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 50,
    },
    menu: {
        width: "30%",
        paddingRight: 15,
    },
    content: {
        width: "70%",
        paddingLeft: 15,
    },
}))

export default function AccountLayout({ children, title }) {
    const classes = useStyles();
    return (
        <div>
            <CommonHead />
            <Header />
            <BreadCrumbs />
            <ProfileHeader />
            <Container>
                <div className={classes.container}>
                    <div className={classes.menu}>
                        <LeftNavMenu />
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
