import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import themeReducer from "../features/themeSlice";
import countReducer from "../features/countSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    count: countReducer,
  },
});
