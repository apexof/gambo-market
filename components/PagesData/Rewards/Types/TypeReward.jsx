import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(4),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.grey["50"]}`,
    },
    icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        borderRadius: "50%",
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
}))

export default function TypeReward({ title, icon, value }) {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <div className={classes.icon}>
                {icon}
            </div>
            <Box mt={2} mb={2}>
                <Typography variant="h4">{title}</Typography>
            </Box>
            <Typography variant="h3">{value}</Typography>
        </div>
    )
}