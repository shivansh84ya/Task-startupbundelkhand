import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import "./css/landingpage.css"
import CustomerSection from './CustomerSection';
import FundingSection from './FundingSection';

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
       <section className="category-grid">
        {/* Generate grid items dynamically */}
        {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'].map((category, index) => (
          <div key={index} className="category-item">
            <i className="category-icon"></i>
            <span>{category}</span>
          </div>
        ))}
      </section>
{/* 
      <section className="testimonial">
        <div className="quote-marks">"</div>
        <p className="quote-text">Insert a relevant testimonial quote here.</p>
        <div className="testimonial-author">
          <img src="placeholder-avatar.jpg" alt="Author" className="author-avatar" />
          <div className="author-info">
            <p className="author-name">Author Name</p>
            <p className="author-title">Author Title</p>
          </div>
          <img src="company-logo.png" alt="Company Logo" className="company-logo" />
        </div>
      </section> */}

      <section className="feature">
        <div className="feature-image">
          {/* Replace with appropriate graphic */}
          <div className="placeholder-graphic"></div>
        </div>
        <div className="feature-content">
          <h1>Feature Headline</h1>
          <p>Description of the feature and its benefits.</p>
          <button className="cta-button">Call to Action</button>
        </div>
      </section>

      <section className="statistics">
        <div className="stat-item">
          <i className="stat-icon"></i>
          <h3 className="stat-number">23 Million</h3>
          <p className="stat-description">Placeholder Statistic</p>
        </div>
        <div className="stat-item">
          <i className="stat-icon"></i>
          <h3 className="stat-number">237,000</h3>
          <p className="stat-description">Another Statistic</p>
        </div>
      </section>
      <CustomerSection/>
      <FundingSection/>
    </div>
  )
}

export default LandingPage