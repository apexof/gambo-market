import MainLayout from '../components/Layouts/MainLayout'
import CategorySlider from '../components/CategoryList/CategorySlider'
import BannerSection from '../components/BannerSection';
import TopSlider from '../components/TopSlider';
import { makeStyles } from '@material-ui/core/styles';
import ProductListSlider from '../components/Product/ProductLists/ProductListSlider';
import lists from '../components/Product/ProductLists/lists';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

export default function Home() {
    useStyles();
    return (
        <MainLayout>
            <TopSlider />
            <CategorySlider />
            <Box mt={6}>
                <ProductListSlider listData={lists["top-featured-products"]} />
            </Box>
            <BannerSection />
            <Box mt={6}>
                <ProductListSlider listData={lists["fresh-and-fruits"]} />
            </Box>
            <Box mt={6}>
                <ProductListSlider listData={lists["added-new-products"]} />
            </Box>
        </MainLayout>
    )
}