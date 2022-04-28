import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const URL = "http://localhost:5000/api/products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // getProduct: (state, action) => {
    //   const product = state.products.find(
    //     (item) => item.id === action.payload.id
    //   );
    // },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { products } = productSlice.actions;
export default productSlice.reducer;
