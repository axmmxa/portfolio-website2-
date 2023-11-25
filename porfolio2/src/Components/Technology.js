import React from 'react'
import './styles/Technology.css'

import {technologydata} from './data'
import TechnologyLogo from '../images/technology.svg'

const Technology = () => {
  return (
    <>
        <div className='container technologys content-left spacer-tall' >

        <div className='section-logo'>
            <img src={TechnologyLogo}></img>
        </div>

        <div className='tech-box spacer-tall'>
            {technologydata.map((tech) => {
                return(
        
                        <div className='one-tech'>
                            <div className='tech-image'>
                                <img src={tech.TechImage}></img>
                            </div>

                            <div className='tech-description'>
                                <p className='headline-tech'>{tech.headline}</p>
                                <p className='text-tech'>{tech.text}</p>
                            </div>
                        </div>
                    
                )
            })}
        </div>

        </div>
        
    </>
  )
}

export default Technology
