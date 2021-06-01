import { ADD_TO_CART } from "../actions/action-types/cart-actions";

const initState = {
  cart: [
    {
      location: "Old Street",
      date: "2021-05-29",
      time: "14:00",
      duration: "30min",
      price: "8£",
    },
  ],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    console.log("ADD TO CART ACTION :: ");
    console.log(action.booking);
    return {
      ...state,
      total: 997,
    };
  } else {
    return state;
  }
};

export default cartReducer;
