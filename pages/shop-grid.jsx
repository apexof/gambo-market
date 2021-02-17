import CategoryLayout from '../components/Layouts/CategoryLayout'
import TopFeaturedProducts from '../components/Product/ProductLists/TopFeaturedProducts'

export default function Logout() {
    return (
        <CategoryLayout>
            <TopFeaturedProducts slider={false} />
        </CategoryLayout>
    )
}