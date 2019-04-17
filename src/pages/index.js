import React, { useState } from "react"
import About from "../components/About"
import Usage from "../components/Usage"
import Header from "../components/Header"
import Home from "../components/Home"
import Contact from "../components/Contact"

const IndexPage = () => {
  const [mode, setMode] = useState("Home")

  let display;
  switch (mode) {
    case "Home":
      display = <Home />
      break;
    case "About":
      display = <About />
      break;
    case "Usage":
      display = <Usage />
      break;
    case "Contact":
      display = <Contact />
      break;
    default:
      display = <Home />
      break;
  }

  return (
    <div className="app">
      <Header mode={mode} setMode={setMode}/>
      {display}
    </div>
  )
}

export default IndexPage
