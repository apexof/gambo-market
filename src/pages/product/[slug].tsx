import { Box, Container, Grid, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"
import cx from "clsx"
import { gql, } from "@apollo/client"
import React, { FC, } from "react"
import { GetStaticProps, GetStaticPaths, } from "next"
import { GET_PRODUCT_BY_SLUG, GET_ALL_PRODUCT_SLUGS, apolloClient, GET_LAST_PRODUCTS, } from "../../GraphQL"
import { Product, } from "../../types"
import CategoryLayout from "../../components/Layouts/CategoryLayout"
import ProductList from "../../components/Product/ProductLists/ProductListSlider"
import BlockTitle from "../../components/Elements/BlockTitle"
import MoreList from "../../components/Product/ProductLists/MoreList"
import Texts from "../../components/PagesData/Product/Texts"
import FullProduct from "../../components/PagesData/Product/FullProduct"

const useStyles = makeStyles((theme) => ({
    cartList: {
        overflowY: "auto",
        maxHeight: 362,
    },
}))

interface Props {
    item: Product
    lastProducts: Product[]
}

const ProductPage: FC<Props> = ({ item, lastProducts, }) => {
    const classes = useStyles()

    return (
        <CategoryLayout>
            <Container>
                <Box mt={6}>
                    <FullProduct product={item} />
                </Box>
                <Box mt={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <BlockTitle>More Like This</BlockTitle>
                            <div className={cx(classes.cartList, "scrollstyle_4")}>
                                <MoreList items={lastProducts} />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Texts />
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Box mt={6}>
                <ProductList
                    id="added-new-products"
                    title="Added New Products"
                    items={lastProducts}
                />
            </Box>
        </CategoryLayout>
    )
}

export default ProductPage

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await apolloClient.query({ query: gql(GET_ALL_PRODUCT_SLUGS), })
    const paths = res.data.products.map((item) => ({ params: { slug: item.slug, }, }))

    return {
        paths,
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async ({ params, }) => {
    const res = await apolloClient.query({
        query: gql(GET_PRODUCT_BY_SLUG),
        variables: { slug: params.slug, },
    })
    const res1 = await apolloClient.query({ query: gql(GET_LAST_PRODUCTS), })

    if (!res.data.product) {
        return { notFound: true, }
    }

    return {
        props: {
            item: res.data.product,
            lastProducts: res1.data.products,
        },
        revalidate: 60,
    }
}
