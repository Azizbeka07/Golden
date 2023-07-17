import {
  ADD_ONE,
  ADD_TO_CART,
  ADD_TO_LIKEBOX,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKEBOX,
  REMOVE_ONE,
} from "./types";

const mainReducer = (state, action) => {
  switch (action.type) {
      case ADD_TO_CART:
          return {
              ...state,
              cartItems: [
                  ...state.cartItems,
                  { ...action.payload, quantity: 1 },
              ],
          };

      case ADD_ONE:
          return {
              ...state,
              cartItems: state.cartItems.map((item) =>
                  item.id == action.payload
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
              ),
          };
      case REMOVE_FROM_CART:
          return {
              ...state,
              cartItems: state.cartItems.filter(
                  (el) => el.id !== action.payload
              ),
          };

      case REMOVE_ONE:
          return {
              ...state,
              cartItems: state.cartItems.map((item) =>
                  item.id === action.payload && item.quantity > 1
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
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
          return state;
  }
};

export default mainReducer;