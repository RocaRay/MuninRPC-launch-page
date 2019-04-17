import React from 'react'
import './_Home.css'
import mac from '../assets/images/maclogo.png'
import linux from '../assets/images/linuxlogo.jpeg'
import windows from '../assets/images/windowslogo.png'
import raven from '../assets/images/raven.png'
import electron from '../assets/images/electronlogo.png'

const Home = props => {
  return (
    <div className="home">
      <img src={raven} alt="raven" />
      <h1>MuninRPC</h1>
      <p>A testing tool for gRPC</p>
      <a href="#">
        <img src={mac} alt="mac" />
        Download for Mac
      </a>
      <a href="#">
        <img src={windows} alt="windows" />
        Download for Windows
      </a>
      <a href="#">
        <img src={linux} alt="linux" />
        Download for Linux
      </a>
      <p className="footer-text">Powered by Electron</p>
      <img className="electron-logo" src={electron} alt="electron" />
    </div>
  )
}

export default Home
