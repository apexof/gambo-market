import React from 'react'
import { MenuItem, Select } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

export default function HeaderSelect({ selectItems }) {
    const c = useStyles();
    const [field, setField] = React.useState(1);

    const handleChange = (event) => {
        setField(event.target.value);
    };
    return (
        <FormControl className={c.formControl}>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={field}
                onChange={handleChange}
            >
                {selectItems.map(item => (
                    <MenuItem key={item.title} value={item.id}>{item.title}</MenuItem>
                ))}
            </Select>
        </FormControl>

    )
}
