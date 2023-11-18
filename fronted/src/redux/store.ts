import { configureStore } from "@reduxjs/toolkit";
import fieldsCheckInDBSlice from "./slices/fieldsCheckInDBSlice";


export const store = configureStore({
  reducer: {
    checkFields: fieldsCheckInDBSlice
  },
});