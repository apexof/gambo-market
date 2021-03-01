import { AddToCart, RemoveFromCart, } from "../../types"

export const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST"
export const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST"

export const addToWishList: AddToCart = (item) => ({
    type: ADD_TO_WISH_LIST,
    item,
})

export const removeFromWishList: RemoveFromCart = (id) => ({
    type: REMOVE_FROM_WISH_LIST,
    id,
})
