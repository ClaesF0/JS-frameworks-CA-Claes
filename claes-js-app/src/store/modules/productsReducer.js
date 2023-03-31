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
      console.log("action.payload fra productsreducer", action.payload);
      state.allProducts = action.payload;
    },
    SET_PRODUCT: (state, action) => {
      state.product = action.payload;
    },
  },
});

export default productsSlice.reducer;

//actions - API call section
console.log("productsSlice.actions productsReducer.js", productsSlice.actions);
const { SET_ALL_PRODUCTS } = productsSlice.actions;
const { SET_PRODUCT } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    //const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("HEI FRA INNI productsSREDUCER");
    console.log("data", data.allProducts);
    dispatch(SET_ALL_PRODUCTS(data.allProducts));
  } catch (e) {
    return console.error("error from api call", e.message);
  }
};

export const fetchOneProduct = (ID) => async (dispatch) => {
  let response;
  try {
    const response = await fetch(`https://dummyjson.com/products/${ID}`);
    const productData = await response.json();
    dispatch(SET_PRODUCT(productData));
  } catch (e) {
    return console.error(e.message);
  }
  if (response.ok) {
    console.log("respons OK fra productsReducer enkelt produkt");
  } else {
    console.log("respons er ikke ok fra productsreducer noe gikk galt");
  }
};
