import { AddToCart, RemoveFromCart, SetCountOfProducts } from "../../types";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_COUNT_OF_PRODUCTS = "SET_COUNT_OF_PRODUCTS";
export const REMOVE_ALL_ITEMS_FROM_CART = "REMOVE_ALL_ITEMS_FROM_CART";

export const addToCart: AddToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item,
    }
}

export const removeFromCart: RemoveFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id,
    }
}

export const removeAllItemsFromCart: RemoveFromCart = (id) => {
    return {
        type: REMOVE_ALL_ITEMS_FROM_CART,
        id,
    }
}

export const setCountOfProducts: SetCountOfProducts = ({ item, count }) => {
    return {
        type: SET_COUNT_OF_PRODUCTS,
        item,
        count
    }
}
