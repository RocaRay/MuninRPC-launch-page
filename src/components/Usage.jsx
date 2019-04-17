import React from 'react'
import "./_Usage.css"
import example1 from '../images/example1.png'
import example2 from '../images/example2.png'
import example3 from '../images/example3.png'

const Usage = () => {
  return (
    <div className="usage">

      <h1>How to Use</h1>
      <p>1. Upload proto files straight from your local machine. No need for manual typing and configuration.</p>
      <img src={example1} alt="example1"/>

      <p>2. Enter the IP address of your target server, select a Service, and then select a Request.</p>
      <img src={example2} alt="example2"/>

      <p>3. Specify the Message you want to send, and then click send request. It's that simple!</p>
      <img src={example3} alt="example3"/>

    </div>
  )
}

export default Usage;