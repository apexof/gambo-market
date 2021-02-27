export const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
export const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST";

export function addToWishList(item) {
    return {
        type: ADD_TO_WISH_LIST,
        item,
    };
}

export function removeFromWishList(id) {
    return {
        type: REMOVE_FROM_WISH_LIST,
        id,
    };
}
