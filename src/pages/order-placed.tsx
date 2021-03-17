import { FC, } from "react"
import CategoryLayout from "../components/Layouts/CategoryLayout"
import OrderPlaced from "../components/PagesData/OrderPlaced"

const OrderPlacedPage: FC = () => {
    return (
        <CategoryLayout>
            <OrderPlaced />
        </CategoryLayout>
    )
}

export default OrderPlacedPage
