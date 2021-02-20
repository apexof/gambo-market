import MainLayout from '../components/Layouts/MainLayout'
import CategorySlider from '../components/CategoryList/CategorySlider'
import BannerSection from '../components/BannerSection';
import TopSlider from '../components/TopSlider';
import { makeStyles } from '@material-ui/core/styles';
import ProductListSlider from '../components/Product/ProductLists/ProductListSlider';
import { AddedNewProducts, FreshAndFruits, TopFeaturedProducts } from '../components/Product/ProductLists/lists';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

export default function Home() {
    useStyles();

    return (
        <MainLayout>
            <TopSlider />
            <CategorySlider />
            <Box mt={5}>
                <ProductListSlider
                    id="top-featured-products"
                    title="Top Featured Products"
                    clarification="For You"
                    items={TopFeaturedProducts}
                />
            </Box>
            <Box mt={4}>
                <BannerSection />
            </Box>
            <Box mt={6}>
                <ProductListSlider
                    id="fresh-and-fruits"
                    title="Fresh Vegetables & Fruits"
                    clarification="For You"
                    items={FreshAndFruits}
                />
            </Box>
            <Box mt={4}>
                <ProductListSlider
                    id="added-new-products"
                    title="Added New Products"
                    clarification="For You"
                    items={AddedNewProducts}
                />
            </Box>
        </MainLayout>
    )
}