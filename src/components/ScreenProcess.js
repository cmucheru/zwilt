import * as React from "react";
import ScreenItemOn from "../assets/screen-process-item-active.svg";
import ScreenItemOff from "../assets/screen-process-item-not-active.svg";

const stepsData = [
  {
    stepTitle: "Step 1:",
    stepSubtitle: "Resume Screening",
    description: "Our team reviews the resumes to identify candidates with the required qualifications and experience, ensuring a perfect match for the role."
  },
  {
    stepTitle: "Step 2:",
    stepSubtitle: "Video Interview",
    description: "Candidates are assessed through skill-based questions in a virtual setting, allowing you to gauge personality and cultural fit."
  },
  {
    stepTitle: "Step 3:",
    stepSubtitle: "Technical Evaluation",
    description: "Candidates undergo a thorough technical assessment to evaluate their expertise and problem-solving abilities in relevant technologies."
  },
  {
    stepTitle: "Step 4:",
    stepSubtitle: "Application Review",
    description: "Our team conducts a detailed review of the application, considering all aspects of the candidate's profile to ensure they meet the job requirements."
  },
  {
    stepTitle: "Step 5:",
    stepSubtitle: "Let's get to work",
    description: "Once all evaluations are complete, successful candidates are onboarded, and we get to work, ensuring a smooth transition into their new role."
  }
];

const Step = ({ imgSrc, imgAlt, stepTitle, stepSubtitle, description, isActive, onClick }) => (
  <section className={`step ${isActive ? 'step-shadow' : ''}`} onClick={onClick}>
    <img src={imgSrc} alt={imgAlt} className="step-img" loading="lazy" />
    <div className="step-text">
      <h3 className="step-title"><span className="step-title-bold">{stepTitle}</span> <span className="step-subtitle">{stepSubtitle}</span></h3>
      {isActive && <p className="step-description">{description}</p>}
    </div>
  </section>
);

function ScreenProcess() {
  const [activeStep, setActiveStep] = React.useState(1);

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
            imgSrc={activeStep === index ? ScreenItemOn : ScreenItemOff}
            imgAlt={`${step.stepSubtitle} Step`}
            stepTitle={step.stepTitle}
            stepSubtitle={step.stepSubtitle}
            description={step.description}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </main>
      
      <style jsx="true">{`
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
          cursor: pointer;
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
