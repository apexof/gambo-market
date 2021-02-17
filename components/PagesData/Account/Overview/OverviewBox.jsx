import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Link from '../../../Elements/Link'
import BlockTitle from '../../../Elements/BlockTitle';

const useStyles = makeStyles(theme => ({
    item: {
        background: theme.palette.background.paper,
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

export default function OverBox({ title, footerTitle, contentTitle, children }) {
    const classes = useStyles();

    return (
        <Box className={cx(classes.item, "shadow1")}>
            <BlockTitle >{title}</BlockTitle>
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