import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST, } from "../AC";
import initState from "../initState";

function wishListReducer(wishList = initState.wishList, { type, item, id, }) {
    switch (type) {
        case ADD_TO_WISH_LIST: {
            const find = wishList.find(wishItem => wishItem.id === item.id);
            if (find) {
                return wishList
            }
            return [...wishList, item];
        }

        case REMOVE_FROM_WISH_LIST: {
            const newWishList = [...wishList];
            const findId = newWishList.findIndex(wishItem => wishItem.id === id);
            newWishList.splice(findId, 1);

            return newWishList;
        }

        default: {
            return wishList;
        }
    }
}

export default wishListReducer;
