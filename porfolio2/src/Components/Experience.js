import React from 'react'
import './styles/Experience.css'
import Experiencelogo from '../images/Experience.svg'
import { Experiencedata } from './data'

const Experience = () => {
  return (
    <>
        <div className='experience-logo'>
            <img src={Experiencelogo}></img>
        </div>

        <div className='expierence-box'>
            {Experiencedata.map((experience)=>{
                const{id,headline1, headline2, description, text} = experience
                return(
                    <div key={id} className='experience'>
                        <h2 className='headline1'>{headline1}</h2>
                        <h2 className='headline2'>{headline2}</h2>
                        <h4>{description}</h4>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Experience