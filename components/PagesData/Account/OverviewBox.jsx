import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Link from '../../Link'

const useStyles = makeStyles(theme => ({
    item: {
        background: theme.palette.background.paper,
    },
    itemTitle: {
        padding: "15px 20px",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
    },
    itemFooter: {
        padding: "15px 20px",
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
    },
    itemFooterLink: {
        color: theme.palette.text.primary,
        "&:hover": {
            color: theme.palette.secondary.main,
        }
    },
    content: {
        padding: "15px 20px",

    },
}))

export default function BannerSection({ title, footerTitle, contentTitle, children }) {
    const classes = useStyles();

    return (
        <Box className={classes.item}>
            <Typography className={classes.itemTitle} variant="h4">{title}</Typography>
            <Box className={classes.content}>
                <Typography className={classes.contentTitle} variant="h2">{contentTitle}</Typography>
                {children}
            </Box>
            <Typography className={classes.itemFooter} variant="body2">
                <Link className={classes.itemFooterLink} href="/">
                    {footerTitle}
                </Link>
            </Typography>
        </Box>
    )
}