import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import WeightList from '../../Product/ProductCards/WeightList';
import Features from '../../PagesData/Product/Features';
import PriceBlock from '../../PagesData/Product/PriceBlock';
import Slider from '../../PagesData/Product/Slider';

const useStyles = makeStyles(theme => ({
    product: {
        background: theme.palette.background.paper,
        display: "flex",
        padding: theme.spacing(3),
    }
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
                <Grid item xs={4}>
                    <Box pr={3}>
                        <Slider items={sliderItems} />
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <Typography variant="h2">{title}</Typography>
                        <Box display="flex" my={2}>
                            <Box mr={4}>
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
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, purus at tempor blandit, nulla felis dictum eros, sed volutpat odio sapien id lectus. Cras mollis massa ac congue posuere. Fusce viverra mauris vel magna pretium aliquet. Nunc tincidunt, velit id tempus tristique, velit dolor hendrerit nibh, at scelerisque neque mauris sed ex.
                            </Typography>
                        </Box>
                        <PriceBlock price={price} oldPrice={oldPrice} />
                        <Features />
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}