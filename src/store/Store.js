import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/UsersSlice";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});
