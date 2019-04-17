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

  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>heyasds to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
}

export default IndexPage
