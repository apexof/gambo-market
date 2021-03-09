import { Box, } from "@material-ui/core"
import React, { FC } from "react"
import { GET_ALL_CATEGORIES, apolloClient, GET_LAST_PRODUCTS } from "../GraphQL"
import MainLayout from "../components/Layouts/MainLayout"
import CategorySlider from "../components/CategoryList/CategorySlider"
import BannerSection from "../components/BannerSection/BannerSection"
import TopSlider from "../components/TopSlider/TopSlider"
import ProductListSlider from "../components/Product/ProductLists/ProductListSlider"
import { GetStaticProps } from "next"
import { getLqipForArray } from "../helpers/getLqip"
import { Category, Product } from "../types"
import { gql } from '@apollo/client'

interface IProps {
    categories: Category[]
    last_products: Product[]
}

const Home: FC<IProps> = ({ last_products, categories }) => {
    return (
        <MainLayout>
            <TopSlider />
            <CategorySlider categories={categories} />
            <Box mt={5}>
                {/* <ProductListSlider
                    id="top-featured-products"
                    title="Top Featured Products"
                    clarification="For You"
                    items={TopFeaturedProducts}
                /> */}
            </Box>
            <Box mt={4}>
                <BannerSection />
            </Box>
            <Box mt={6}>
                {/* <ProductListSlider
                    id="fresh-and-fruits"
                    title="Fresh Vegetables & Fruits"
                    clarification="For You"
                    items={FreshAndFruits}
                /> */}
            </Box>
            <Box mt={4}>
                <ProductListSlider
                    id="added-new-products"
                    title="Added New Products"
                    clarification="For You"
                    items={last_products}
                />
            </Box>
        </MainLayout>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const res = await apolloClient.query({
        query: gql(GET_ALL_CATEGORIES),
    })
    const res1 = await apolloClient.query({
        query: gql(GET_LAST_PRODUCTS),
    })

    return {
        props: {
            categories: res.data.categories,
            last_products: res1.data.products
        },
        revalidate: 60,
    }
}
