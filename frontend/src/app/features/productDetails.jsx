import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id, thunkAPI) => {
    const URL = `http://localhost:5000/api/products/${id}`;
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    [getProductDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { productDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
