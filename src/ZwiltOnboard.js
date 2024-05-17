import React from "react";
import "../styles/WhyZwilt.css"; 
import Onboard from "../assets/z-onboard.png";
import  LearnMoreIcon  from "../assets/learn-more-ico.svg";

function ZwiltOnboard() {
  return (
    <div className="container">
      <div className="feature-and-video">
        <div className="feature-column">
          <section className="feature-section">
            <h2 className="section-title">An Open Book.</h2>
            <ul className="feature-list">
              <li>
                <span className="bullet-loop"></span>Easy and transparent ...
              </li>
              <li>
                <span className="bullet-loop"></span>Simple & convenient ...
              </li>
              <li>
                <span className="bullet-loop"></span>Review past ratings
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
