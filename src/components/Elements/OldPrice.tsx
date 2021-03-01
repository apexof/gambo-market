import React, { FC, ReactNode, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Typography, } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    oldPrice: {
        fontSize: 18,
        color: "#c7c7c7",
        textDecoration: (props: { line: boolean }) => (props.line ? "line-through" : "unset"),
        marginLeft: 10,
        fontWeight: 600,
    },
}))

type Props = {
    children: ReactNode,
    line: boolean,
    currency: string,
}

const OldPrice: FC<Props> = ({ children, line = true, currency = "$", }) => {
    const classes = useStyles({ line, })

    return (
        <Typography variant="body2" className={classes.oldPrice}>
            {currency}
            {children}
        </Typography>
    )
}

export default OldPrice
