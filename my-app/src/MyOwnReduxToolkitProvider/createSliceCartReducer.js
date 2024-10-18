import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createThunk = createAsyncThunk("data/fetch", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "data");
      return data;
    });
  return response;
});

const createSliceCartReducer = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(createThunk.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(createThunk.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(createThunk.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { addItem } = createSliceCartReducer.actions;
export default createSliceCartReducer.reducer;
