import React, { useRef } from 'react'
import './styles/Navbar.css'
import logosmall from '../images/logo-small.svg'
import Buggerbutton from '../images/Hamburger.svg'
import { Link } from 'react-router-dom'

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
        <a ><Link onClick={showNavbar} to='Skills'>ABOUT ME</Link></a>
        <a ><Link onClick={showNavbar} to='/'>SKILLS</Link></a>
        <a ><Link onClick={showNavbar} to='/'>EXPIERENCE</Link></a>
        <a ><Link onClick={showNavbar} to='/'>WORK</Link></a>
        <a ><Link onClick={showNavbar} to='/'>CONTACT</Link></a>
          

         </div>

         <img className='nav-btn' src={Buggerbutton} onClick={showNavbar}></img>
      </div>

     

    </div>
  )
}

export default Navbar
