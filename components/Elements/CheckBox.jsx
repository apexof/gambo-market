import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `3px ${theme.spacing(1)}`,
    }
}))

export default function CheckBox({ label }) {
    const classes = useStyles();
    const [checked, setCheck] = React.useState(false);

    const handleChange = (event) => {
        setCheck(event.target.checked);
    };
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                    classes={{
                        root: classes.root,
                    }}
                />
            }
            label={label}
        />
    )
}