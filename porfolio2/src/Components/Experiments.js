import React from 'react'
import Experimentslogo from '../images/Experiments.svg'
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
                    </div>

                    <div className='right-section'>
                      test
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
