import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import WeightList from '../../Product/ProductCards/WeightList';
import Features from '../../PagesData/Product/Features';
import PriceBlock from '../../PagesData/Product/PriceBlock';
import Slider from '../../PagesData/Product/Slider';
import Texts from './Texts';

const useStyles = makeStyles(theme => ({
    product: {
        background: theme.palette.background.paper,
        display: "flex",
        padding: theme.spacing(3),
    },
    title: {
        marginBottom: theme.spacing(2),
    },
}))

export default function FullProduct({ img, title, id, available, weight, price, oldPrice }) {
    const classes = useStyles();
    const sliderItems = [
        {
            id: 1,
            img: img
        },
        {
            id: 2,
            img: img
        },
        {
            id: 3,
            img: img
        },
        {
            id: 4,
            img: img
        },
    ]
    return (
        <div className={classes.product}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box pr={3}>
                        <Slider items={sliderItems} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div>
                        <Box mb={3.5}>
                            <Typography className={classes.title} variant="h2">{title}</Typography>
                        </Box>
                        <Box display="flex" mb={2}>
                            <Box mr={4} mb={1}>
                                <Typography variant="h5">Product No.
                                    <Typography component="span" color="textSecondary">
                                        {id}
                                    </Typography>
                                </Typography>
                            </Box>
                            <Typography variant="h5">Available
                            <Typography component="span" color="textSecondary">
                                    {` ${available}`}
                                </Typography>
                            </Typography>
                        </Box>
                        <WeightList items={weight} />
                        <Box my={3}>
                            <Texts />
                        </Box>
                        <PriceBlock price={price} oldPrice={oldPrice} />
                        <Features />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}