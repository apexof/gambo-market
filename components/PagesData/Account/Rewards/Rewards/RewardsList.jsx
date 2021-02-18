import React from 'react'
import Reward from './Reward'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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
        <Grid container spacing={4}>
            {items.map(item => (
                <Grid xs={12} sm={4} md={6} lg={4} item key={item.id} >
                    <Reward
                        value={item.value}
                        type={item.type}
                        date={item.date}
                        icon={item.icon}
                        desc={item.desc}
                    />
                </Grid>
            ))}
        </Grid>
    )
}