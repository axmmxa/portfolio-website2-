import React, { useState } from 'react'
import Contactlogo from '../images/Contact.svg'
import  './styles/Contact.css'

import arrow from '../images/Arrow 1.svg'

const Contact = () => {

  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
   
  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, text)
  }
  

  return (
   <>
        <div className='contact-logo spacer-tall  content-left'>
            <img src={Contactlogo}></img>
        </div>

        <div id='contact' className='contact content-left '>
            <h1>Let's talk</h1>

            <form className='contact-form' onSubmit={handleSubmit}>
                <input type='text' name='Name' value={name} onChange={handleNameChange} id='' placeholder='Name'></input>
                <input type='email'name='email' value={email} onChange={handleEmailChange} id=''  placeholder='Email'></input>
                <textarea type='text' name='' value={text}  placeholder='Message' onChange={handleTextChange} cols={5} rows={6}></textarea>
                <button type='submit' >SEND MSG <img src={arrow}></img></button>
            </form>

        
        </div>
   </>
  )
}

export default Contact
