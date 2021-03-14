import React, { FC, ReactNode, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Typography, } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        borderBottom: (p) => (p.border ? `1px solid ${theme.palette.grey["50"]}` : 0),
        padding: "15px 20px",
    },
}))

type Props = {
    border?: boolean,
    children: ReactNode
}

const BlockTitle: FC<Props> = ({ children, border = true, }) => {
    const classes = useStyles({ border, })

    return (
        <Typography className={classes.root} variant="h4">{children}</Typography>
    )
}

export default BlockTitle
