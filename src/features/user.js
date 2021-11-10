// rxslice snippet
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const user = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
      login: (state, action)=>{

      }
  },
});

export const {} = user.actions;
export default user.reducer;
