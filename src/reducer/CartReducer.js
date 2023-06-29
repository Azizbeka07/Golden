import {
    ADD_TO_CART,
    ADD_TO_LIKEBOX,
    REMOVE_FROM_CART,
    REMOVE_FROM_LIKEBOX,
} from "./types";

const mainReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (el) => el.id !== action.payload
                ),
            };

        case ADD_TO_LIKEBOX:
            return {
                ...state,
                likeItems: [...state.likeItems, action.payload],
            };
        case REMOVE_FROM_LIKEBOX:
            return {
                ...state,
                likeItems: state.likeItems.filter(
                    (el) => el.id !== action.payload
                ),
            };
        default:
            return "hii";
    }
};

export default mainReducer;
