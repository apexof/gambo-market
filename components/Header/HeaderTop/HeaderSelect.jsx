import React from 'react'
import Icon from '@material-ui/core/Icon';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    formControl: {
        marginLeft: 34,
        minWidth: 120,
    },
    select: {
        "& svg": {
            color: theme.palette.primary.contrastText,
        }
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        width: "120px"
    },
    menuText: {
        display: "inline",
        marginLeft: '5px'
    },
}))

export default function HeaderSelect({ selectItems }) {
    const classes = useStyles();
    const [field, setField] = React.useState(1);

    const handleChange = (event) => {
        setField(event.target.value);
    };
    return (
        <FormControl className={classes.formControl}>
            <Select
                disableUnderline
                id="demo-simple-select-helper"
                // ariaLabelledby="select"
                value={field}
                onChange={handleChange}
                className={classes.select}
            >
                {selectItems.map(item => (
                    <MenuItem key={item.title} value={item.id}>
                        <div className={classes.menuItem}>
                            <Icon>room</Icon>
                            <Typography className={classes.menuText}>
                                {item.title}
                            </Typography>
                        </div>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    )
}
