import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import OrderList from '../../components/PagesData/Account/Order/OrderList'

const list = [
    {
        id: 1,
        timing: "10 May, 3.00PM - 6.00PM",
        way: "Gambo - Ludhiana",
        subTotal: 25,
        charges: 0,
        trackStatus: 2,
        cashBack: true,
        items: [
            {
                id: 1,
                title: "2kg broccoli",
            },
            {
                id: 2,
                title: "1kg apple",
            },
        ]
    },
    {
        id: 2,
        timing: "10 May, 3.00PM - 6.00PM",
        way: "Gambo - Ludhiana",
        subTotal: 25,
        charges: 5,
        trackStatus: 3,
        cashBack: false,
        items: [
            {
                id: 1,
                title: "2kg broccoli",
            },
            {
                id: 2,
                title: "1kg apple",
            },
        ]
    },
]

export default function Account() {
    return (
        <AccountLayout rootPath="/store" title="My Orders">
            <OrderList items={list} />
        </AccountLayout>
    )
}