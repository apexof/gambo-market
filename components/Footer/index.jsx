import React from 'react'
import TopFooter from './TopFooter'
import MiddleFooter from './MiddleFooter'
import BottomFooter from './BottomFooter'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        margin: "50px 0 0",
        overflow: "hidden",
    },
}))


export default function index() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <TopFooter />
            <MiddleFooter />
            <BottomFooter />
        </footer>
    )
}
