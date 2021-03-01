import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_ITEMS_FROM_CART, SET_COUNT_OF_PRODUCTS } from "../AC";
import initState from "../initState";

function cartReducer(cart = initState.cart, { type, item, id, count }) {
    switch (type) {
        case ADD_TO_CART: {
            const newCart = [...cart];
            const findId = newCart.findIndex(cartItem => cartItem.id === item.id);
            if (findId > -1) {
                newCart[findId].quantity += 1;
            } else {
                newCart.push({
                    ...item,
                    quantity: 1,
                });
            }
            return newCart;
        }

        case REMOVE_FROM_CART: {
            const newCart = [...cart];
            const findId = newCart.findIndex(cartItem => cartItem.id === id);
            if (newCart[findId].quantity > 1) {
                newCart[findId].quantity -= 1;
            } else {
                newCart.splice(findId, 1);
            }

            return newCart;
        }

        case REMOVE_ALL_ITEMS_FROM_CART: {
            const newCart = [...cart];
            const findId = newCart.findIndex(cartItem => cartItem.id === id);
            newCart.splice(findId, 1);

            return newCart;
        }
        case SET_COUNT_OF_PRODUCTS: {
            const newCart = [...cart];
            const findId = newCart.findIndex(cartItem => cartItem.id === item.id);
            if (findId > -1) {
                newCart[findId].quantity = count
            } else {
                newCart.push({
                    ...item,
                    quantity: count,
                })
            }
            return newCart
        }

        default: {
            return cart;
        }
    }
}

export default cartReducer;
