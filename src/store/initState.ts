import { FreshAndFruits, getItemById, } from "../components/Product/ProductLists/lists"
import { Product, State, } from "../types"

const cartItem = getItemById(1)
cartItem.quantity = 1
const cart: Product[] = [cartItem]
const wishList: Product[] = FreshAndFruits

const initState: State = {
    cart,
    wishList,
}
export default initState
