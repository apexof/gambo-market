import React, { FC, } from "react"
import { Tooltip, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"

const useStylesBootstrap = makeStyles(theme => ({
    arrow: { color: theme.palette.text.primary, },
    tooltip: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        fontSize: 12,
        fontWeight: 700,
    },
}))

const MyTooltip: FC = (props: any) => {
    const classes = useStylesBootstrap()

    return <Tooltip arrow classes={classes} {...props} />
}

export default MyTooltip
