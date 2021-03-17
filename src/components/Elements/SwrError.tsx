import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Typography, TypographyClassKey, } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({ root: { color: theme.palette.secondary.main, }, }))

type Props = {
    error: any
    variant?: TypographyClassKey
}

const SwrError: FC<Props> = ({ error, variant = "h2", }) => {
    console.log("SwrError: ", error)
    const classes = useStyles()

    return (
        <Typography variant={variant} className={classes.root}>
            Произошла ошибка
        </Typography>
    )
}

export default SwrError
