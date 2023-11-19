import React from "react"
import {
  ModalContent,
  ModalWrapper,
  ModalText,
  ModalCloseButton,
} from "./index.style"

export const ModalPage = ({ isOpen, closeModal, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <ModalText>{children}</ModalText>
        <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
      </ModalContent>
    </ModalWrapper>
  )
}
