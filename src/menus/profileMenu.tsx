import DashboardIcon from "@material-ui/icons/Dashboard"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import ViewListIcon from "@material-ui/icons/ViewList"
import React, { ReactElement, } from "react"
import { SvgIconProps, } from "@material-ui/core/SvgIcon"

interface IProfileMenuItem {
    id: number
    title: string
    href: string
    icon: ReactElement<SvgIconProps>
}

export const menuItems: IProfileMenuItem[] = [
    {
        id: 1,
        title: "Overview",
        href: "/account",
        icon: <ViewListIcon />,
    },
    {
        id: 2,
        title: "My Orders",
        href: "/account/my-orders",
        icon: <DashboardIcon />,
    },
    {
        id: 3,
        title: "My Rewards",
        href: "/account/my-rewards",
        icon: <CardGiftcardIcon />,

    },
    {
        id: 4,
        title: "My Wallet",
        href: "/account/my-wallet",
        icon: <AccountBalanceWalletIcon />,
    },
    {
        id: 5,
        title: "Shopping Wishlist",
        href: "/account/shopping-wishlist",
        icon: <FavoriteBorderIcon />,
    },
    {
        id: 6,
        title: "My Address",
        href: "/account/my-address",
        icon: <LocationOnIcon />,
    }
]
