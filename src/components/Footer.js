
import * as React from "react";
import "./Footer.css";
import FooterIcon from "../assets/footer-icon-zwilt.svg";
import FooterComponent from "./FooterComponent"; // Import the MyComponent

function Footer() {
  return (
    <>
      <main className="section">
        <section className="hero">
          <div className="hero-content">
            <div className="features">
              <div className="features-container">
                <div className="feature-column">
                  <div className="feature">
                    <img
                      loading="lazy"
                      //footer icon
                      src={FooterIcon}
                      alt="Feature Icon"
                      className="feature-icon"
                    />
                    <div className="feature-description">
                      We take complex hiring processes - and simplify them.
                      Connecting you to the world’s highly qualified talent
                      pool.
                    </div>
                    <h2>LINKS AND REDIRECTS</h2>
                    <div className="links-redirects">
                    <button>Hire Now</button>
                    <button>Apply Now</button>
                    </div>
                   
                  </div>
                </div>
                <div className="feature-title-column">
                  <div className="feature-title">
                    Connecting the right people to the right businesses.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr
            className="custom-line"
            style={{ color: "white", width: "100%" }}
          />
          {/* Include MyComponent here */}
          <FooterComponent />
          <footer className="main-footer">
            <div className="footer-text">All rights reserved by Zwilt</div>
            <div className="footer-links">
              <div className="footer-link">Privacy Policy</div>
              <div className="footer-link">Terms and Conditions</div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

export default Footer;


