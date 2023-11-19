import React, { useState, useEffect } from "react"
import {
  Wrapper,
  StylesForButton,
  StylesForInput,
  ButtonsWrapper,
  Container,
} from "./index.style.jsx"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  signInUser,
  loginWithGoogle,
  registerUser,
  setUser,
} from "../redux/authSlice"

import { getUser } from "../redux/authSelectors"

export const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (user) {
      navigate("/main-page")
    }
  }, [user, navigate])

  const handleRegister = () => {
    dispatch(registerUser({ email, password }))
      .then((userData) => {
        dispatch(setUser(userData.payload))
        navigate("/main-page")
      })
      .catch((error) => {
        console.error("Registration error:", error)
      })
  }

  const handleLogin = () => {
    dispatch(signInUser({ email, password }))
      .then((userData) => {
        dispatch(setUser(userData.payload))
        navigate("/main-page")
      })
      .catch((error) => {
        console.error("Login error:", error)
      })
  }

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle())
  }

  const changeHandler = ({ target }) => {
    const setters = {
      email: setEmail,
      password: setPassword,
      confirmPassword: () => {},
    }

    setters[target.name](target.value)
  }

  return (
    <Wrapper>
      <Container>
        <StylesForInput
          input
          type="email"
          placeholder="Email address"
          onChange={changeHandler}
          value={email}
          name="email"
        ></StylesForInput>

        <StylesForInput
          input
          type="password"
          placeholder="Password"
          onChange={changeHandler}
          value={password}
          name="password"
        ></StylesForInput>

        {isRegister && (
          <StylesForInput
            input
            type="password"
            placeholder="Repeat Password"
            onChange={changeHandler}
            value={password}
            name="confirmPassword"
          ></StylesForInput>
        )}

        <ButtonsWrapper>
          <StylesForButton type="button" onClick={handleLogin}>
            Login
          </StylesForButton>

          <StylesForButton type="button" onClick={handleGoogleLogin}>
            Login with Google
          </StylesForButton>
        </ButtonsWrapper>

        <StylesForButton type="button" onClick={handleRegister}>
          Register
        </StylesForButton>
      </Container>
    </Wrapper>
  )
}
