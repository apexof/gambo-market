import React from 'react'
import History from './History'
import { makeStyles } from '@material-ui/core/styles';
import BlockTitle from '../../../../Elements/BlockTitle';
import cx from 'clsx';

const useStyles = makeStyles(theme => ({
    list: {
        overflowY: "scroll",
        maxHeight: 360,
        background: theme.palette.background.paper,
    },
    item: {
        width: "100%",
        "& + $item": {
            borderTop: `1px solid ${theme.palette.grey["50"]}`,
        }
    },
}))

export default function HistoryList({ items }) {
    const classes = useStyles();

    return (
        <>
            <BlockTitle>History</BlockTitle>
            <div className={cx(classes.list, "scrollstyle_4", "shadow1")}>
                {items.map(item => (
                    <div key={item.id} className={classes.item}>
                        <History
                            date={item.date}
                            price={item.price}
                            type={item.type}
                            transactionID={item.transactionID}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}