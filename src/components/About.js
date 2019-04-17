import React from 'react';
import "./_About.css";

const About = (props) => {
  return (
    <div className="about">
    <h2>About</h2>
      <p>MuninRPC: a GUI client for gRPC services.</p> 
      <p>Inspired by Postman and BloomRPC.</p>
      <p>Built on the shoulders of giants: protobuf.js & grpc-node.</p>
      <p>Mock requests to a gRPC service.</p>
      <p>Upload your proto files, select a service, configure your message, and go.</p>
      <p>This is an early build. Development is in progress!</p>

      <h2>Features</h2>
      <ul>
        <li>Supports unary, server-push, client-push, and bi-directional requests.</li>
        <li>Keeps a record of your outgoing and incoming messages.</li>
        <li>Large proto file? No problem. Search your messages and services for what you need.</li>
        <li>Clean, beautiful, tabbed interface.</li>
      </ul>
    </div>
  )
}

export default About;
