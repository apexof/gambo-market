import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { Typography, Select, MenuItem } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: theme.palette.secondary.main,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 'none',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: `0 ${theme.spacing(2)} 0 0`,
    },
}));

export default function CustomizedSelects({ items }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(items[0].id);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <FormControl className={classes.margin}>
                <Select
                    id="demo-customized-select-native"
                    value={value}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    {items.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                            <div className={classes.menuItem}>
                                <Typography className={classes.menuText}>
                                    {item.title}
                                </Typography>
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}