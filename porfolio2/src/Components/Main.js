import React from 'react'

import arrow from '../images/Arrow 1.svg'
import arrow2 from '../images/Arrow 2.svg'

import './styles/Main.css'
const Main = () => {
  return (<>

      <div className='container main'>

        <div className='hello'>
            <h1>HELLO</h1>
            <p className='link'>THIS IS MY PORTFOLIO</p>
            <a className='link scroll'>Scroll<img src={arrow} className='arrow'></img></a>
        </div>

        <div className='name'>
            <h1>I'M ALEX</h1>
            <div className='about-me-links'>
              <a className='link'>LINKEDIN<img src={arrow} className='arrow' ></img></a>
              <a className='link'>GITHUB<img src={arrow} className='arrow'></img></a>
              <a className='link'>DOWNLOAD CV<img src={arrow} className='arrow'></img></a>
            </div>
            
        </div>

        <div className='description-text container'>
          <div className='center-headline'>
            <p >I’m a <span className='white'>front-end developer</span>,</p>
          </div>
            <p> dedicated to creatE responsive and</p>
            <p> ELEGANT USER experiences.</p>
        </div>

      </div>

     
    
    </>
   
  )
}

export default Main
