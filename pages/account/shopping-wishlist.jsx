import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import WishList from '../../components/PagesData/Account/WishList/WishList'

const productArray = [
    {
        id: 1,
        title: "Product Title Here",
        img: "/img/products/product-1.jpg",
        price: "12",
        oldPrice: "15",
        discount: "6%",
    },
    {
        id: 2,
        title: "Product Title",
        img: "/img/products/product-2.jpg",
        price: "12",
        oldPrice: "15",
        discount: "6%",
    },
    {
        id: 3,
        title: "Product Title Here",
        img: "/img/products/product-3.jpg",
        price: "12",
        oldPrice: "15",
        discount: "6%",
    },
]

export default function ShoppingWishlist() {
    return (
        <AccountLayout title="Shopping Wishlist">
            <WishList items={productArray} />
        </AccountLayout>
    )
}
