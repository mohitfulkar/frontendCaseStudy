import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/adminSlices";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});
