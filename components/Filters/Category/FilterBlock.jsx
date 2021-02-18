import React from 'react'
import cx from 'clsx'
import CheckBox from '../../Elements/CheckBox'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    filters: {
        maxHeight: 125,
        overflowY: "scroll",
    }
}))

export default function FilterBlock({ title, filters }) {
    const classes = useStyles();
    console.log(filters);

    return (
        <Box>
            <Box mb={1}>
                <Typography variant="h4">{title}</Typography>
            </Box>
            <Box className={cx(classes.filters, "scrollstyle_4")}>
                {filters.map(item => (
                    <Box>
                        <CheckBox key={item.id} label={item.filter} />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}