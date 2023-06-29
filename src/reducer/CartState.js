import React, { useEffect, useReducer } from "react";
import mainReducer from "./CartReducer";
import MainContext from "./CartContext";
import {
    ADD_TO_CART,
    ADD_TO_LIKEBOX,
    REMOVE_FROM_CART,
    REMOVE_FROM_LIKEBOX,
} from "./types";

const CartState = ({ children }) => {
    const initialState = {
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
        likeItems: JSON.parse(localStorage.getItem("likeItems")) || [],
    };

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const addToCart = (el) => dispatch({ type: ADD_TO_CART, payload: el });

    const removeFromCart = (id) =>
        dispatch({ type: REMOVE_FROM_CART, payload: id });

    const addToLike = (el) => dispatch({ type: ADD_TO_LIKEBOX, payload: el });

    const removeFromLike = (id) =>
        dispatch({ type: REMOVE_FROM_LIKEBOX, payload: id });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    useEffect(() => {
        localStorage.setItem("likeItems", JSON.stringify(state.likeItems));
    }, [state.likeItems]);

    return (
        <MainContext.Provider
            value={{
                cartItems: state.cartItems,
                likeItems: state.likeItems,
                addToCart,
                removeFromCart,
                addToLike,
                removeFromLike,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export default CartState;
