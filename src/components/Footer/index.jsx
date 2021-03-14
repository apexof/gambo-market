import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import TopFooter from "./TopFooter"
import MiddleFooter from "./MiddleFooter"
import BottomFooter from "./BottomFooter"

const useStyles = makeStyles((theme) => ({
    footer: {
        margin: `${theme.spacing(4)} 0 0`,
        overflow: "hidden",
    },
}))

export default function index() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <TopFooter />
            <MiddleFooter />
            <BottomFooter />
        </footer>
    )
}
