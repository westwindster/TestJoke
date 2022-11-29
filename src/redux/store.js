import { configureStore } from "@reduxjs/toolkit";
import jokesReducer from "./mainSlice";

const store = configureStore({
  reducer: {
    jokes: jokesReducer
  }
});

export default store;
