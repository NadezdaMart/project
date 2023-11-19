import styled from "styled-components"

const commonButtonStyles = {
  padding: "10px 20px",
  fontSize: "12px",
  border: "2px solid #eee6e6",
  borderRadius: "10px",
  backgroundColor: "#93deff",
  color: "white",
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
  width: "200px",
  marginTop: "10px",
  height: "50px",
}
export const ParentWrapper = styled.div`
  display: flex;
  padding: 20px;
  background: linear-gradient(to right, #285649, #feb47b);
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
`
export const MyExpensesFormWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  background: linear-gradient(to right, #eedee9, #feb47b);
  border: 2px solid #eeeeee;
  margin-right: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`

export const StylesForCategorySelect = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #eeeeee;
  border-radius: 10px;
`

export const MyExpensesListWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  background: linear-gradient(to right, #eedee9, #feb47b);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 2px solid #eeeeee;
  overflow-y: auto;
`

export const StylesForMyExpensesList = styled.div`
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;

  > div {
    margin-bottom: 15px;
  }
`

export const InputText = styled.label`
  font-size: 16px;
  margin-bottom: 20px;
  color: #393e46;
  font-weight: 700;
  font-family: lato, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  background: linear-gradient(to right, #eedee9, #feb47b);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 2px solid #eeeeee;
  height: auto;
  margin-left: 10px;
`

export const LogoutButton = styled.button`
  ${commonButtonStyles}
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  margin-top: auto;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

export const MainPageButton = styled.button`
  ${commonButtonStyles}
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: auto;
  margin-right: 100px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
`
