import TopFeaturedProducts from '../components/TopFeaturedProducts';
import MainLayout from '../components/MainLayout'
import CategorySlider from '../components/CategoryList/CategorySlider'



export default function Home() {
    return (
        <MainLayout>
            <CategorySlider />
            <TopFeaturedProducts />
        </MainLayout>
    )
}