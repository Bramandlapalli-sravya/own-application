import { configureStore } from "@reduxjs/toolkit";
import createSliceCartReducer from "../MyOwnReduxToolkitProvider/createSliceCartReducer.js";

const NewStore = configureStore({
  reducer: {
    cart: createSliceCartReducer,
  },
});

export default NewStore;
