import React from 'react'
import './styles/Footer.css'
import logosmall from '../images/logo-small.svg'

const Footer = () => {
  return (

    <>
    
    <div className='footer container content-left'>
    <div className='impressum'>
      <a>PRIVACY</a>
      <a>IMPRESSUM</a>
    </div>
    <img src={logosmall} className='logo-size'></img>
    <a>COPYRIGHT ALEXANDER MUCH 2023</a>
    </div>


    <div className='footer-mobile container content-left'>
      <img src={logosmall} className='logo-size'></img>

        <div className='impressum'>
          <a>PRIVACY</a>
          <a>IMPRESSUM</a>
      </div>
    </div>


    </>
  )
}

export default Footer
