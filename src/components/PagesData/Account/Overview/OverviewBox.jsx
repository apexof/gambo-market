import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Link from '../../../Elements/Link'
import BlockTitle from '../../../Elements/BlockTitle';

const useStyles = makeStyles(theme => ({
    item: {
        background: theme.palette.background.paper,
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
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
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
}))

export default function OverBox({ title, footerTitle, contentTitle, children }) {
    const classes = useStyles();

    return (
        <Box className={cx(classes.item, "shadow1")}>
            <BlockTitle >{title}</BlockTitle>
            <Box className={classes.content}>
                <Box mb={3.5}>
                    <Typography className={classes.contentTitle} variant="h2">{contentTitle}</Typography>
                </Box>
                <Box my="auto">
                    {children}
                </Box>
            </Box>
            <Typography className={classes.itemFooter} variant="body2">
                <Link className={classes.itemFooterLink} href="/">
                    {footerTitle}
                </Link>
            </Typography>
        </Box>
    )
}