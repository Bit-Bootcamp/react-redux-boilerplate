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
      state.value = state.value + +action.payload;
      console.log("typey payloadakaman:", typeof action.payload);
    },
  },
});

export const { increment, decrement, incrementByValue } = countSlice.actions;
export default countSlice.reducer;
