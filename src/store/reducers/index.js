import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishReducer from "./wishReducer";


const reducer = combineReducers({
    cart: cartReducer,
    wishList: wishReducer,
});

export default reducer;
