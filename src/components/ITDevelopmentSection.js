import * as React from "react";
import ShopifyIcon from "../assets/shopify-ico.png";
import MagentoIcon from "../assets/magento-ico.png";
import DataScienceIcon from "../assets/data-scientist-ico.png";
import WebflowIcon from "../assets/webflow-ico.png";
import DotNetIcon from "../assets/magento-ico.png";

const itDevelopmentData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/113016d88ddd480ff48e0ca35f6a053b1ae074b336514a76e3e4fba724d93bc9?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "Shopify Developer",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8e08809bba54bf8fc022d5cbfe2b1eb413544321ae01d873620e38efd0c92037?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "Magento Developer",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e0137434eda64603ea0ebb2e235cb7ad711c8f63eb0a075a9ad37fdf0cc1b3ca?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "Data Scientist",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/af0b60f0ea2dda5e19a0d4efbbfa6caf4990e6f7196fef92cf2e247bb8701eef?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "Webflow Developer",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fe032ff12044278c75dde3bb2a8acee721003655c8438095a545093354208b16?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "Dot Net Developer",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/db2fd7bc3a3906f7d19ef537ef3a96d5ab37c8461dc7b6652797d0b9968d3662?apiKey=8df361690d044f688e1acde506ed89e6&",
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

      <style jsx="true">{`
        .it-development-section {
          border-radius: 7px;
          background-color: #fff;
          max-width: 730px;
          padding: 24px 27px;
        }

        @media (max-width: 991px) {
          .it-development-section {
            padding: 0 20px;
          }
        }

        .it-development-container {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .it-development-container {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .it-development-content {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 68%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .it-development-content {
            width: 100%;
          }
        }

        .it-development-header {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .it-development-header {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .it-development-title {
          color: #202229;
          text-align: center;
          font: 500 16px/149% Switzer, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .it-development-title {
            max-width: 100%;
          }
        }

        .developer-cards-container {
          margin-top: 17px;
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .developer-cards-container {
            max-width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
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

        @media (max-width: 991px) {
          .developer-card {
            width: 100%;
            margin-top: 20px;
          }
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

        .dotnet-developer-container {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 32%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .dotnet-developer-container {
            width: 100%;
          }
        }

        .dotnet-developer-card {
          display: flex;
          margin-top: 33px;
          flex-grow: 1;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .dotnet-developer-card {
            margin-top: 40px;
          }
        }

        .dotnet-developer-images {
          display: flex;
          gap: 20px;
        }

        .dotnet-developer-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 96px;
        }

        .dotnet-developer-image-border {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 96px;
          fill: #f6f6f6;
          stroke-width: 2px;
          stroke: #f6f6f6;
          border: 2px solid rgba(246, 246, 246, 1);
        }

        .dotnet-developer-title {
          color: #202229;
          text-align: center;
          margin: 16px 0 0 15px;
          font: 600 14px/18px Switzer, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .dotnet-developer-title {
            margin-left: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default ITDevelopmentSection;
