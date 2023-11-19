import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  ParentWrapper,
  MyExpensesFormWrapper,
  StylesForCategorySelect,
  MyExpensesListWrapper,
  StylesForMyExpensesList,
  InputText,
  FilterWrapper,
  LogoutButton,
  MainPageButton,
} from "./index.style"
import { StylesForButton, StylesForInput } from "../login-form/index.style"
import { expenseAdd, expenseDelete, setFilter } from "../redux/my-expencesSlice"
import { useNavigate } from "react-router-dom"
import { selectFilteredExpenses } from "../redux/my-expencesSelectors"
import { logoutFromApp } from "../redux/authSlice"
import { MyTable } from "../components"

export const MyExpensesPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [expense, setExpense] = useState("")
  const [date, setDate] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  const expensesList = useSelector(selectFilteredExpenses)
  const filters = useSelector(
    (state) => (state.expenses && state.expenses.filters) || {}
  )

  const onFilterChange = (field, value) => {
    dispatch(setFilter({ field, value }))
  }

  const onExpenseAdd = () => {
    const newExpense = { id: Date.now(), expense, date, price, category }
    dispatch(expenseAdd(newExpense))

    setExpense("")
    setDate("")
    setPrice("")
    setCategory("")
  }

  const onExpenseDelete = (id) => {
    dispatch(expenseDelete(id))
  }

  const onExpenseChange = ({ target: { value } }) => {
    setExpense(value)
  }

  const onDateChange = ({ target: { value } }) => {
    setDate(value)
  }

  const onCategoryChange = ({ target: { value } }) => {
    setCategory(value)
  }

  const onPriceChange = ({ target: { value } }) => {
    setPrice(value)
  }

  const goBackSetup = () => {
    navigate("/main-page")
  }
  const logoutHandler = () => {
    dispatch(logoutFromApp())
  }

  return (
    <ParentWrapper>
      <MainPageButton onClick={goBackSetup}>Go To Main Page</MainPageButton>
      <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>

      <MyExpensesFormWrapper>
        <InputText>Add expense</InputText>
        <StylesForInput
          input
          type="text"
          name="expense"
          onChange={onExpenseChange}
          value={expense}
        ></StylesForInput>

        <InputText>Choose date</InputText>
        <StylesForInput
          input
          type="date"
          name="date"
          onChange={onDateChange}
          value={date}
        ></StylesForInput>

        <InputText>Add price</InputText>
        <StylesForInput
          input
          type="number"
          name="price"
          onChange={onPriceChange}
          value={price}
        ></StylesForInput>

        <InputText>Choose category</InputText>

        <StylesForCategorySelect
          name="category"
          onChange={onCategoryChange}
          value={category}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Transportation">Transportation</option>
          <option value="Insurance">Insurance</option>
          <option value="Fitness">Fitness</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </StylesForCategorySelect>
        <StylesForButton onClick={onExpenseAdd}>Add</StylesForButton>
      </MyExpensesFormWrapper>

      <MyExpensesListWrapper>
        <StylesForMyExpensesList>
          <InputText>List Of Expenses</InputText>

          <MyTable
            expensesList={expensesList}
            onExpenseDelete={onExpenseDelete}
          />
        </StylesForMyExpensesList>
      </MyExpensesListWrapper>

      <FilterWrapper>
        <InputText>Expenses Filter</InputText>
        <InputText>Filter By Date</InputText>
        <StylesForInput
          input
          type="date"
          name="filterDate"
          onChange={(e) => onFilterChange("date", e.target.value)}
          value={filters.date}
        />

        <InputText>Filter By Price</InputText>
        <StylesForInput
          input
          type="number"
          name="filterPrice"
          onChange={(e) => onFilterChange("price", e.target.value)}
          value={filters.price}
        />

        <InputText>Filter By Category</InputText>
        <StylesForCategorySelect
          name="filterCategory"
          onChange={(e) => onFilterChange("category", e.target.value)}
          value={filters.category}
        >
          <option value="">-- Select Category --</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Transportation">Transportation</option>
          <option value="Insurance">Insurance</option>
          <option value="Fitness">Fitness</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </StylesForCategorySelect>
      </FilterWrapper>
    </ParentWrapper>
  )
}
