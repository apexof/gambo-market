import TopFeaturedProducts from '../components/Product/ProductLists/TopFeaturedProducts';
import FreshAndFruitsProducts from '../components/Product/ProductLists/FreshAndFruitsProducts';
import AddedNewProducts from '../components/Product/ProductLists/AddedNewProducts';
import MainLayout from '../components/Layouts/MainLayout'
import CategorySlider from '../components/CategoryList/CategorySlider'
import BannerSection from '../components/BannerSection';
import TopSlider from '../components/TopSlider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}))

export default function Home() {
    useStyles();
    return (
        <MainLayout>
            <TopSlider />
            <CategorySlider />
            <TopFeaturedProducts />
            <BannerSection />
            <FreshAndFruitsProducts />
            <AddedNewProducts />
        </MainLayout>
    )
}