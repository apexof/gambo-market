import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    iconBox: {
        borderRadius: "50%",
        cursor: "pointer",
        height: "35px",
        width: "35px",
        flexShrink: 0,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.type === "dark" ? "rgba(255,255,255,0.2)" : "rgba(246,151,51,0.2)",
        color: theme.palette.type === "dark" ? "#c7c7c7" : "#f69733",
        "&:hover": {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        }
    },
}))

export default function WishIcon() {
    const classes = useStyles();

    return (
        <div className={classes.iconBox}>
            <FavoriteBorderIcon fontSize="small" />
        </div>
    )
}
