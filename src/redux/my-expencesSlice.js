import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  expensesList: [],
  filters: {
    date: "",
    price: "",
    category: "",
  },
}

const myExpensesSlice = createSlice({
  name: "expenses",
  initialState: INITIAL_STATE,
  reducers: {
    expenseAdd(state, action) {
      state.expensesList.push(action.payload)
    },

    expenseDelete(state, action) {
      state.expensesList = state.expensesList.filter(
        (newExpense) => newExpense.id !== action.payload
      )
    },

    setExpense(state, action) {
      state.expensesList = action.payload
    },

    setFilter: (state, action) => {
      const { field, value } = action.payload
      state.filters[field] = value
    },
  },
})

export const { expenseAdd, expenseDelete, setExpense, setFilter } =
  myExpensesSlice.actions
export default myExpensesSlice.reducer
