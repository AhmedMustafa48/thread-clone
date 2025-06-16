import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./slice";
export default configureStore({
  reducer: {
    counter: serviceReducer,
  },
});
