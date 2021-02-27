import { getItemsFromCategory } from "../components/Product/ProductLists/lists"
const wishList = getItemsFromCategory("fresh-and-fruits")

const cart = [{
    id: 1,
    title: "Product Title Here",
    img: "/img/products/product-7.jpg",
    price: "12",
    oldPrice: "15",
    available: "(In Stock)",
    discount: "6%",
    weight: [2, 3, 4],
    category: "fresh-and-fruits",
    quantity: 1,
}]

const initState = {
    cart: cart,
    wishList: wishList,
};
export default initState;
