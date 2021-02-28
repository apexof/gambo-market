import { FreshAndFruits, } from "../components/Product/ProductLists/lists"
import { Product, State, } from "../types"

const cart: Product[] = [{
    id: 1,
    title: "Product Title Here",
    img: "/img/products/product-7.jpg",
    price: 12,
    oldPrice: 15,
    available: "(In Stock)",
    discount: 6,
    weight: [2, 3, 4],
    category: "fresh-and-fruits",
    quantity: 1,
}]

const initState: State = {
    cart,
    wishList: FreshAndFruits,
}
export default initState
