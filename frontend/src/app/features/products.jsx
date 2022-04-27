import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const initialState = {
  products: data.products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
    },
  },
});

export const { products } = productSlice.actions;
export default productSlice.reducer;
