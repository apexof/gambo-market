import React from 'react'
import Reward from './Reward'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: `-${theme.spacing(2)}`,

    },
    item: {
        width: "33.333%",
        padding: `${theme.spacing(2)}`,
    },
}))

export default function RewardList({ items }) {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            {items.map(item => (
                <div key={item.id} className={classes.item}>
                    <Reward
                        value={item.value}
                        type={item.type}
                        date={item.date}
                        icon={item.icon}
                        desc={item.desc}
                    />
                </div>
            ))}
        </div>
    )
}