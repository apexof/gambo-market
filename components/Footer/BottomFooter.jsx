import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section: {
        color: theme.palette.type === "dark" ? "#c7c7c7" : "#f69733",
        background: theme.palette.primary.main,
        borderTop: `1px solid ${theme.palette.grey["50"]}`,

    },
}))

export default function BannerSection() {
    const classes = useStyles();

    return (
        <div>
            botom
        </div>
    )
}