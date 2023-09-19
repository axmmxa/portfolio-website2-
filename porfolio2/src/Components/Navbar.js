import React, { useRef } from 'react'
import './styles/Navbar.css'
import logosmall from '../images/logo-small.svg'
import Buggerbutton from '../images/Hamburger.svg'

const Navbar = () => {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
    console.log("Test")
}



  return (
    <div className='container'>
      
      <div  className='Navbar '>

        <img className='logo-size -nav-logo' src={logosmall}></img>

        
        <div ref={navRef} className='Nav-list'>
          <a>ABOUT ME</a>
          <a>SKILLS</a>
          <a>EXPIERENCE</a>
          <a>WORK</a>
          <a>CONTACT</a>

         </div>

         <img className='nav-btn' src={Buggerbutton} onClick={showNavbar}></img>
      </div>

     

    </div>
  )
}

export default Navbar
