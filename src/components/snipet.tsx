import { makeStyles, } from "@material-ui/core/styles"
import React, { FC, } from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        borderBottom: (p) => (p.border ? `1px solid ${theme.palette.grey["50"]}` : 0),
    },
}))

type Props = {

}

const Component: FC<Props> = ({ }) => {
    const classes = useStyles()
    console.log("object")

    return (
        <div className={classes.root}>
            text
        </div>
    )
}

export default Component
