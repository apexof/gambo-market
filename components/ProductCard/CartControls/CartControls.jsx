import React, { useState } from 'react'
import PlusCartButton from './PlusCartButton'
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    cartControls: {
        display: "flex",
        alignItems: "center",
        width: 95,
    },
    input: {
        textAlign: "center",
        "& .MuiInputBase-input": {
            textAlign: "center",
        }
    },
}))

export default function BannerSection() {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    const handleChange = event => setCount(+event.target.value)
    const Increment = () => setCount(count + 1)
    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className={classes.cartControls}>
            <PlusCartButton type="left" onClick={Decrement} />
            <Input
                disableUnderline={true}
                value={count}
                type="number"
                className={classes.input}
                onChange={handleChange}
            />
            <PlusCartButton type="right" onClick={Increment} />
        </div>
    )
}