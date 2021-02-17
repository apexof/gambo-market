import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    link: {
        paddingBottom: 5,
        fontSize: 14,
        fontWeight: 500,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            color: theme.palette.secondary.main,
            textDecoration: "none",
        },
    },
    titleBox: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
    },
}))

export default function SectionTitle({ title, clarification, seeAllLink = true }) {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h3">{clarification}</Typography>
            <div className={classes.titleBox}>
                <Typography variant="h2">{title}</Typography>
                {seeAllLink &&
                    <Link href="#" className={classes.link}>See All</Link>
                }
            </div>
        </div>
    )
}

