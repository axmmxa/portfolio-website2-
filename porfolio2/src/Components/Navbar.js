import React from 'react'
import './styles/Navbar.css'
import logosmall from '../images/logo-small.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={logosmall}></img>
      <div className='Nav-list'>
        <a>ABOUT ME</a>
        <a>SKILLS</a>
        <a>EXPIERENCE</a>
        <a>WORK</a>
        <a>CONTACT</a>
      </div>
    </div>
  )
}

export default Navbar
