import React from 'react'
import FilterBlock from './FilterBlock'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

export default function FilterList({ filterList }) {
    const classes = useStyles();

    return (
        <div className={classes.der}>
            {filterList.map(item => (
                <Box key={item.id} mt={4}>
                    <FilterBlock
                        title={item.title}
                        filters={item.filters}
                    />
                </Box>
            ))}
        </div>
    )
}