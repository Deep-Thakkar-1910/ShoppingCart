import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice.js";
import cartReducer from "../slices/cartSlice.js";
import isCartOpen from "../slices/isCartOpen.js";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    isCartOpen: isCartOpen,
  },
});

export default store;
