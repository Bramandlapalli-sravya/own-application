import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/cartSlice.js";
import updatedCartSlice from "../store/cartSlice.js";
import HabitSlice from "../Home/HabitTracker/Store/Habit-slice.ts";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    // updatedCart: updatedCartSlice,
    habits: HabitSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>; // This is the type of the state of the store used only in .ts files

export default store;
