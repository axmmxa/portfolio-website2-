import React, { useRef } from 'react'
import './styles/Navbar.css'
import logosmall from '../images/logo-small.svg'
import Buggerbutton from '../images/Hamburger.svg'


import {FaTimes, FaBars} from 'react-icons/fa'



import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {

  const navRef = useRef()
  const btnRef =useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
    btnRef.current.classList.toggle('display-none')

}



  return (
    
    <div className='container'>
      
      <div  className='Navbar '>

        <img className='logo-size -nav-logo' src={logosmall}></img>

        
        <div ref={navRef} className='Nav-list'>
           <a ><Link onClick={showNavbar} to='#about'>ABOUT ME</Link></a>
          <a ><Link onClick={showNavbar} to='#skills'>SKILLS</Link></a>
          <a ><Link onClick={showNavbar} to='#expierence'>EXPIERENCE</Link></a>
          <a ><Link onClick={showNavbar} to='#work'>WORK</Link></a>
          <a ><Link onClick={showNavbar} to='#contact'>CONTACT</Link></a>
          <FaTimes  className='nav-btn-close' onClick={showNavbar}></FaTimes>
        </div>

        
         <img ref={btnRef} className='nav-btn' src={Buggerbutton} onClick={showNavbar}></img>
         
         
      </div>

     

    </div>
    
  )
}

export default Navbar
