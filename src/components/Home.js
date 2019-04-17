import React from 'react';
import "./_Home.css"
import mac from "../images/maclogo.png"
import linux from "../images/linuxlogo.jpeg"
import windows from "../images/windowslogo.png"
import raven from "../images/raven.png"
import electron from "../images/electronlogo.png"

const Home = (props) => {
  return (
    <div className="home">
      <img src={raven} />
      <h1>MuninRPC</h1>
      <p>A testing tool for gRPC</p>
      <a href=""><img src={mac}/>Download for Mac</a>
      <a href=""><img src={windows}/>Download for Windows</a>
      <a href=""><img src={linux}/>Download for Linux</a>
      <p className="footer-text">Powered by Electron</p>
      <img className="electron-logo" src={electron}/>
    </div>
  )
}

export default Home;