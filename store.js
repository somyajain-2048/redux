import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import usernameReducer from "./usernameSlice";
import themeReducer from "./ThemeSlice";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    username: usernameReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});
