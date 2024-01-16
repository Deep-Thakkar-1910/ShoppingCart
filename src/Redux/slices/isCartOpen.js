/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const isCartOpen = createSlice({
  name: "isCartOpen",
  initialState: false,
  reducers: {
    openCart: (state, action) => {
      return action.payload;
    },
    closeCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { openCart, closeCart } = isCartOpen.actions;

export default isCartOpen.reducer;
