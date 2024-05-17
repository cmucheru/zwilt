import React from "react";
import "../styles/WhyZwilt.css"; // Assuming you have a CSS file for styling
import Openbk from "../assets/z-open-bk.png";
import LearnMoreIcon from "../assets/learn-more-ico.svg";

function ZwiltOpenBook() {
    return (
        <div className="cont-ainer">
          <div className="feature-and-video">
            <div className="feature-column">
              <section className="feature-section">
                <h2 className="section-title">An open book.</h2>
                <ul className="feature-list">
                  <li>
                    <span className="bullet-open-bk"></span>  Easy and transparent one-to-one chat with candidates. <br />

                  </li>
                  <li>
                    <span className="bullet-open-bk"></span>Simple and convenient payment methods. <br />

                  </li>
                  <li>
                    <span className="bullet-open-bk"></span>Review past ratings.
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
              <img src={Openbk} alt="onboard" className="onboard-img" />
            </div>
          </div>
        </div>
      );
    }

export default ZwiltOpenBook;

