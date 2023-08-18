import React from 'react'
import './styles/Skills.css'
import skills from '../images/skills.svg'
import {skilldata} from './data'
const Skills = () => {
  return (
    <>
    <div className='skill-logo'>
        <img src={skills}></img>
    </div>

    <div className='skill-box'>
       {skilldata.map((skill)=>{
        const {id, headline, text} = skill
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

export default Skills
