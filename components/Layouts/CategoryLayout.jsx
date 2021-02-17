import React from 'react'
import Footer from '../Footer'
import CommonHead from './CommonHead'
import Header from '../Header/Header'
import BreadCrumbs from '../Elements/BreadCrumbs'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    page: {
    },
}))

export default function CategoryLayout({ children, }) {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <CommonHead />
            <Header />
            <BreadCrumbs />
            {children}
            <Footer />
        </div>
    )
}
