import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import Footer from "../Footer"
import CommonHead from "./CommonHead"
import Header from "../Header"

const useStyles = makeStyles((theme) => ({ page: {}, }))

export default function CategoryLayout({ children, }) {
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <CommonHead />
            <Header />
            {children}
            <Footer />
        </div>
    )
}
