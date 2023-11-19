import React from "react"
import {
  StyledTable,
  StyledHeader,
  StyledCell,
  DeleteButton,
  Row,
} from "./index.style"

export const MyTable = ({ expensesList, onExpenseDelete }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledHeader>Expense</StyledHeader>
          <StyledHeader>Date</StyledHeader>
          <StyledHeader>Price</StyledHeader>
          <StyledHeader>Category</StyledHeader>
          <StyledHeader>Action</StyledHeader>
        </tr>
      </thead>
      <tbody>
        {expensesList.map((rowData) => (
          <Row key={rowData.id}>
            <StyledCell>{rowData.expense}</StyledCell>
            <StyledCell>{rowData.date}</StyledCell>
            <StyledCell>{rowData.price}</StyledCell>
            <StyledCell>{rowData.category}</StyledCell>
            <StyledCell>
              <DeleteButton onClick={() => onExpenseDelete(rowData.id)}>
                Delete
              </DeleteButton>
            </StyledCell>
          </Row>
        ))}
      </tbody>
    </StyledTable>
  )
}
