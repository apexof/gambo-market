import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Box, Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    list: {
        background: theme.palette.background.default,
        width: "100%",
        display: "flex",
        borderRadius: 5,
    },
    item: {
        "& + $item": {
            borderLeft: `1px solid ${theme.palette.grey["50"]}`,
        }
    },
}))

const features = [
    {
        id: 1,
        title: "Lowest Price Guaranteed",
        text: "Get difference refunded if you find it cheaper anywhere else.",
        icon: <MonetizationOnIcon fontSize="large" color="secondary" />
    },
    {
        id: 2,
        title: "Easy Returns & Refunds",
        text: "Return products at doorstep and get refund in seconds.",
        icon: <CloudDownloadIcon fontSize="large" color="secondary" />
    },
]

export default function Features() {
    const classes = useStyles();

    return (
        <div className={classes.list}>
            <Grid container>
                {features.map(item => (
                    <Grid item xs={12} sm={6}>
                        <Box
                            key={item.id}
                            display="flex"
                            alignItems="center"
                            p={2.5}
                            className={classes.item}
                        >
                            <Box>
                                {item.icon}
                            </Box>
                            <Box ml={2}>
                                <Box mb={1}>
                                    <Typography variant="h4">
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2">
                                    {item.text}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}