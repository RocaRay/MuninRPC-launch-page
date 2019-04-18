import React from 'react'
import './_Home.css'
import mac from '../assets/images/maclogo.png'
import linux from '../assets/images/linuxlogo.png'
import windows from '../assets/images/windowslogo.png'
import raven from '../assets/images/raven.png'
import electron from '../assets/images/electronlogo.png'
import githublogo from '../assets/images/githublogo.png'
import ex0 from '../assets/images/ex/ex0.gif'
import ex1 from '../assets/images/ex/ex1.gif'
import ex2 from '../assets/images/ex/ex2.gif'
import ex3 from '../assets/images/ex/ex3.gif'

const Home = props => {
  return (
    <div className="home">
      <img src={raven} className={'raven'} alt="raven" />
      <h1>MuninRPC</h1>
      <h2>a GUI client for gRPC services</h2>
      <h3>download binaries here</h3>
      <div className={'logoBox'}>
        <a href={'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-763399177644/munin-rpc-darwin.zip'}><img src={mac} className={'install'} alt="mac" /></a> |
        <a href={'#'}><img src={windows} className={'install'} alt="windows" /></a> |
        <a href={'#'}><img src={linux} className={'install'} alt="linux" /></a>
      </div>
      <p className="footer-text">Powered by Electron</p>
      <img className="electron-logo" src={electron} alt="electron" />
      <p className="explain-text">Upload your proto files</p>
      <img src={ex0} alt="example of uploading in MuninRPC" className={'example'} /> 
      <p className="explain-text">Keep a record of your client messages and server responses</p>
      <img src={ex1} alt="example of myriad connection type support" className={'example'} /> 
      <p className="explain-text">A clean, beautiful, tabbed interface</p>
      <img src={ex2} alt="example of beautiful MuninRPC tabs" className={'example'} /> 
      <p className={'gitblurb'}>Contributors welcome. Visit our Github repo.</p>
      <a href={"https://github.com/muninrpc/muninrpc/"}><img src={githublogo} alt="github logo" className={'github-logo'} /></a>
      <div className={'contrib-box'}>
        <div className={'row'}><p className={'name'}>Sterling Deng</p><a href={'https://github.com/sterlingdeng/'}><p className={'git-name'}>@sterlingdeng</p></a></div>
        <div className={'row'}><p className={'name'}>Ray Yao</p><a href={'https://github.com/RocaRay/'}><p className={'git-name'}>@RocaRay</p></a></div>
        <div className={'row'}><p className={'name'}>Ed Ryan</p><a href={'https://github.com/15ryane/'}><p className={'git-name'}>@15ryane</p></a></div>
      </div>
      
    </div>
  )
}

export default Home
