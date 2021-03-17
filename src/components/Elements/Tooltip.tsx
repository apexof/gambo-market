import React, { FC, ReactElement, } from "react"
import { Tooltip, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    arrow: { color: theme.palette.text.primary, },
    tooltip: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        fontSize: 12,
        fontWeight: 700,
    },
}))

interface IProps {
    title: string
    children: ReactElement
}

const MyTooltip: FC<IProps> = ({ title, children, }) => {
    const classes = useStyles()

    return <Tooltip arrow classes={classes} title={title}>{children}</Tooltip>
}

export default MyTooltip
