import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className='page3'>
        <h1>“What Startups has built is a platform that can <br />help you at every stage of growth.”</h1>
        <div className="founder-sec">
            <img src="https://dq2uhp934kg74.cloudfront.net/production/20240811-0119/img/3399ed998b8d8f527dc88240233cec5e/nate-checketts.jpg" alt="" />
            <div className="founder-sec-in">
                <h1>Nate Checketts, Founder</h1>
                <h2>Raised $50M+ • Apparel</h2>
            </div>
            <div className="hrLine"></div>
            <h1>RHONE</h1>
        </div>
        <div className="page3-sec3">
                <img src="https://dq2uhp934kg74.cloudfront.net/production/20240811-0119/img/fa06ce1bec59d87d7d83cce5373d4269/callout-custom-funding-plan.png" alt="" />
            <div className="page3-sec3-in">
                <h1>Customized <br />Action Plan</h1>
                <p>You tell us what you want to achieve, we'll build a kick-ass plan to get it done fast. We'll customize your plan to take advantage of the playbooks of thousands of startups before you.</p>
                <button>
              Build Your Plan <FaArrowRight />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Section3