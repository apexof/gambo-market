import React, { FC, } from "react"
import { gql } from '@apollo/client';
import { Box, } from "@material-ui/core"
import { GetStaticPaths, GetStaticProps, } from "next"
import CategoryLayout from "../../components/Layouts/CategoryLayout"
import ProductList from "../../components/Product/ProductLists/CategoryPageList/CategoryPageListContainer"
import { apolloClient, GET_PRODUCTS_BY_CATEGORY_SLUG, GET_ALL_CATEGORIES_SLUG, } from "../../GraphQL"
import { Product, } from "../../types"

interface IProps {
    items: Product[]
}

const Category: FC<IProps> = ({ items, }) => {
    return (
        <CategoryLayout>
            <Box mt={4}>
                <ProductList
                // initProducts={items}
                />
            </Box>
        </CategoryLayout>
    )
}

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await apolloClient.query({ query: gql(GET_ALL_CATEGORIES_SLUG), })
    const paths = res.data.categories.map((item) => ({ params: { slug: item.slug, }, }))

    return {
        paths,
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async ({ params, }) => {
    const res = await apolloClient.query({
        query: gql(GET_PRODUCTS_BY_CATEGORY_SLUG),
        variables: { slug: params.slug, },
    })
    if (!res.data.products) {
        return { notFound: true, }
    }

    return {
        props: { items: res.data.products, },
        revalidate: 60,
    }
}
