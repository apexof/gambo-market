import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { useRouter, } from "next/router"
import { Breadcrumbs, Typography, } from "@material-ui/core"
import Link from "./Link"
import { slugToTitle, } from "../../helpers"

const useStyles = makeStyles((theme) => ({
    currentItem: {
        color: theme.palette.text.primary,
        marginRight: 10,
    },
    prevLinks: { color: "#8f91ac", },
}))

const BreadCrumbs: FC = () => {
    const classes = useStyles()
    const router = useRouter()
    let breadArray = router.asPath.split("/")
    breadArray = breadArray.filter((item) => item.length)
    breadArray = breadArray.map((item) => slugToTitle(item))

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link href="/" className={classes.prevLinks}>
                <Typography variant="body1">
                    Home
                </Typography>
            </Link>
            {breadArray.map((item, i) => {
                if (i === breadArray.length - 1) {
                    return (
                        <Typography key={item} variant="body1" className={classes.currentItem}>
                            {item}
                        </Typography>
                    )
                }

                return (
                    <Link key={item} href="/" className={classes.prevLinks}>
                        <Typography variant="body1">
                            {item}
                        </Typography>
                    </Link>
                )
            })}
        </Breadcrumbs>
    )
}

export default BreadCrumbs
