import React from 'react'
import Experimentslogo from '../images/Experiments.svg'
import './styles/Experiments.css'
import { Experimentsdata } from './data'


const Experiments = () => {
  return (
    <>
        <div className='experiements container'>

            <div className='section-logo'>
              <img src={Experimentslogo}></img>
            </div>
            
            <div  className='expiriements-box'>
              {Experimentsdata.map((expiriement)=> {
                const{id,name,githubLink,launchLink} = expiriement
                return(
                  <div className='expiriement' key={id}>
                    <h1>{name}</h1>
                  </div>
                )
              })}
            </div>
        </div>
        
    </>
  )
}

export default Experiments
