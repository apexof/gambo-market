import CategoryLayout from '../../components/Layouts/CategoryLayout'
import ProductList from '../../components/Product/ProductLists/ProductList'
import { getItemsFromCategory, getTitleOfCategory } from '../../components/Product/ProductLists/lists'
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';

export default function Category() {
    const router = useRouter();
    if (!router.query.id) return null;
    const items = getItemsFromCategory(router.query.id);
    const title = getTitleOfCategory(router.query.id);
    return (
        <CategoryLayout>
            <Box mt={4}>
                <ProductList
                    items={items}
                    title={title}
                />
            </Box>
        </CategoryLayout>
    )
}
