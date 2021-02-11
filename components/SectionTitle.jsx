import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
}))

export default function SectionTitle({ title, clarification }) {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h3">{clarification}</Typography>
            <Typography variant="h2">{title}</Typography>
        </div>
    )
}

