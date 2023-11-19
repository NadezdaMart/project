import styled from "styled-components"

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 5px;
  margin-top: 20px;
  font-family: lato, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const StyledHeader = styled.th`
  background: linear-gradient(to right, #285649, #feb47b);
  color: #fff;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  border: 2px solid #ddd;
`

export const StyledCell = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  font-size: 12px;
`

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0.1);
  border-radius: 10px;
`

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`
