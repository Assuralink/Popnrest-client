import { ADD_TO_CART } from "./action-types/cart-actions";

export const addToCart = (booking) => {
  return {
    type: ADD_TO_CART,
    booking: booking,
  };
};
