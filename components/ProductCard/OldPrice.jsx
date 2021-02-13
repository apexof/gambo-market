import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    oldPrice: {
        fontSize: 18,
        color: "#c7c7c7",
        textDecoration: "line-through",
        marginLeft: 10,
        fontWeight: 600,
    },
}))

export default function OldPrice({ children }) {
    const classes = useStyles();

    return (
        <Typography variant="body2" className={classes.oldPrice}>
            ${children}
        </Typography>
    )
}