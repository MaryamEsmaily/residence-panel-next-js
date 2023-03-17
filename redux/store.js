import { configureStore } from "@reduxjs/toolkit";
import landingModesSlice from "./landingModesSlice";

export const store = configureStore({
  reducer: {
    landingMode: landingModesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
