import styled from "styled-components"

export const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background: linear-gradient(to right, #eedee9, #feb47b);
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const ModalText = styled.p`
  font-size: 26px;
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bolder;
`

export const ModalCloseButton = styled.button`
  background-color: #93deff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
