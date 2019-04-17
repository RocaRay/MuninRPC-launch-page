import React from 'react'
import './_Header.css'
import raven from '../assets/images/raven.png'

const Header = props => {
  return (
    <div className="header">
      <div className="header-left">
        <img className="raven" src={raven} alt="raven" />
      </div>
      <div className="header-right">
        <div
          className={props.mode === 'Home' ? 'active' : ''}
          onClick={() => props.setMode('Home')}
        >
          Home
        </div>
        <div
          className={props.mode === 'About' ? 'active' : ''}
          onClick={() => props.setMode('About')}
        >
          About
        </div>
        <div
          className={props.mode === 'Usage' ? 'active' : ''}
          onClick={() => props.setMode('Usage')}
        >
          Usage
        </div>
        <div
          className={props.mode === 'Contact' ? 'active' : ''}
          onClick={() => props.setMode('Contact')}
        >
          Contact Us
        </div>
      </div>
    </div>
  )
}

export default Header
