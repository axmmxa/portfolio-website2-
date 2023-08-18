import React from 'react'
import './styles/Commercial.css'
import { Commercialdata } from './data'
import Commerciallogo from '../images/Commercial.svg'
import EmptyProjekt from '../images/EmptyProjekt.svg'
import Arrow1 from '../images/Arrow 1.svg'

const Commercial = () => {

 return (
    <>
        <div className='commercial-logo'>
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
                            <a>Launch<img src={Arrow1}></img></a>
                            <a className='second-link'>GITHUB<img src={Arrow1}></img></a>
                        </div>
                    </div>

                    <div className='projekt-picture'>
                        <img src={EmptyProjekt}></img>
                    </div>

                </div>
            )
        })}
    </>
    
 )
}

export default Commercial
