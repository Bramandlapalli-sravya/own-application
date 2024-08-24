import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/cartSlice.js";
import updatedCartSlice from "../store/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    // updatedCart: updatedCartSlice,
  },
});

export default store;
