import AccountLayout from '../../components/Layouts/AccountLayout'
import TypesList from '../../components/PagesData/Rewards/Types/TypesList'
import RewardsList from '../../components/PagesData/Rewards/Rewards/RewardsList'
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import MoneyIcon from '@material-ui/icons/Money';

const typesList = [
    {
        id: 1,
        title: "Coupons",
        icon: <MoneyOffIcon />,
        value: "2$"
    },
    {
        id: 2,
        title: "Cashbacks",
        icon: <MoneyIcon />,
        value: "2$"
    },
    {
        id: 3,
        title: "Offers",
        icon: <MoneyOffIcon />,
        value: "2$"
    },
]
const rewardList = [
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
    },

]

export default function MyRewards() {
    return (
        <AccountLayout title="My Rewards">
            <TypesList items={typesList} />
            <RewardsList items={rewardList} />
        </AccountLayout>
    )
}