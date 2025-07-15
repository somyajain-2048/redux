import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import usernameReducer from "./usernameSlice";
import themeReducer from "./ThemeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    username: usernameReducer,
    theme: themeReducer,
  },
});
