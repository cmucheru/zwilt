import * as React from "react";
import FigmaIcon from "../assets/figma-icon.png"; 
import AdobePhotoShopIcon from "../assets/adobe-ps-icon.png";
import AdobeIllustratorIcon from "../assets/adobe-illustrator-icon.png";
import UnrealEngineIcon from "../assets/unreal-engine-icon.png";
import Cinema4DIcon from "../assets/cinema-4d-icon.png";
import MoreDesignSkills from "../assets/more-design-skills-icon.svg";

const designCreativeData = [
  {
    imageSrc:MoreDesignSkills,    title: "",
  },
  {
    imageSrc:FigmaIcon,
    title: "UX Designer",
  },
  {
    imageSrc:AdobePhotoShopIcon,
    title: "Illustration Artist",
  },
  {
    imageSrc:AdobeIllustratorIcon,
    title: "Illustration Artist",
  },
  {
    imageSrc:UnrealEngineIcon,

    title: "Unreal Engine",
  },
  {
    imageSrc:Cinema4DIcon,

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

      <style jsx="true">{`
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
            max-width:90%;
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
          .developer-image {
            width:72px;
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
