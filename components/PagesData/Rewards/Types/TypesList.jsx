import React from 'react'
import TypeReward from './TypeReward'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(4),
    },
    item: {
        width: "33.333%",
    },
}))

export default function TypeList({ items }) {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            {items.map(item => (
                <div key={item.id} className={classes.item}>
                    <TypeReward

                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                    />
                </div>
            ))}
        </div>
    )
}