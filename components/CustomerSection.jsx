import React from "react";
import "./css/Customer.css";
import img3 from "../components/img/image3.png"
import img4 from "../components/img/image4.png"

const CustomerSection = () => {
  return (
    <div className="customer-section">
      <div className="stats">
        <div className="stat-item">
          <h2>23 Million</h2>
          <p>Customers Acquired</p>
        </div>
        <div className="stat-item">
          <h2>237,000</h2>
          <p>Startup Launches</p>
        </div>
      </div>

      <div className="content">
        <div className="image-wrapper">
          <img src={img3} alt="Phone" />
        </div>
        <div className="text-content">
          <h1>Get More Customers</h1>
          <p>
            Whether you're trying to find your first customer or scale to
            millions, we can help you supercharge your acquisition efforts.
          </p>
        </div>
      </div>

      <div className="platforms">
        <h3>Launched on our Platforms</h3>
        <div className="platform-logos">
          <img src={img4} alt="Bumble" />
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
