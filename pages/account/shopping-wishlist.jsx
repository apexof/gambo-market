import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import WishList from '../../components/PagesData/Account/WishList'
import { productItems } from '../../components/Product/ProductLists/lists'


export default function ShoppingWishlist() {
    const productArray = productItems.slice(0, 5)

    return (
        <AccountLayout title="Shopping Wishlist">
            <WishList />
        </AccountLayout>
    )
}
