import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./modules/productsReducer";

const reducer = combineReducers({
  productsReducer,
});

const index = configureStore({
  reducer,
});
export default index;
