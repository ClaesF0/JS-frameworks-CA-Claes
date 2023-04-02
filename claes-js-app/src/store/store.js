import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./modules/productsReducer";
import cartReducer from "./modules/cartSlice";

const reducer = combineReducers({
  productsReducer,
  cart: cartReducer,
});

const index = configureStore({
  reducer,
});

export default index;
