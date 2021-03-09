import { Box, Button, Container, Grid, } from "@material-ui/core"
import React, { FC, } from "react"
import { Product, SetSort, SortType, SortSelectItem, } from "../../../../types"
import Filter from "../../../Filters/Category/Filter"
import ProductCard from "../../ProductCards/MainProductCard"
import SectionTitle from "../../../Elements/SectionTitle"
import Select1 from "../../../Elements/Select1"

const sort: SortSelectItem[] = [
    {
        type: SortType.priceLowToHigh,
        title: "Price - Low to High",
    },
    {
        type: SortType.priceHighToLow,
        title: "Price - High to Low",
    },
    {
        type: SortType.alphabetical,
        title: "Alphabetical",
    },
    {
        type: SortType.savingHighToLow,
        title: "Saving - High to Low",
    },
    {
        type: SortType.savingLowToHigh,
        title: "Saving - Low to High",
    },
    {
        type: SortType.discountHighToLow,
        title: "% Off - High to Low",
    }
]

type Props = {
    products: Product[]
    title: string
    setSort: SetSort
    sortType: SortType
}

const CategoryPageList: FC<Props> = ({ sortType, setSort, products, title, toggleCategory, activeCategory, }) => {
    return (
        <Container>
            <Box mb={1}>
                <Grid container justify="space-between">
                    <Grid item xs={12} sm={6}>
                        <Box mb={3.5}>
                            <SectionTitle title={title} seeAllLink={false} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" flexDirection="row-reverse">
                            <Box ml={2}>
                                <Filter
                                    toggleCategory={toggleCategory}
                                    activeCategory={activeCategory}
                                />
                            </Box>
                            <Select1
                                selectItems={sort}
                                sortType={sortType}
                                icons={false}
                                setSort={setSort}
                                shadow
                                bgc="paper"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box m={-1.5} display="flex" flexWrap="wrap">
                {products.map((item) => (
                    <Box
                        p={1.5}
                        width={{
                            xs: "100%", sm: "50%", md: "33.333%", lg: "25%",
                        }}
                        key={item.id}
                    >
                        <ProductCard
                            product={item}
                            shadow="shadow2"
                        />
                    </Box>
                ))}
            </Box>
            <Box mt={6} mb={4} display="flex" justifyContent="center">
                <Button variant="contained" color="secondary">
                    Show More
                </Button>
            </Box>
        </Container>
    )
}

export default CategoryPageList
