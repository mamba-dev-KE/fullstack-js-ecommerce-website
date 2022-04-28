import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products";
import productDetailsReducer from "../features/productDetails";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
  },
});
