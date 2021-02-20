import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    leftBtn: {
        borderRadius: "3px 0 0 3px",
    },
    rightBtn: {
        borderRadius: "0 3px 3px 0",
    },
    btn: {
        height: "30px",
        width: "30px",
        minWidth: "unset",
        flexShrink: 0,
        color: "#fff",
        background: theme.palette.type === "dark" ? theme.palette.secondary.main : theme.palette.text.primary,
        "&:hover": {
            background: "#f55d2c",
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        },
    }
}))

export default function PlusCartBtc({ type, onClick }) {
    const classes = useStyles();
    const typeClass = type === "left" ? "leftBtn" : "rightBtn";
    return (
        <Button className={`${classes.btn} ${classes[typeClass]}`} onClick={onClick}>
            {type === "left" ? "-" : "+"}
        </Button>
    )
}