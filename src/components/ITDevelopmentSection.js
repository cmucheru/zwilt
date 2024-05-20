import * as React from "react";
import ExploreIT from "../assets/explore-jobs.svg";

const itDevelopmentData = [
  {
    imageSrc: require("../assets/shopify-ico.png"),
    title: "Shopify Developer",
  },
  {
    imageSrc: require("../assets/magento-ico.png"),
    title: "Magento Developer",
  },
  {
    imageSrc: require("../assets/data-scientist-ico.png"),
    title: "Data Scientist",
  },
  {
    imageSrc: require("../assets/webflow-ico.png"),
    title: "Webflow Developer",
  },
  {
    imageSrc: require("../assets/dot-net-ico.png"),
    title: "Dot Net Developer",
  },
  {
    imageSrc: ExploreIT,
  },
];

const DeveloperCard = ({ imageSrc, title }) => (
  <div className="developer-card">
    <img src={imageSrc} alt={title} className="developer-image" />
    <div className="developer-title">{title}</div>
  </div>
);

function ITDevelopmentSection() {
  return (
    <>
      <section className="it-development-section">
        <div className="it-development-container">
          <div className="it-development-content">
            <header className="it-development-header">
              <h2 className="it-development-title">IT & Development</h2>
            </header>
            <div className="developer-cards-container">
              {itDevelopmentData.map((developer, index) => (
                <DeveloperCard
                  key={index}
                  imageSrc={developer.imageSrc}
                  title={developer.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx="true
      ">{`
        .it-development-section {
          border-radius: 7px;
          background-color: #fff;
          max-width: 730px;
          padding: 24px 27px;
        }

        .it-development-container {
          display: flex;
          gap: 20px;
        }

        .it-development-content {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 68%;
          margin-left: 0;
        }

        .it-development-header {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        .it-development-title {
          color: #202229;
          text-align: center;
          font: 500 16px/149% Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .developer-cards-container {
          margin-top: 17px;
          display: flex;
          gap: 20px;
        }

        .developer-card {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
          font-size: 14px;
          color: #202229;
          font-weight: 600;
          text-align: center;
          line-height: 18px;
          width: 25%;
          margin-left: 0;
        }

        .developer-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 96px;
        }

        .developer-title {
          font-family: Switzer, sans-serif;
          margin-top: 16px;
        }
      `}</style>
    </>
  );
}

export default ITDevelopmentSection;
