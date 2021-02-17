import CategoryLayout from '../../components/Layouts/CategoryLayout'
import ProductList from '../../components/Product/ProductLists/ProductListSlider'
import BlockTitle from '../../components/Elements/BlockTitle'
import CartList from '../../components/Product/ProductLists/CartList'
import { TopFeaturedProducts, getItemById } from '../../components/Product/ProductLists/lists'
import { useRouter } from 'next/router';
import Texts from '../../components/PagesData/Product/Texts';
import { Box, Container, Grid } from '@material-ui/core';
import FullProduct from '../../components/PagesData/Product/FullProduct';

export default function Category(props) {
    const router = useRouter();
    if (!router.query.id) return null;
    const item = getItemById(+router.query.id);

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
                    />
                </Box>
                <Box mt={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <BlockTitle>More Like This</BlockTitle>
                            <CartList />
                        </Grid>
                        <Grid item xs={8} >
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
        </CategoryLayout >
    )
}
