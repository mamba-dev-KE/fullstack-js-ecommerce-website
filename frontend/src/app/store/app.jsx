import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import productDetailsReducer from "../features/productDetailsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
  },
});
