import React from 'react'

import arrow from '../images/Arrow 1.svg'
import arrow2 from '../images/Arrow 2.svg'

import './styles/Hello.css'
const Hello = () => {
  return (<>

      <div id='about' className='container hello-container content-left'>

        <div className='scroll-down-arrow'>
          <a className='link'>Scroll</a>
          <a className='link'><img src={arrow} className='arrow turn-arround'></img></a>
        </div>

        <div className='hello'>
            <h1 className='h1-small'>HELLO</h1>
            <div className='hello-discription'>
            <p className='link display-mobile-none'>THIS IS MY PORTFOLIO</p>
            </div>
            
        </div>

        <div className='name'>
            <h1>I'M ALEX</h1>
            <div className='about-me-links display-mobile-none'>
              <a className='link'>LINKEDIN<img src={arrow} className='arrow' ></img></a>
              <a className='link'>GITHUB<img src={arrow} className='arrow'></img></a>
              <a className='link'>DOWNLOAD CV<img src={arrow} className='arrow'></img></a>
            </div>
            
        </div>

      </div>

     
    
    </>
   
  )
}

export default Hello
