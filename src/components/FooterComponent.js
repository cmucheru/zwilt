import * as React from 'react';

function FooterSection({ title, items }) {
  return (
    <section className="footer-section">
      <h3 className="footer-title">{title}</h3>
      {items.map((item, index) => (
        <p className="footer-item" tabindexindex="0" key={index}>
          {item}
        </p>
      ))}
    </section>
  );
}

function FooterComponent() {
  const platformItems = ['Find Work', 'Find Talent', 'Categories', 'About Us'];
  const categoryItems = ['Data Science', 'IT & Networking', 'Web & Mobile'];
  const helpItems = ['FAQ’s', 'Contact Us'];
  const socialItems = ['Instagram', 'LinkedIn', 'Twitter'];

  return (
    <>
      <style jsx="true">{`
        .container {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 20px;
        }
        .intro-text {
          color: #fff;
          width: 100%;
          font: 600 54px/64px Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .intro-text {
            max-width: 100%;
            font-size: 40px;
            line-height: 52px;
          }
        }
        .footer {
          margin-top: 74px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .footer {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .footer-container {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .footer-container {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }
        .footer-section {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 24%;
        }
        @media (max-width: 991px) {
          .footer-section {
            width: 100%;
          }
        }
        .footer-title {
          font: 600 14px/229% Switzer, -apple-system, Roboto, Helvetica, sans-serif;
          color: #fff;
        }
        .footer-item {
          font-family: Switzer, sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #fff;
          line-height: 133%;
          margin-top: 30px;
        }
      `}</style>
      <div className="container">
     
        <footer className="footer">
          <div className="footer-container">
            <FooterSection title="PLATFORM" items={platformItems} />
            <FooterSection title="CATEGORIES" items={categoryItems} />
            <FooterSection title="HELP" items={helpItems} />
            <FooterSection title="GET IN TOUCH @" items={socialItems} />
          </div>
        </footer>
      </div>
    </>
  );
}

export default FooterComponent;
