import React from 'react'
import WishItem from '../../../Product/ProductCards/WishItem'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    list: {
        // marginBottom: theme.spacing(4),
    },
    item: {
        width: "100%",
        "& + $item": {
            borderTop: `1px solid ${theme.palette.grey["50"]}`,
        }
    },
}))

export default function WishList({ items }) {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            {items.map(item => (
                <div key={item.id} className={classes.item}>
                    <WishItem
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        discount={item.discount}
                    />
                </div>
            ))}
        </div>
    )
}