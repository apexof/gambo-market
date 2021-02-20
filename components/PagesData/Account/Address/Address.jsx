import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(3),
        display: "flex",
        background: theme.palette.background.paper,
    },
    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        width: 32,
        borderRadius: "5px",
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        marginRight: theme.spacing(2),
    },
    actions: {
        "& svg": {
            marginRight: theme.spacing(1),
            cursor: "pointer",
        },
    }
}))

export default function Address({ title, address }) {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <div className={classes.icon}>
                <HomeIcon />
            </div>
            <div>
                <Typography variant="h4">{title}</Typography>
                <Box my={1}>
                    <Typography variant="body2">{address}</Typography>
                </Box>
                <div className={classes.actions}>
                    <CreateIcon fontSize="small" />
                    <ShoppingCartIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}