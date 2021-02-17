import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}))

export default function FullProduct({ img }) {
    const classes = useStyles();

    return (
        <div className={classes.der}>
            <img src={img} alt="" />
        </div>
    )
}