import React from 'react'
import './_Contact.css'
import githublogo from '../assets/images/githublogo.png'

const Contact = props => {
  return (
    <div className="contact">
      <p>Visit our GitHub repo. Contributors welcome.</p>
      <a className="repo-link" href="https://github.com/muninrpc/muninrpc">
        GitHub Repo
      </a>
      <img src={githublogo} alt="github" />

      <h1>Contributors</h1>

      <div className="contact-box-container">
        <div className="contact-box">
          <h5>Edward Ryan</h5>
          <a href="https://github.com/15ryane">Github</a>
        </div>

        <div className="contact-box">
          <h5>Sterling Deng</h5>
          <a href="https://github.com/sterlingdeng">Github</a>
        </div>

        <div className="contact-box">
          <h5>Ray Yao</h5>
          <a href="https://github.com/RocaRay">Github</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
