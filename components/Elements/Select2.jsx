import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

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
                {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
                <NativeSelect
                    id="demo-customized-select-native"
                    value={value}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    {/* <option aria-label="None" value="" /> */}
                    {items.map(item => (
                        <option key={item.id} value={item.id}>{item.title}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    );
}