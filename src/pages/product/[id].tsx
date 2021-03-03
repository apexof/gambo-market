import { Box, Container, Grid, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"
import cx from "clsx"
import URL from "url-join"
import React, { FC, } from "react"
import { GetStaticProps, GetStaticPaths, } from "next"
import { API, } from "../../config/path"
import getLqip from "../../helpers/getLqip"
import { Product, } from "../../types"
import { getAllProductIds, TopFeaturedProducts, getItemById, } from "../../components/Product/ProductLists/lists"
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

type Props = {
    item: Product
}

const ProductPage: FC<Props> = ({ item, }) => {
    const classes = useStyles()

    return (
        <CategoryLayout>
            <Container>
                <Box mt={6}>
                    <FullProduct
                        product={item}
                    />
                </Box>
                <Box mt={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <BlockTitle>More Like This</BlockTitle>
                            <div className={cx(classes.cartList, "scrollstyle_4")}>
                                <MoreList />
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
                    title="Top Featured Products"
                    items={TopFeaturedProducts}
                    id="top-featured-products"
                    clarification="For You"
                />
            </Box>
        </CategoryLayout>
    )
}

export default ProductPage

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [{ params: { id: "1", }, }]

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, }) => {
    const res = await fetch(URL(API, "products", params.id))
    const product = await res.json()
    const img = await getLqip(URL(API, product.img.url))
    product.img = img

    return {
        props: { item: product, },
        // revalidate: 1,
    }
}
