import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.find((item) => item.id === action.payload.id); // finding the product in the current state
      if (productExists) {
        // if there' already one alike increase it's quantity
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        // make a new product object inside the cart
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id); // finding the product inside the cart
      const isQuantitySingle = product.quantity === 1;

      if (isQuantitySingle) {
        // if there's only one of these product existing remove it's object from the cart
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        // reduce it's quantity by 1
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      }
    },
    clearCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
