import React from 'react'
import { FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        margin: "0 auto 0 35px",
        width: "100%",
    },
    input: {
        background: theme.palette.primary.light,
        padding: "5px 10px",
        height: '36px',
        width: "50%",
        minWidth: "220px",
        transition: "width .2s ease",
        "&.Mui-focused": {
            width: "100%",
        }
    },
}));

export default function HeaderSearch() {
    const classes = useStyles();
    return (
        <FormControl className={classes.form}>
            <Input
                className={classes.input}
                id="input-with-icon-adornment"
                placeholder="Search for products"
                disableUnderline
                autoFocus
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}
