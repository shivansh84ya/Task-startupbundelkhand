import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='landing'>
        <div className="text">
            <h1>{["Online ", "Startup ", "Accelerator"].map((item, index) =>(
                <span key={index}>{item}</span>
            ))}</h1>
            <h4>Grow your startup like crazy without giving up a penny of equity.</h4>
        </div>
       <div className='landing-img'>
        <img src="https://dq2uhp934kg74.cloudfront.net/production/20240811-0119/img/538a4912e09dd3ccaa7af3dbe6177114/how-it-works-w-labels.png" alt="" />
        </div>
     <div className="landing-btn">
        <div className="line"></div>
        <button className='landing-button'>Let's do this <FaArrowRight/></button>
        <div className="line"></div>
     </div>
    </div>
  )
}

export default LandingPage