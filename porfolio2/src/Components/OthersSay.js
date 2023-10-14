import React from 'react'
import './styles/OthersSay.css'
import OthersSays from '../images/OtherSays.svg'
import quotationMarks from '../images/quotation-marks.svg'
import {OthersSaysdata} from './data'

const OthersSay = () => {
  return (
    <>

    <div className='others-says container content-left spacer-tall'>
        
        <div className='section-logo'>
            <img src={OthersSays}></img>
        </div>

        {OthersSaysdata.map((OthersSays)=>{
        const {id, description, person, title} = OthersSays
        return(
            <div key={id} className='comment'>
                <div className='quotation-markss'>
                    <img src={quotationMarks}></img>
                </div>
                <div className='description-box'>
                    <p className='description'>{description}</p>
                    <p className='person'>{person}</p>
                    <p className='title'>{title}</p>
                </div>
                <div>

                </div>
            </div>
        )
    })}
    </div>



    

    
    </>
  )
}

export default OthersSay
