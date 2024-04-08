import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const hasItems = (state) => state.cart.cart.length > 0;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);
