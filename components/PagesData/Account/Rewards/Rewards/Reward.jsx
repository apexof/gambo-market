import React from 'react'
import cx from 'clsx'
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
        height: "100%",
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
        fontWeight: 500,
        background: theme.palette.background.default,
        border: "1px dashed #efefef",
        padding: "2px 15px",
        borderRadius: 5,
        fontSize: 12,
        color: theme.palette.primary.contrastText,
    }
}))

export default function Reward({ value, type, date, icon, desc, info }) {
    const classes = useStyles();

    return (
        <div className={cx(classes.item, "shadow1")}>
            {desc &&
                <div className={classes.desc}>
                    {desc}
                </div>
            }
            <div className={classes.icon}>
                <img width={40} src={icon} alt="" />
            </div>
            <Box mt={2}>
                <Typography variant="body1">{type}</Typography>
            </Box>
            <Box my={2} >
                <Typography align="center" variant="h4">{value}</Typography>
            </Box>

            {date &&
                <div className={classes.date}>
                    {date}
                </div>
            }
            {info &&
                <Box>
                    <Typography variant="body1">{info}</Typography>
                </Box>
            }
        </div>
    )
}