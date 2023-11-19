import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  MenuWrapper,
  TopBlock,
  MainButton,
  BottomBlock,
  LogoutButton,
  LogoutIcon,
  ExpenseIcon,
  BottomBlockHeading,
  IconWrapper,
} from "./index.style"
import { ModalPage } from "../modal-page"
import {
  FaPiggyBank,
  FaMoneyBillAlt,
  FaHandHoldingUsd,
  FaCcMastercard,
  FaWallet,
} from "react-icons/fa"
import { useSelector } from "react-redux"
import { getUser } from "../redux/authSelectors"

const iconData = [
  { icon: <FaPiggyBank />, text: "Create Savings" },
  { icon: <FaMoneyBillAlt size={65} />, text: "Track Your Spending" },
  { icon: <FaHandHoldingUsd size={65} />, text: "Create A Budget" },
  { icon: <FaCcMastercard size={65} />, text: "Record All Expenses" },
  { icon: <FaWallet size={65} />, text: "Make A Monthly Spending Plan" },
]

export const MainPage = () => {
  const [selectedText, setSelectedText] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleIconClick = (text) => {
    setSelectedText(text)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedText("")
    setIsModalOpen(false)
  }

  const userData = useSelector(getUser)

  const navigate = useNavigate()
  const handleNavigateToMyExpensesPage = () => {
    navigate("/my-expenses-page")
  }

  const handleLogout = () => {
    navigate("/login-form")
  }

  return (
    <MenuWrapper>
      <TopBlock>
        <LogoutButton type="button" onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </LogoutButton>
        <MainButton type="button" onClick={handleNavigateToMyExpensesPage}>
          <ExpenseIcon />
          Add My Expenses
        </MainButton>
        <MainButton>{userData?.email}</MainButton>
      </TopBlock>
      <BottomBlock>
        <BottomBlockHeading>Money Management Tips</BottomBlockHeading>
        <div style={{ display: "flex", gap: "20px" }}>
          {iconData.map((data, index) => (
            <IconWrapper
              key={index}
              onMouseOver={() => handleIconClick(data.text)}
            >
              {data.icon}
            </IconWrapper>
          ))}
        </div>
        <ModalPage isOpen={isModalOpen} closeModal={closeModal}>
          <p>{selectedText}</p>
        </ModalPage>
      </BottomBlock>
    </MenuWrapper>
  )
}
