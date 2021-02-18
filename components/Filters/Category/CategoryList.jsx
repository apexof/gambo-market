import React, { useState } from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    item: {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        background: theme.palette.background.default,
        cursor: "pointer",
    },
    itemActive: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
    list: {
        // margin: `-${theme.spacing(1)} -${theme.spacing(2)}`,
    },
}))

export default function CategoryList({ list }) {
    const classes = useStyles();
    const [active, setActive] = useState(null);
    const toggleActive = (id) => () => {
        active === id ? setActive(null) : setActive(id)
    }
    return (
        <Box>
            <Box mb={1}>
                <Typography variant="h4">Categories</Typography>
            </Box>
            <div className={classes.list}>
                {list.map(item => (
                    <div
                        key={item.id}
                        onClick={toggleActive(item.id)}
                        className={cx(classes.item, item.id === active && classes.itemActive)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </Box>

    )
}