import * as React from "react";

export default function MyComponent() {
  return (
    <>
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero {
          background: linear-gradient(180deg, #0c0c0c 0%, #202229 100%);
          display: flex;
          width: 100%;
          padding-bottom: 16px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .hero {
            max-width: 100%;
          }
        }
        .hero-content {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 70px;
        }
        @media (max-width: 991px) {
          .hero-content {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .hero-banner {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 481px;
          align-items: center;
          font-size: 54px;
          color: #fff;
          font-weight: 600;
          text-align: center;
          line-height: 64px;
          justify-content: center;
          padding: 80px 60px;
        }
        @media (max-width: 991px) {
          .hero-banner {
            max-width: 100%;
            font-size: 40px;
            line-height: 52px;
            padding: 0 20px;
          }
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .cta {
          position: relative;
          display: flex;
          margin-top: 75px;
          width: 646px;
          max-width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .cta {
            margin-top: 40px;
            font-size: 40px;
            line-height: 52px;
          }
        }
        .cta-text {
          font-family: Switzer, sans-serif;
        }
        @media (max-width: 991px) {
          .cta-text {
            max-width: 100%;
            font-size: 40px;
            line-height: 52px;
          }
        }
        .cta-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 74px;
          margin-top: 46px;
        }
        @media (max-width: 991px) {
          .cta-icon {
            margin-top: 40px;
          }
        }
        .features {
          margin-top: 136px;
        }
        @media (max-width: 991px) {
          .features {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .features-container {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .features-container {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .feature-column {
          display: flex;
          flex-direction: column;
          width: 27%;
        }
        @media (max-width: 991px) {
          .feature-column {
            width: 100%;
          }
        }
        .feature {
          display: flex;
          margin-top: 5px;
          flex-grow: 1;
          flex-direction: column;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
          line-height: 22px;
        }
        @media (max-width: 991px) {
          .feature {
            margin-top: 40px;
          }
        }
        .feature-icon {
          aspect-ratio: 4.17;
          object-fit: auto;
          object-position: center;
          width: 120px;
          max-width: 100%;
        }
        .feature-description {
          font-family: Switzer, sans-serif;
          margin-top: 35px;
        }
        .feature-title-column {
          display: flex;
          flex-direction: column;
          width: 73%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .feature-title-column {
            width: 100%;
          }
        }
        .feature-title {
          color: #fff;
          font: 600 54px/64px Switzer, sans-serif;
        }
        @media (max-width: 991px) {
          .feature-title {
            max-width: 100%;
            margin-top: 40px;
            font-size: 40px;
            line-height: 52px;
          }
        }
        .element-links {
          display: flex;
          margin-top: 63px;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
          padding: 0 1px;
        }
        @media (max-width: 991px) {
          .element-links {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .links-column {
          display: flex;
          flex-direction: column;
        }
        .links-header {
          color: #fff;
          font: 600 14px/229% Switzer, sans-serif;
        }
        .links-button-container {
          display: flex;
          margin-top: 27px;
          gap: 8px;
          font-size: 15px;
          color: #edefff;
          font-weight: 500;
          line-height: 82%;
        }
        .links-button {
          font-family: Switzer, sans-serif;
          justify-content: center;
          border-radius: 20px;
          background-color: #292b34;
          padding: 20px 51px;
        }
        @media (max-width: 991px) {
          .links-button {
            padding: 0 20px;
          }
        }
        .platform {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          line-height: 133%;
        }
        .platform-header {
          font: 600 14px/229% Switzer, sans-serif;
        }
        .platform-link {
          font-family: Switzer, sans-serif;
          font-weight: 500;
          margin-top: 33px;
        }
        .platform-icon {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 102px;
          margin-top: 13px;
        }
        .platform-link:not(:first-child) {
          margin-top: 20px;
        }
        .categories {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          line-height: 133%;
        }
        .categories-header {
          font: 600 14px/229% Switzer, sans-serif;
        }
        .category-item {
          font-family: Switzer, sans-serif;
          margin-top: 33px;
        }
        .help {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          line-height: 133%;
        }
        .help-header {
          font: 600 14px/229% Switzer, sans-serif;
        }
        .help-item {
          font-family: Switzer, sans-serif;
          margin-top: 34px;
        }
        .social {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          line-height: 133%;
        }
        .social-header {
          font: 600 14px/229% Switzer, sans-serif;
        }
        .social-link {
          font-family: Switzer, sans-serif;
          margin-top: 32px;
        }
        .main-footer {
          display: flex;
          margin-top: 17px;
          width: 100%;
          max-width: 1300px;
          gap: 20px;
          font-size: 16px;
          color: #fff;
          font-weight: 500;
          line-height: 195%;
        }
        @media (max-width: 991px) {
          .main-footer {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .footer-text {
          font-family: Switzer, sans-serif;
          flex-grow: 1;
        }
        .footer-links {
          display: flex;
          gap: 20px;
        }
        .footer-link {
          font-family: Switzer, sans-serif;
          text-decoration-line: underline;
          flex-grow: 1;
        }
        .hero-image {
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 153px;
        }
        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
      <main className="section">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-banner">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/28de5f9b8d2aae8085c8a1043b52f8f5e1e907e3a63c18f6b129fe10429ccec1?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&"
                alt="Background Image"
                className="background-image"
              />
              <div className="cta">
                <div className="cta-text">
                  Need a job done, and done well? Get started
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b471f4cc4b9b15f0fd708f1e59ec0080bd198903f3ae3702028c277cfaecefb1?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&"
                  alt=""
                  className="cta-icon"
                />
              </div>
            </div>
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
                      Connecting you to the world’s highly qualified talent pool.
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
  )
}