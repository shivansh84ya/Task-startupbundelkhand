import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Page2 = () => {
  return (
    <div className="page-2">
      <h1>Plan For Scale</h1>
      <div className="page-2-image">
        <div className="part-1">
          <div className="part1-text">
            <h1>
              Dedicated <br />
              Startup Advisor
            </h1>
            <p>
              You're not alone anymore. Team up with a dedicated, experienced
              Startup Advisor who knows exactly where to find the help you need
              to scale.
            </p>
            <button>
              Meet Your Advisor <FaArrowRight />
            </button>
          </div>
        </div>
        <img
          src="https://dq2uhp934kg74.cloudfront.net/production/20240811-0119/img/7ce37f45fff01feaf8485f52d4f28236/dedicated-startup-advisor-no-quote.png"
          alt=""
        />
      </div>
      <div className="advisors">
        <div className="advisor-sec-1">
          <h2>Meet Your Advisors</h2>
          <div className="line"></div>
        </div>
        <div className="advisor-sec-2">
          {[
            {
              image:
                "https://dq2uhp934kg74.cloudfront.net/production/20240811-0119/img/75afb00fbb7dd994c9bf4cbbc5e9a073/ed.jpg",
              name: "Ed Kang",
              des: "GP, SynergyWorks Fund, 24 Years.",
              des2: "7Starups, 2 Exists",
            },
            {
              image:
                "https://dq2uhp934kg74.cloudfront.net/production/20240811-0119/img/29253f00bd9313b533783cf18c220927/ryan.jpg",
              name: "Ryan Rutan",
              des: "Serial Founder over 20 Years.",
              des2: "Expert Marketer.",
            },
            {
              image:
                "https://dq2uhp934kg74.cloudfront.net/production/20240811-0119/img/8e463b88d607f8a020ab91aa998985a8/elliot.jpg",
              name: "Elliot Schneier",
              des: "Serial Founder over 20 Years.",
              des2: "Pro Fundraiser.",
            },
          ].map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt="" />
              <div className="card-in">
                <h2>{item.name}</h2>
                <p>
                  {item.des} <br />
                  {item.des2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="page2-last-sec">
        <div className="line"></div>
        <h1>🌐</h1>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Page2;
