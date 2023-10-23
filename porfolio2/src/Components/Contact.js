import React from 'react'
import Contactlogo from '../images/Contact.svg'
import  './styles/Contact.css'

const Contact = () => {
  return (
   <>
        <div className='contact-logo spacer-tall  content-left'>
            <img src={Contactlogo}></img>
        </div>

        <div id='contact' className='contact content-left '>
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
