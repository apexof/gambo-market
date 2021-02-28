import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({}))

type Props = {

}

const Component: FC<Props> = ({ }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            qw
        </div>
    )
}

export default Component
