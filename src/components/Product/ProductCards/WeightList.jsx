import React from 'react'
import Weight from './Weight'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

export default function BannerSection({ items }) {
    const classes = useStyles();

    return (
        <Box display="flex">
            {items.map(item => (
                <Box mr={2} key={item}>
                    <Weight>{item}</Weight>
                </Box>
            ))}
        </Box>
    )
}