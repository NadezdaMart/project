import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import expensesReducer from "./my-expencesSlice"

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    auth: authReducer,
  },
})
