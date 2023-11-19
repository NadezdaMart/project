import React from "react"
import { LoginForm } from "./login-form"
import { MainPage } from "./main-page"
import { MyExpensesPage } from "./my-expenses-page"
import { NotFoundPage } from "./not-found-page"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/my-expenses-page" element={<MyExpensesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
