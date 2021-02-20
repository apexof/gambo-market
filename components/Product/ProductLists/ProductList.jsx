import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import Filter from '../../Filters/Category/Filter'
import ProductCard from '../ProductCards/MainProductCard'
import SectionTitle from '../../Elements/SectionTitle'
import Select1 from '../../Elements/Select1'
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

export default function ProductListSlider({ items, title, }) {
    const classes = useStyles();

    return (
        <Container>
            <Box mb={1}>
                <Grid container justify="space-between" >
                    <Grid item xs={12} sm={6}>
                        <SectionTitle title={title} seeAllLink={false} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" flexDirection="row-reverse">
                            <Box ml={2}>
                                <Filter />
                            </Box>
                            <Select1 selectItems={sort} icons={false} shadow={true} bgc="paper" />

                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box m={-1.5} display="flex" flexWrap="wrap">
                {items.map(item => (
                    <Box p={1.5} width={{ xs: "100%", sm: "50%", md: "33.333%", lg: "20%" }} key={item.id} >
                        <ProductCard
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            available={item.available}
                            discount={item.discount}
                            shadow="shadow2"
                        />
                    </Box>
                ))}
            </Box>
            <Box mt={4} display="flex" justifyContent="center">
                <Button variant="contained" color="secondary" className={classes.btn}>
                    Show More
                </Button>
            </Box>
        </Container>
    )
}
