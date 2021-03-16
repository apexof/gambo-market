import { Box, } from "@material-ui/core"
import React, { FC, } from "react"
import { GetStaticProps, } from "next"
import { gql, } from "@apollo/client"
import { GET_ALL_CATEGORIES, apolloClient, GET_LAST_PRODUCTS, GET_TOP_PRODUCTS, GET_MAX_DISCOUNT_PRODUCTS, } from "../GraphQL"
import MainLayout from "../components/Layouts/MainLayout"
import CategorySlider from "../components/CategoryList/CategorySlider"
import BannerSection from "../components/BannerSection/BannerSection"
import TopSlider from "../components/TopSlider/TopSlider"
import ProductListSlider from "../components/Product/ProductLists/ProductListSlider"
import { Category, Product, } from "../types"

interface IProps {
    categories: Category[]
    lastProducts: Product[]
    topProducts: Product[]
    maxDiscountProducts: Product[]
}

const Home: FC<IProps> = ({ lastProducts, categories, topProducts, maxDiscountProducts, }) => {
    return (
        <MainLayout>
            <TopSlider />
            {/* <CategorySlider categories={categories} />
            <Box mt={5}>
                <ProductListSlider
                    id="top-featured-products"
                    title="Top Featured Products"
                    items={topProducts}
                />
            </Box>
            <Box mt={4}>
                <BannerSection />
            </Box>
            <Box mt={6}>
                <ProductListSlider
                    id="max-discount"
                    title="Max discount"
                    items={maxDiscountProducts}
                />
            </Box>
            <Box mt={4}>
                <ProductListSlider
                    id="added-new-products"
                    title="Added New Products"
                    items={lastProducts}
                />
            </Box> */}
        </MainLayout>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const res = await apolloClient.query({ query: gql(GET_ALL_CATEGORIES), })
    const res1 = await apolloClient.query({ query: gql(GET_LAST_PRODUCTS), })
    const res2 = await apolloClient.query({ query: gql(GET_TOP_PRODUCTS), })
    const res3 = await apolloClient.query({ query: gql(GET_MAX_DISCOUNT_PRODUCTS), })

    return {
        props: {
            categories: res.data.categories,
            lastProducts: res1.data.products,
            topProducts: res2.data.products,
            maxDiscountProducts: res3.data.products,
        },
        revalidate: 60,
    }
}
