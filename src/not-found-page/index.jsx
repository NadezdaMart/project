import React from "react"
import { StylesForButton } from "../login-form/index.style"
import {
  MainNotFoundPageWrapper,
  NotFoundPageHeading,
  SecondNotFoundPageWrapper,
} from "./index.style"

import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div>
      <MainNotFoundPageWrapper>
        <SecondNotFoundPageWrapper>
          <NotFoundPageHeading>Page Not Found</NotFoundPageHeading>
          <Link to="/login-form">
            <StylesForButton>Back to Login Form</StylesForButton>
          </Link>
        </SecondNotFoundPageWrapper>
      </MainNotFoundPageWrapper>
    </div>
  )
}
