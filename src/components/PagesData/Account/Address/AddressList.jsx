import React from 'react'
import Address from './Address'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    list: {
        // marginBottom: theme.spacing(4),
    },
    item: {
        width: "100%",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        "&:last-child": {
            borderBottom: 0,
        }
    },
}))

export default function AddressList({ items }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.list}>
                {items.map(item => (
                    <div key={item.id} className={classes.item}>
                        <Address
                            title={item.title}
                            address={item.address}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}