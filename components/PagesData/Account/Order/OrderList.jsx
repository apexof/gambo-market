import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Order from './Order';

const useStyles = makeStyles(theme => ({
    list: {

    },
    itemWrap: {
        "& + $itemWrap": {
            marginTop: 30
        }
    },
}))

export default function OrderList({ items }) {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            {items.map(item => (
                <div key={item.id} className={classes.itemWrap}>
                    <Order

                        timing={item.timing}
                        way={item.way}
                        subTotal={item.subTotal}
                        charges={item.charges}
                        trackStatus={item.trackStatus}
                        cashBack={item.cashBack}
                        items={item.items}
                    />
                </div>
            ))}
        </div>
    )
}