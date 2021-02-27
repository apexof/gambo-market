import React, { FC, ReactNode } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

type StyleProps = {
    border?: boolean,
}
type Props = {
    border?: boolean,
    children: ReactNode
}
const useStyles = makeStyles(theme => ({
    title: {
        borderBottom: (props: StyleProps) => (props.border ? `1px solid ${theme.palette.grey["50"]}` : 0),
        padding: "15px 20px",
        background: theme.palette.background.paper,
    },
}))

const BlockTitle: FC<Props> = ({ children, border = true, }) => {
    const classes = useStyles({ border, })

    return (
        <Typography className={classes.title} variant="h4">{children}</Typography>
    )
}
export default BlockTitle
