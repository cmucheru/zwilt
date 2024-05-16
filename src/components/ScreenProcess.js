import * as React from "react";

const stepsData = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b604129ad94cf14d12bbf03147d703e7d0cff9171b24831ca4446b35fac33802?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    imgAlt: "Resume Screening Step",
    stepTitle: "Step 1:",
    stepSubtitle: "Resume Screening",
    description: ""
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/58bf37a74e7cbe9029c8ef65465b0d4c69297c9c7a954826aca68bd38fed27ac?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    imgAlt: "Video Interview Step",
    stepTitle: "Step 2:",
    stepSubtitle: "Video Interview",
    description:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b604129ad94cf14d12bbf03147d703e7d0cff9171b24831ca4446b35fac33802?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    imgAlt: "Technical Evaluation Step",
    stepTitle: "Step 3:",
    stepSubtitle: "Technical Evaluation",
    description: ""
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b604129ad94cf14d12bbf03147d703e7d0cff9171b24831ca4446b35fac33802?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    imgAlt: "Application Review Step",
    stepTitle: "Step 4:",
    stepSubtitle: "Application Review",
    description: ""
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/525f6e4708e095209fbc9c60e7e8e340ef7ed5f3bbcbdfec2bc7889039f67372?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    imgAlt: "Let's Get to Work Step",
    stepTitle: "Step 5:",
    stepSubtitle: "Let's get to work",
    description: ""
  }
];

const Step = ({ imgSrc, imgAlt, stepTitle, stepSubtitle, description, hasShadow }) => (
  <section className={`step ${hasShadow ? 'step-shadow' : ''}`}>
    <img src={imgSrc} alt={imgAlt} className="step-img" loading="lazy" />
    <div className="step-text">
      <h3 className="step-title"><span className="step-title-bold">{stepTitle}</span> <span className="step-subtitle">{stepSubtitle}</span></h3>
      {description && <p className="step-description">{description}</p>}
    </div>
  </section>
);

function ScreenProcess() {
  return (
    <>
      <main className="main-content">
        <h2 className="main-heading">How we ensure you’re in good hands.</h2>
        <p className="main-description">
          With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.
        </p>
        
        {stepsData.map((step, index) => (
          <Step 
            key={index}
            imgSrc={step.imgSrc}
            imgAlt={step.imgAlt}
            stepTitle={step.stepTitle}
            stepSubtitle={step.stepSubtitle}
            description={step.description}
            hasShadow={index === 1}
          />
        ))}
      </main>
      
      <style jsx>{`
        .main-content {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 80px 70px;
        }

        @media (max-width: 991px) {
          .main-content {
            padding: 0 20px;
          }
        }

        .main-heading {
          margin-top: 84px;
          font: 700 54px/64px Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .main-heading {
            max-width: 100%;
            margin-top: 40px;
            font-size: 40px;
            line-height: 52px;
          }
        }

        .main-description {
          color: rgba(30, 21, 21, 0.8);
          margin-top: 37px;
          width: 646px;
          font: 400 22px/32px Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .main-description {
            max-width: 100%;
          }
        }

        .step {
          border: 1px solid rgba(240, 240, 240, 1);
          display: flex;
          gap: 20px;
          font-weight: 700;
          line-height: 18px;
          padding: 12px 20px;
          border-radius: 7px;
          margin-top: 4px;
          width: 646px;
          max-width: 100%;
        }

        .step-shadow {
          box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.07);
          padding: 21px 80px 21px 20px;
        }

        @media (max-width: 991px) {
          .step-shadow {
            padding-right: 20px;
          }
        }

        .step-img {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 57px;
        }

        .step-title {
          display: flex;
          gap: 8px;
        }

        .step-description {
          font-family: Switzer, sans-serif;
          font-weight: 400;
          line-height: 26px;
          margin-top: 23px;
        }

        @media (max-width: 991px) {
          .step-description {
            max-width: 100%;
          }
        }

      `}</style>
    </>
  );
}

export default ScreenProcess;