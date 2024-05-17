import React from "react";
import "../styles/WhyZwilt.css"; 
import Onboard from "../assets/z-onboard.png";
import LearnMoreIcon  from "../assets/learn-more-ico.svg";

function ZwiltOnboard() {
  return (
    <div className="container">
      <div className="feature-and-video">
        <div className="feature-column">
          <section className="feature-section">
            <h2 className="section-title">Onboard without the risk.</h2>
            <ul className="feature-list">
              <li>
                <span className="bullet"></span>We pick the best for you to
                select.
              </li>
              <li>
                <span className="bullet"></span>Thousands of vetted candidates
                in dozens of categories.
              </li>
              <li>
                <span className="bullet"></span>Risk-free resource swapping for
                the best fit.
              </li>
            </ul>
            <div className="learn-more">
              <img
                src={LearnMoreIcon}
                alt="Learn more icon"
                className="learn-more-icon"
              />
              <div className="learn-more-text">Learn More</div>
            </div>
          </section>
        </div>
        <div>
          <img src={Onboard} alt="onboard" className="onboard-img" />
        </div>
      </div>
    </div>
  );
}

export default ZwiltOnboard;
