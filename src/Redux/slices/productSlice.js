import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    getProducts: (state, action) => {
      state.splice(0, state.length, ...action.payload);
      return state;
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
