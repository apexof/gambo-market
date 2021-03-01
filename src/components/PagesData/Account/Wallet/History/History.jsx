import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Price from '../../../../Elements/Price';

const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(2.5),
        background: theme.palette.background.paper,
    },
}))

export default function History({ date, price, type, transactionID, }) {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <Box>
                <Typography variant="h5">{type}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="baseline" my={1.5}>
                <Box>
                    <Typography component="span" variant="body1">Transaction ID:</Typography>
                    <Typography component="span" variant="h3">{transactionID}</Typography>
                </Box>
                <Price>{price}</Price>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="baseline">
                <Typography variant="body2">{date}</Typography>
                <Typography variant="h5">View</Typography>
            </Box>
        </div>
    )
}