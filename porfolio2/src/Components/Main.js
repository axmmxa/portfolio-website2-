import React from 'react'

import arrow from '../images/Arrow 1.svg'
import arrow2 from '../images/Arrow 2.svg'

import './styles/Main.css'
const Main = () => {
  return (<>
    <div className='main container'>

      <div className='hello'>
        <h1>Hello</h1>
         <p>This IS MY PORTFOLIO</p> 

         <div className='scroll-down'>
          <p>Scroll</p>
          <a><img src={arrow2}></img></a>
         </div>

      </div>

      

      <div className='myName'>
        <h1>I'M ALEX</h1>
        <div className='links'>
          <a>LINKED IN<img src={arrow}></img></a>
          <a>XING<img src={arrow}></img></a>
          <a>DOWNLOAD CV<img src={arrow}></img></a>
        </div>
      </div>

    </div>

    <div className='about-me-text'>
      <div className='first-sentence'>
        <h2>I'M A</h2>
        <h2 className='white-letters'>&nbsp;FRONT-END DEVELOPER</h2>
      </div>

      <div className='last-sentence'>
      <h2 >DEDICATED TO CREATE RESPONSIVE AND</h2>
      <h2>ELEGANT USER EXPIERENCE.</h2>
      </div>
      
    </div>
    
    </>
   
  )
}

export default Main
