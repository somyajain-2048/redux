import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity--;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  CartSlice.actions;
export default CartSlice.reducer;
