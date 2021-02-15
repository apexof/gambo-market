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
        position: "relative",
    },
    icon: {
        width: 80,
        height: 80,
        background: "#f9f9f9",
        borderRadius: "50%",
        border: "2px solid #efefef",
        padding: "18px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    desc: {
        position: "absolute",
        top: 0,
        right: 0,
        padding: "3px 10px",
        fontWeight: 500,
        fontSize: 12,
        color: theme.palette.secondary.contrastText,
        background: theme.palette.secondary.main,
        borderRadius: "0 5px 0 3px",
        cursor: "pointer",
        border: "1px dashed #fff",
    },
    date: {
        marginTop: 20,
        fontWeight: 500,
        background: theme.palette.background.default,
        border: "1px dashed #efefef",
        padding: "2px 15px",
        borderRadius: 5,
        fontSize: 12,
        color: theme.palette.primary.contrastText,
    }
}))

export default function Reward({ value, type, date, icon, desc, }) {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            {desc &&
                <div className={classes.desc}>
                    {desc}
                </div>
            }
            <div className={classes.icon}>
                <img width={40} src={icon} alt="" />
            </div>
            <Box mt={2} mb={2}>
                <Typography variant="body1">{type}</Typography>
            </Box>
            <Typography variant="h4">{value}</Typography>
            <div className={classes.date}>
                {date}
            </div>
        </div>
    )
}