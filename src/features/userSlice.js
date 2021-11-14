import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
    },
    logout: (state) => {
      state.value.email = "";
      state.value.password = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
