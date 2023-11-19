import styled from "styled-components"
import backgroundImg from "../main-page/images/background.jpg"
import { IoLogOut } from "react-icons/io5"
import { IoBasketOutline } from "react-icons/io5"
import { IoBarChartSharp } from "react-icons/io5"

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

export const LogoutIcon = styled(IoLogOut)`
  font-size: 40px;
`
export const ExpenseIcon = styled(IoBasketOutline)`
  font-size: 40px;
`
export const ChartIcon = styled(IoBarChartSharp)`
  font-size: 40px;
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`

export const TopBlock = styled.div`
  display: flex;
  padding: 10px 20px;
  background: linear-gradient(to right, #285649, #feb47b);
  gap: 20px;
  height: 10%;
  width: 100%;
`

export const LogoutButton = styled.button`
  ${commonButtonStyles}
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 100px;
  cursor: pointer;
`

export const MainButton = styled.button`
  ${commonButtonStyles}
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`

export const InputForTopBlock = styled.input`
  padding: 10px;
  font-size: 28px;
  font-family: lato, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-right: 20px;
  flex: 1;
  border: none;
  background-color: #f7f7f7;
  color: #606470;
  letter-spacing: 5px;
`
export const BottomBlock = styled.div`
  display: flex;
  gap: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundImg});
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const BottomBlockHeading = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  height: 100px;
  margin-right: 60px;
  font-size: 65px;
  color: #93deff;
`
export const ModalText = styled.p`
  font-size: 18px;
  color: #0832ea;
`
