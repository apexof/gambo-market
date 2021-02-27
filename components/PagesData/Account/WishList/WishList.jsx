import React from 'react'
import WishItem from '../../../Product/ProductCards/WishItem'
import { makeStyles } from '@material-ui/core/styles';

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

export default function WishList({ wishList }) {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            {wishList.map(item => (
                <div key={item.id} className={classes.item}>
                    <WishItem
                        id={item.id}
                        product={item}
                    />
                </div>
            ))}
        </div>
    )
}