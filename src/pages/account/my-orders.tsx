import React, { FC, } from "react"
import AccountLayout from "../../components/Layouts/AccountLayout/AccountLayout"
import OrderList from "../../components/PagesData/Account/Order/OrderList"

interface IOrderItem {
    id: number
    title: string
}

export type TrackStatus = 1 | 2 | 3 | 4

export interface IOrder {
    id: number
    timing: string
    way: string
    subTotal: number,
    charges: number,
    trackStatus: TrackStatus,
    cashBack: boolean,
    items: IOrderItem[]
}

const list: IOrder[] = [
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
            }
        ],
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
            }
        ],
    }
]

const MyOrderPage: FC = () => {
    return (
        <AccountLayout title="My Orders">
            <OrderList items={list} />
        </AccountLayout>
    )
}

export default MyOrderPage
