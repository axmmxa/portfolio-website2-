import React from 'react'
import './styles/Commercial.css'
import { Commercialdata } from './data'
import EmptyProjekt from '../images/EmptyProjekt.svg'

const Commercial = () => {

 return (
    <>
        {Commercialdata.map((commercial)=>{
            const {id,headline,location,text} = commercial
            return (
                <div key={id} className='commercial-box'>

                    <div className='description'>
                        <h2>{headline}</h2>
                        <p>{location}</p>
                        <p>{text}</p>
                        <div>
                            <a><img></img></a>
                            <a><img></img></a>
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
