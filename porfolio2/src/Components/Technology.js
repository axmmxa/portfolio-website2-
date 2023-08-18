import React from 'react'
import './styles/Technology.css'
import Technologylogo from '../images/Technology.svg'
import {technologydata} from './data'

const Technology = () => {
  return (
    <>
        <div className='technology-logo'>
            <img src={Technologylogo}></img>
        </div>

        <div className='technology-box'>
       {technologydata.map((tech)=>{
        const {id, headline, text} = tech
        return(
            
            <div key={id} className='skill'>
                <h2>{headline}</h2>
                <p>{text}</p>
            </div>
        )
       })}
       
      
    </div>
    </>
  )
}

export default Technology
