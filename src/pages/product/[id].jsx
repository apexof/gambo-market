import { useRouter, } from "next/router"
import { Box, Container, Grid, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"
import cx from "clsx"
import CategoryLayout from "../../components/Layouts/CategoryLayout"
import ProductList from "../../components/Product/ProductLists/ProductListSlider"
import BlockTitle from "../../components/Elements/BlockTitle"
import MoreList from "../../components/Product/ProductLists/MoreList"
import { TopFeaturedProducts, getItemById, } from "../../components/Product/ProductLists/lists"
import Texts from "../../components/PagesData/Product/Texts"
import FullProduct from "../../components/PagesData/Product/FullProduct"

const useStyles = makeStyles((theme) => ({
    cartList: {
        overflowY: "auto",
        maxHeight: 362,
    },
}))

export default function Category() {
    const classes = useStyles()
    const router = useRouter()
    if (!router.query.id) return null
    const item = getItemById(+router.query.id)

    return (
        <CategoryLayout>
            <Container>
                <Box mt={6}>
                    <FullProduct
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        available={item.available}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        weight={item.weight}
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
