import React from 'react'
import Experimentslogo from '../images/Experiments.svg'
import arrow from '../images/Arrow 1.svg'
import './styles/Experiments.css'
import { Experimentsdata } from './data'


const Experiments = () => {
  return (
    <>
        <div id='work' className='experiements container content-left spacer-tall'>

            

            <div className='section-logo'>
              <img src={Experimentslogo}></img>
            </div>
            
            <div  className='expiriements-box spacer-tall'>
              {Experimentsdata.map((expiriement)=> {
                const{id,name,githubLink,launchLink} = expiriement
                return(
                  <div className='expiriement' key={id}>

                    <div className='left-section'>
                        <h1>{expiriement.name}</h1>
                        <div className='link-section'>
                        <a className='link'>Launch<img src={arrow} className='arrow'></img></a>
                        <a className='link link-left-margin'>GITHUB<img src={arrow} className='arrow'></img></a>
                        </div>
                        
                    </div>

                    <div className='right-section'>
                      <p>{expiriement.text}</p>
                    </div>

                  </div>
                )
              })}
            </div>
        </div>
        
    </>
  )
}

export default Experiments
