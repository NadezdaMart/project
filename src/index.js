import React from "react"
import ReactDOM from "react-dom/client"
import { Router } from "./routes"
import { Provider } from "react-redux"
import { store } from "./redux"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
)
