import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    weight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.text.disabled,
        padding: "0 8px",
        cursor: "pointer",
        color: "#fff",
        borderRadius: 3,
        fontWeight: 600,
        fontSize: 12,
        height: 25,
        minWidth: 20,
        "&:hover": {
            background: theme.palette.secondary.main,
        }
    },
}))

export default function Weight({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.weight}>
            {`${children} kg`}
        </div>
    )
}