import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link'
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    logInLink: {
        height: "40px",
        borderRadius: "10px",
        background: theme.palette.primary.light,
        padding: "0 15px",
        flexShrink: 0,
        textTransform: 'none',
        whiteSpace: "nowrap",
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center"
    }
}))

export default function HeaderBtn({ href, text, icon }) {
    const classes = useStyles();

    return (
        <Link href={href} className={classes.logInLink}>
            {icon}
            <Box ml={1}>
                {text}
            </Box>
        </Link>
    )
}