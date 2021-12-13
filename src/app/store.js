import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
