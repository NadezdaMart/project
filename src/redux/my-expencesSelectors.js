import { createSelector } from "@reduxjs/toolkit"

export const selectFilteredExpenses = (state) => {
  const { date, price, category } = state.expenses.filters

  return state.expenses.expensesList.filter(
    (expense) =>
      (!date || expense.date === date) &&
      (!price || expense.price === price.toString()) &&
      (!category || expense.category === category)
  )
}
