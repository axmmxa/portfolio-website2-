import React from 'react'
import './styles/Commercial.css'
import { Commercialdata } from './data'
import Commerciallogo from '../images/Commercial.svg'
import EmptyProjekt from '../images/EmptyProjekt.svg'
import arrow from '../images/Arrow 1.svg'

const Commercial = () => {

 return (
    <>  
        <div className='commercial'>
        <div className='section-logo'>
            <img src={Commerciallogo}></img>
        </div>
        {Commercialdata.map((commercial)=>{
            const {id,headline,location,text} = commercial
            return (
                <div key={id} className='commercial-box'>

                    <div className='description-commercial'>
                        <h2>{headline}</h2>
                        <p className='location'>{location}</p>
                        <p className='text'>{text}</p>
                        <div className='links-commercial'>
                        <a className='link'>Launch<img src={arrow} className='arrow'></img></a>
                        <a className='second-link link'>GITHUB<img src={arrow} className='arrow'></img></a>
                        </div>
                    </div>

                    <div className='projekt-picture'>
                        <img src={EmptyProjekt}></img>
                    </div>

                </div>
            )
        })}
        </div>
        
    </>
    
 )
}

export default Commercial
