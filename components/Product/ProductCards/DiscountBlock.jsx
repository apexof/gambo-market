import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    discount: {
        fontSize: 12,
        fontWeight: 500,
        color: "#fff",
        background: "#f55d2c",
        padding: "3px 10px",
        borderRadius: 3,
        textTransform: "uppercase",
    },
}))

export default function Discount({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.discount}>
            {`${children} OFF`}
        </div>
    )
}