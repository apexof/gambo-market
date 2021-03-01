import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    timeline: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    circle: {
        background: theme.palette.secondary.main,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        flexShrink: 0,
    },
    circleMin: {
        background: theme.palette.secondary.main,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        flexShrink: 0,
    },
    line: {
        background: theme.palette.secondary.main,
        width: "calc(100% + 20px)",
        margin: "0 -10px",
        height: "12px",

    },
}))

const items = [
    {
        id: 1,
        title: "Placed"
    },
    {
        id: 2,
        title: "Packed"
    },
    {
        id: 3,
        title: "On the way"
    },
    {
        id: 4,
        title: "Delivered"
    },
]

export default function Tracker({ trackStatus, trackSteps }) {
    const classes = useStyles();

    return (
        <div className={classes.der}>
            <div className={classes.timeline}>
                {items.map((item, i) => (
                    <div className={classes.item} width={`${100 / trackSteps}%`}>
                        <div className={classes.circle}>
                            <div className={classes.circleMin}>

                            </div>
                        </div>
                        {items.length - 1 !== i && <div className={classes.line} />}
                    </div>
                ))}
            </div>
        </div>
    )
}