import React from "react";
import Header from "./components/header"
import Stripe from "./components/stripe"
import Main from "./components/main"
import "./Public/stylesheets/app.css"


function App() {
  return (
    <div>
      <Header />
      <Stripe />
      <Main />
    </div>
  )
}

export default App

