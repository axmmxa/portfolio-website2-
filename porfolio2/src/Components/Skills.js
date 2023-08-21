import React from 'react'
import './styles/Skills.css'
import skills from '../images/skills.svg'
import {skilldata} from './data'
const Skills = () => {
  return (
    <>

    <div className='skills container'>
    <div className='section-logo'>
        <img src={skills}></img>
    </div>

    <div className='skill-box'>
       {skilldata.map((skill)=>{
        const {id, headline, text} = skill
        return(
            
            <div key={id} className='skill'>
                <p className='one-skill'>{headline}</p>
                <p className='skill-text'>{text}</p>
            </div>
        )
       })}
       
      
    </div>
    </div>


    
    </>
  )
}

export default Skills
