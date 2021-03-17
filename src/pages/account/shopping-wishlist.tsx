import { FC, } from "react"
import AccountLayout from "../../components/Layouts/AccountLayout/AccountLayout"
import WishList from "../../components/PagesData/Account/WishList"

const ShoppingWishlist: FC = () => {
    return (
        <AccountLayout title="Shopping Wishlist">
            <WishList />
        </AccountLayout>
    )
}

export default ShoppingWishlist
