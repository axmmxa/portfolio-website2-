import React from 'react'
import './styles/Footer.css'
import logosmall from '../images/logo-small.svg'

const Footer = () => {
  return (
    <div className='footer container'>
      <div className='impressum'>
        <p>PRIVACY</p>
        <p>IMPRESSUM</p>
      </div>
      <img src={logosmall} className='logo-size'></img>
      <p>COPYRIGHT ALEXANDER MUCH 2023</p>
    </div>
  )
}

export default Footer
