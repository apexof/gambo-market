import MoneyOffIcon from "@material-ui/icons/MoneyOff"
import MoneyIcon from "@material-ui/icons/Money"
import React, { FC, ReactElement, } from "react"
import { SvgIconProps, } from "@material-ui/core/SvgIcon"
import AccountLayout from "../../components/Layouts/AccountLayout/AccountLayout"
import TypesList from "../../components/PagesData/Account/Rewards/Types/TypesList"
import RewardsList from "../../components/PagesData/Account/Rewards/Rewards/RewardsList"

export interface IRewardType {
    id: number,
    title: string,
    icon: ReactElement<SvgIconProps>,
    value: number,
}

export interface IReward {
    id: number,
    value: string,
    type: string
    date?: string,
    icon: string,
    desc?: string,
    info?: string,
}

const typesList: IRewardType[] = [
    {
        id: 1,
        title: "Coupons",
        icon: <MoneyOffIcon />,
        value: "2$",
    },
    {
        id: 2,
        title: "Cashbacks",
        icon: <MoneyIcon />,
        value: "2$",
    },
    {
        id: 3,
        title: "Offers",
        icon: <MoneyOffIcon />,
        value: "2$",
    }
]
const rewardList: IReward[] = [
    {
        id: 1,
        value: "$2",
        type: "Cashback Won",
        date: "12 May 2020",
        icon: "/img/account/gift.svg",
        desc: "Gambocoup25",
    },
    {
        id: 2,
        value: "Get 15% Cashback",
        type: "Offer",
        date: "12 May 2020",
        icon: "/img/account/gift.svg",
    },
    {
        id: 3,
        value: "$2",
        type: "Cashback Won",
        date: "12 May 2020",
        icon: "/img/account/gift.svg",
        desc: "Gambocoup25",
    },
    {
        id: 4,
        value: "Get 15% Cashback",
        type: "Offer",
        date: "12 May 2020",
        icon: "/img/account/coupon.svg",
        desc: "Gaup25",
    },
    {
        id: 5,
        value: "$2",
        type: "Cashback Won",
        date: "12 May 2020",
        icon: "/img/account/gift.svg",
    },
    {
        id: 6,
        value: "Get 15% Cashback",
        type: "Cashback Won",
        date: "12 May 2020",
        icon: "/img/account/coupon.svg",
    }

]

const MyRewards: FC = () => {
    return (
        <AccountLayout title="My Rewards">
            <TypesList items={typesList} />
            <RewardsList items={rewardList} />
        </AccountLayout>
    )
}

export default MyRewards
