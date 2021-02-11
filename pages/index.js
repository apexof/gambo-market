import TopFeaturedProducts from '../components/TopFeaturedProducts';
import FreshAndFruitsProducts from '../components/FreshAndFruitsProducts';
import AddedNewProducts from '../components/AddedNewProducts';
import MainLayout from '../components/MainLayout'
import CategorySlider from '../components/CategoryList/CategorySlider'
import BannerSection from '../components/BannerSection';


export default function Home() {


    return (
        <MainLayout>
            <CategorySlider />
            <TopFeaturedProducts />
            <BannerSection />
            <FreshAndFruitsProducts />
            <AddedNewProducts />
        </MainLayout>
    )
}