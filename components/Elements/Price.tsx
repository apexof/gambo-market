import React, { FC, ReactNode, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Typography, } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    price: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: "24px",
        color: "#f55d2c",
    },
}))

type Props = {
    children: ReactNode
}

const Price: FC<Props> = ({ children, }) => {
    const classes = useStyles()

    return (
        <Typography variant="body2" className={classes.price}>
            $
            {children}
        </Typography>
    )
}

export default Price
