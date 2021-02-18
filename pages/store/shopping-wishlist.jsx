import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import WishList from '../../components/PagesData/Account/WishList/WishList'
import { productItems } from '../../components/Product/ProductLists/lists'


export default function ShoppingWishlist() {
    const productArray = productItems.slice(0, 5)

    return (
        <AccountLayout rootPath="/store" title="Shopping Wishlist">
            <WishList items={productArray} />
        </AccountLayout>
    )
}
