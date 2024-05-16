import * as React from "react";
import FigmaIcon from "../assets/magento-ico.png"; //needs download
import AdobePhotoShopIcon from "../assets/magento-ico.png";
import AdobeIllustratorIcon from "../assets/magento-ico.png";
import UnrealEngineIcon from "../assets/magento-ico.png";
import Cinema4DIcon from "../assets/magento-ico.png";

const designCreativeData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4c12630b3d03736a8ada02b031c1daf8253b32504debce6bf333fd8c20ea8307?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8f04f24c67dd4b1311ff19460c3b36398895e824cf3f62ce3be0abc0602a461d?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "UX Designer",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ccbbe486ab5f2a974ea8e31d3565aea2f66c926a81f3ad403302b70c9be157ce?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "Illustration Artist",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a873d68560e8478f85344aee635ba5286d03f0cf9913709b268448e2fd28af7d?apiKey=8df361690d044f688e1acde506ed89e6&",
    title: "Unreal Engine",
  },
  {
    imageSrc:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/99b4112318c1081884bc4884d0bb2c51b58df04d705ed5ae774aeb2fcabb91ba?apiKey=8df361690d044f688e1acde506ed89e6&",

    title: "Unreal Engine",
  },
  {
    imageSrc:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e45081a8beb5aa3575e51503233430c7e1e25cc4688126dff1b1dd8d23661953?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",

    title: "Cinema 4D",
  },
];

const DeveloperCard = ({ imageSrc, title }) => (
  <div className="developer-card">
    <img src={imageSrc} alt={title} className="developer-image" />
    <div className="developer-title">{title}</div>
  </div>
);

function DesignCreativeSection() {
  return (
    <>
      <section className="it-development-section">
        <div className="it-development-container">
          <div className="it-development-content">
            <header className="it-development-header">
              <h2 className="it-development-title">Design and Creative</h2>
            </header>
            <div className="developer-cards-container">
              {designCreativeData.map((developer, index) => (
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

      <style jsx>{`
        .it-development-section {
          border-radius: 7px;
          background-color: #fff;
          max-width: 730px;
          padding: 24px 27px;
          margin-top: 24px;
          margin-right: 24px;
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

export default DesignCreativeSection;
