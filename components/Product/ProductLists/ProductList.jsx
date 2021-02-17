import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import Filter from '../../Filters/Category/Filter'
import ProductCard from '../ProductCards/MainProductCard'
import SectionTitle from '../../Elements/SectionTitle'
import Select2 from '../../Elements/Select2'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    list: {

    },
}))

const sort = [
    {
        id: 1,
        title: "Price - Low to High",
    },
    {
        id: 2,
        title: "Price - High to Low",
    },
    {
        id: 3,
        title: "Alphabetical",
    },
    {
        id: 4,
        title: "Saving - High to Low",
    },
    {
        id: 5,
        title: "Saving - Low to High",
    },
    {
        id: 6,
        title: "% Off - High to Low",
    },
    {
        id: 7,
        title: "Popularity",
    },
]

export default function ProductListSlider({ listData }) {
    const classes = useStyles();
    const { items, title, } = listData;

    return (
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems='flex-start' mb={2}>
                <SectionTitle title={title} seeAllLink={false} />
                <Box display="flex">
                    <Select2 items={sort} />
                    <Filter />
                </Box>
            </Box>
            <Grid container spacing={4}>
                {items.map(item => (
                    <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            available={item.available}
                            discount={item.discount}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box mt={4} display="flex" justifyContent="center">
                <Button variant="contained" color="secondary" className={classes.btn}>
                    Show More
                </Button>
            </Box>
        </Container>
    )
}
