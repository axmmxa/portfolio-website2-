import React from 'react'
import Experimentslogo from '../images/Experiments.svg'
import './styles/Experiments.css'


const Experiments = () => {
  return (
    <>
        <div className='experiments-logo'>
            <img src={Experimentslogo}></img>
        </div>

        <div className='experiments-box'>
            <h1>Expirements-section</h1>
        </div>
    </>
  )
}

export default Experiments
