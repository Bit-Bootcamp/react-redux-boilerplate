/* THIS FILE IS NOT IMPORTED ANYWHERE!! (not used in the App) 
it is here for you to use as a reference while creating your Slices  */

import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const countSlice = createSlice({
  name: "count",
  initialState,

  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, action) => {
      /* when incrementByValue is called inside a component
        and passed a parameter to it like incrementByValue(parammeter)
        you can access that parameter here through action.payload */
      console.log("typey payloadakaman:", typeof action.payload);
      state.value = state.value + +action.payload;
    },
  },
});

/* Don't forget to export your actions here when you create new ones */
export const { increment, decrement, incrementByValue } = countSlice.actions;
export default countSlice.reducer;
