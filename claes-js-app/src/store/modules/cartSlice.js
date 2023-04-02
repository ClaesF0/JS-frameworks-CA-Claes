import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    cart: [],
    numberOfStuffInCart: 0,
    total: 0,
    cartWithStuffInIt: [],
  },
  //actions
  ///* documentations says:
  // * The reducer function is called with the current state and the action object.
  // * It should return the new state value and return it.
  // * The reducer function should be a pure function, meaning it should not modify the state argument.
  // * It should also not do any asynchronous logic or other "side effects".

  reducers: {
    ADD_TO_CART: (state, action) => {
      console.log("action.payload fra cartReducer", action.payload);
      state.cart.push(action.payload);
      state.numberOfStuffInCart = state.cart.length;
      state.total += action.payload.price;
      const cartWithStuffInIt = state.cart.some(
        (product) => product.id === action.payload.id
      );

      if (cartWithStuffInIt) {
        console.log("cartWithStuffInIt", cartWithStuffInIt);
        console.log("state.cartWithStuffInIt", state.cartWithStuffInIt);
      } else {
        state.cartWithStuffInIt = [...state.cartWithStuffInIt, action.payload];
        state.numberOfStuffInCart = state.cartWithStuffInIt.length;
        console.log(
          "state.cartWithStuffInIt.lenght",
          state.cartWithStuffInIt.length
        );
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.numberOfStuffInCart = state.cart.length;
    },
  },
});

export default cartSlice.reducer;

//actions

const { ADD_TO_CART } = cartSlice.actions;
const { REMOVE_FROM_CART } = cartSlice.actions;

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(ADD_TO_CART(product));
  } catch (e) {
    return console.error("error from addToCart", e.message);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch(REMOVE_FROM_CART(id));
  } catch (e) {
    return console.error("error from removeFromCart", e.message);
  }
};

// Compare this snippet from claes-js-app\src\store\modules\cartReducer.js:
