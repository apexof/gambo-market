import useSWR from "swr"
import { useRouter, } from "next/router"
import React, { FC, useState, } from "react"
import { Box, Button, Container, Grid, } from "@material-ui/core"
import { SortType, } from "../../../../types"
import { getFilteredProducts, } from "../../../../GraphQL"
import { fetcher, } from "../../../../SWR/common"
import { sortSelectItems, } from "./sort"
import { slugToTitle, } from "../../../../helpers"
import Filter from "../../../Filters/Category/Filter"
import ProductList from "./CategoryPageList"
import SectionTitle from "../../../Elements/SectionTitle"
import SortSelect from "./SortSelect"

interface ISortType {
    type: SortType
}

export interface IFilterFields {
    category: string
    price: {
        min: number
        max: number
    },
    discount: {
        min: number
        max: number
    },
    available: boolean | null
}

export type SetFilter = (field: string, value: any) => () => void

const CategoryPageListContainer: FC = () => {
    const router = useRouter()
    const filterAllProducts: IFilterFields = {
        category: "",
        price: { min: 0, max: null, },
        discount: { min: 0, max: null, },
        available: null,
    }
    const filterDefault = { ...filterAllProducts, category: router.query.slug?.toString() || "", }
    const [filter, setFilterField] = useState(filterDefault)
    const [sortType, setSort] = useState<ISortType>({ type: SortType.priceLowToHigh, })

    const { data: products, error, } = useSWR(getFilteredProducts({
        slug: filter.category,
        price: filter.price,
        discount: filter.discount,
        available: filter.available,
    }), fetcher("products"))

    const setFilter: SetFilter = (field, value) => () => {
        if (filter[field] === value) setFilterField({ ...filter, [field]: filterAllProducts[field], }) // toggle if select current value
        else setFilterField({ ...filter, [field]: value, })
    }

    return (
        <Container>
            <Box mb={1}>
                <Grid container justify="space-between">
                    <Grid item xs={12} sm={6}>
                        <Box mb={3.5}>
                            <SectionTitle title={slugToTitle(filter.category) || "All products"} seeAllLink={false} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" flexDirection="row-reverse">
                            <Box ml={2}>
                                <Filter setFilter={setFilter} filter={filter} />
                            </Box>
                            <SortSelect
                                selectItems={sortSelectItems}
                                sortType={sortType.type}
                                setSort={setSort}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <ProductList products={products} error={error} sortType={sortType.type} />
            <Box mt={6} mb={4} display="flex" justifyContent="center">
                <Button variant="contained" color="secondary">Show More</Button>
            </Box>
        </Container>
    )
}

export default CategoryPageListContainer
