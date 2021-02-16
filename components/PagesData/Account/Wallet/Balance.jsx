import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BlockTitle from '../../../Elements/BlockTitle';
import { Box, Button } from '@material-ui/core';
import BalanceInput from './BalanceInput';

const useStyles = makeStyles(theme => ({
    content: {
        background: theme.palette.background.paper,
    },
}))

export default function Balance() {
    const classes = useStyles();

    return (
        <div className="shadow1">
            <BlockTitle>Add Balance</BlockTitle>

            <Box p={2} className={classes.content}>
                <Box m={-1} >
                    <Box display="flex">
                        <Box width="50%">
                            <BalanceInput label="Holder Name" />
                        </Box>
                        <Box width="50%">
                            <BalanceInput label="Card Number" />
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Box width="33.333%">
                            <BalanceInput label="Month" />
                        </Box>
                        <Box width="33.333%">
                            <BalanceInput label="Year" />
                        </Box>
                        <Box width="33.333%">
                            <BalanceInput label="CVV" />
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Box width="100%">
                            <BalanceInput label="Add Balance" />
                        </Box>
                    </Box>
                </Box>
                <Box mt={2}>
                    <Button variant="contained" color="secondary" className={classes.btn}>
                        Add Balance
                </Button>
                </Box>
            </Box>
        </div>
    )
}