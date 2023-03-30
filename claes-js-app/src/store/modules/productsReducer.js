import { createSlice } from "@reduxjs/toolkit";

//reducers

const productsSlice = createSlice({
  name: "productsReducer",
  initialState: {
    allProducts: [], //our whole array
    product: {},
    total: 0,
  },
  reducers: {
    SET_ALL_PRODUCTS: (state, action) => {
      state.allProducts = action.payload;
    },
    SET_PRODUCT: (state, action) => {
      state.product = action.payload;
    },
    SET_ERROR: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export default productsSlice.reducer;

//actions - API call section

const { SET_ALL_PRODUCTS } = productsSlice.actions;
const { SET_PRODUCT } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const data = await response.json();
    console.log("data", data);
    dispatch(SET_ALL_PRODUCTS(data.allProducts));
  } catch (e) {
    return console.error(e.message);
  }
};
