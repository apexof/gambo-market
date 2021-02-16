import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: props => ({
        borderBottom: props.border ? `1px solid ${theme.palette.grey["50"]}` : 0,
        padding: "15px 20px",
        background: theme.palette.background.paper,
    }),
}))

export default function BlockTitle({ children, border = true }) {

    const classes = useStyles({ border });

    return (
        <div className={classes.der}>
            <Typography className={classes.title} variant="h4">{children}</Typography>
        </div>
    )
}