import CategoryLayout from '../../components/Layouts/CategoryLayout'
import ProductList from '../../components/Product/ProductLists/ProductList'
import lists from '../../components/Product/ProductLists/lists'
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';

export default function Category(props) {
    const router = useRouter();
    if (!router.query.id) return null;
    return (
        <CategoryLayout>
            <Box mt={4}>
                <ProductList listData={lists[router.query.id]} />
            </Box>
        </CategoryLayout>
    )
}
