import { configureStore } from "@reduxjs/toolkit"
import appReducer from "./Redux/AppSlice"

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})