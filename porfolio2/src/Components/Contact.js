import React from 'react'
import Contactlogo from '../images/Contact.svg'
import  './styles/Contact.css'

const Contact = () => {
  return (
   <>
        <div className='contact-logo spacer-tall'>
            <img src={Contactlogo}></img>
        </div>

        <div className='contact'>
            <h1>Let's talk</h1>

            <form className='contact-form'>
                <input type='text' name='Name' placeholder='Name'></input>
                <input type='email'name='email' placeholder='Email'></input>
                <textarea placeholder='Message' cols={5} rows={6}></textarea>
            </form>

        
        </div>
   </>
  )
}

export default Contact
