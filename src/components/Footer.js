import * as React from "react";
import "./Footer.css";
import CustomerFormIcon from "../assets/customer-open-form-button.svg";
import CustomerFormBg from "../assets/customer-form-bg.svg";


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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/11cd1b6d4b553ab09f32706461a683c2aa026005701f697249c51f82721b47c6?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&"
                      alt="Feature Icon"
                      className="feature-icon"
                    />
                    <div className="feature-description">
                      We take complex hiring processes - and simplify them.
                      Connecting you to the world’s highly qualified talent
                      pool.
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
            <div className="element-links">
              <div className="links-column">
                <div className="links-header">LINKS AND REDIRECTS</div>
                <div className="links-button-container">
                  <div className="links-button">Hire now</div>
                  <div className="links-button">Apply now</div>
                </div>
              </div>
              <div className="platform">
                <div className="platform-header">PLATFORM</div>
                <div className="platform-link">Find Work</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9193c2e753d9b9754b60554b6fd4f3beaec7440b21b6a384c5e03fb9c62e2e7b?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&"
                  alt="Platform Icon"
                  className="platform-icon"
                />
                <div className="platform-link">Find Talent</div>
                <div className="platform-link">Categories</div>
                <div className="platform-link">About Us</div>
              </div>
              <div className="categories">
                <div className="categories-header">CATEGORIES</div>
                <div className="category-item">Data Science</div>
                <div className="category-item">IT & Networking</div>
                <div className="category-item">Web & Mobile</div>
              </div>
              <div className="help">
                <div className="help-header">HELP</div>
                <div className="help-item">FAQ’s</div>
                <div className="help-item">Contact Us</div>
              </div>
              <div className="social">
                <div className="social-header">GET IN TOUCH @</div>
                <div className="social-link">Instagram</div>
                <div className="social-link">LinkedIn</div>
                <div className="social-link">Twitter</div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e84d005643e618c0a2c5c42d2fbb94a60e328e5b1ab7bd5183d14d5763c43c3?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&"
            alt="Divider Image"
            className="hero-image"
          />
          <hr
            className="custom-line"
            style={{ color: "white", width: "100%" }}
          />
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