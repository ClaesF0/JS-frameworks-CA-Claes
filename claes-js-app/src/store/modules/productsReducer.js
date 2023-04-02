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

    dispatch(SET_ALL_PRODUCTS(data));
  } catch (e) {
    return console.error("error from api call", e.message);
  }
};

export const fetchOneProduct = (id) => async (dispatch) => {
  let response;
  try {
    const response = await fetch(
      `https://api.noroff.dev/api/v1/online-shop/${id}`
    );
    const productData = await response.json();
    console.log("response PRODUCTSREDUCER", response);
    dispatch(SET_PRODUCT(productData));
  } catch (e) {
    return console.error(e.message);
  }
  if (response.ok) {
    console.log("respons OK from productsReducer single produkt");
  } else {
    console.log("respons not ok productsreducer some error");
  }
};
