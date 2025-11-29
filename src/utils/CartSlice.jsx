import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // 1️⃣ Find if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // 2️⃣ If the item exists → just increase its quantity
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // 3️⃣ Otherwise → add new product to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // removeItem: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // just reduce quantity
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
