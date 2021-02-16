import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    input: {
        width: "100%",
        "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                border: `1px solid ${theme.palette.secondary.main}`,
            },
            "& $label": {
                color: theme.palette.secondary.main,
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${theme.palette.grey["50"]}`,
        },
    },
    label: {
        fontSize: 13,
        fontWeight: 500,
        color: theme.palette.primary.contrastText,
    }
}))

export default function BalanceInput({ label }) {
    const classes = useStyles();
    return (
        <Box px={1} py={1.5}>
            <TextField
                className={classes.input}
                label={<Typography component='span' className={classes.label}>{label}</Typography>}
                variant="outlined"
                size="small"
            />
        </Box>
    )
}