import { Button, Container } from '@material-ui/core';
import MainLayout from '../components/MainLayout'
import CategorySlider from '../components/CategoryList/CategorySlider'



export default function Home() {
    return (
        <MainLayout>
            <CategorySlider />
        </MainLayout>
    )
}