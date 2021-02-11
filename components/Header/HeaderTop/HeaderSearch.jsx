import React from 'react'
import { FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        marginLeft: theme.spacing(5),
    },
    input: {
        background: theme.palette.primary.light,
        padding: "5px 10px",
        height: '36px'
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
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}
