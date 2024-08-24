import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // state.push(action.payload);
      // or we can use the spread operator to add the new item to the state, with this spread operator we are
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      // comapring with action.payload because we are getting the id directly from the removeFromCart action
      const index = state.findIndex((item) => item.id === action.payload); // running a loop to find the index of the item to remove if it matches with the id of the item to remove
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

// const updatedCartSlice = createSlice({
//   name: "updatedcart",
//   initialState: [],
//   reducers: {
//     removeCartSlice: (state, action) => {
//       // comapring with action.payload because we are getting the id directly from the removeFromCart action
//       const index = state.findIndex((item) => item.id === action.payload); // running a loop to find the index of the item to remove if it matches with the id of the item to remove
//       if (index !== -1) {
//         const removed = action.payload;
//        console.log(removed, 'removed');
//       }
//     },
//   },
// });

export const { addToCart, removeFromCart } = cartSlice.actions;
// export const { removeCartSlice } = updatedCartSlice.actions;
export default cartSlice.reducer;
