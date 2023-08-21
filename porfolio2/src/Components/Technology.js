import React from 'react'
import './styles/Technology.css'
import Technologylogo from '../images/Technology.svg'
import {technologydata} from './data'

const Technology = () => {
  return (
    <>
        <div className='container technologys' >
        <div className='section-logo'>
            <img src={Technologylogo}></img>
        </div>

        <div className='technology-box'>
       {technologydata.map((tech)=>{
        const {id, headline, text} = tech
        return(
            
            <div key={id} className='technology'>
                <p className='one-technology'>{headline}</p>
                <p className='technology-text'>{text}</p>
            </div>
        )
       })}
       
      
    </div>
        </div>
        
    </>
  )
}

export default Technology
