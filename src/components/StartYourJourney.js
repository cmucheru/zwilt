import * as React from "react";
import DevPics1 from "../assets/start-your-journey-devs-img1.svg";
import DevPics2 from "../assets/start-your-journey-devs-img1.svg";
import DevPics3 from "../assets/start-your-journey-devs-img1.svg";
import One from "../assets/start-your-journey-no-1.svg";
import Two from "../assets/start-your-journey-no-1.svg";
import Three from "../assets/start-your-journey-no-1.svg";
import JoinIcon from "../assets/join-now-icon.svg";
import "../styles/StartYourJourney.css";

function ExploreCandidate({JoinIcon, devPics, logoImage, headline, description }) {
  return (
    <>
<section className="evaluation-container">
        <section className="evaluation-content">
          <header className="evaluation-header">
            <img src={logoImage} alt="Logo" className="evaluation-logo" />
            <h2 className="evaluation-title">{headline}</h2>
          </header>
          <article className="evaluation-details">
            <p className="evaluation-description">
              {description}
            </p>
            <div className="browse-more">
              <img
                loading="lazy"
                src={JoinIcon}
                className="browse-more-image"
                alt=""
              />
              <p className="browse-more-text">Browse More</p>
            </div>
          </article>
        </section>
        {/* <img
          loading="lazy"
          src={devPics}
          className="evaluation-image"
          alt="Visualization for evaluation content"
        /> */}
      </section>      <style jsx>{`
        .evaluation-container {
          display: flex;
          padding: 0 20px;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .evaluation-container {
            flex-wrap: wrap;
          }
        }
        .evaluation-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .evaluation-content {
            max-width: 100%;
          }
        }
        .evaluation-header {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .evaluation-header {
            flex-wrap: wrap;
          }
        }
   
  
        .evaluation-title {
          color: #202229;
          flex-grow: 1;
          font: 600 34px / 44px Switzer, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .evaluation-details {
          display: flex;
          margin-top: 33px;
          padding-left: 75px;
          flex-direction: column;
          align-items: start;
        }
        @media (max-width: 991px) {
          .evaluation-details {
            max-width: 100%;
            padding-left: 20px;
          }
        }
        .evaluation-description {
          color: rgba(32, 34, 41, 0.8);
          font: 400 16px / 24px Switzer, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .browse-more {
          display: flex;
          margin-top: 30px;
          gap: 8px;
          font-size: 15px;
          color: #202229;
          font-weight: 500;
          line-height: 82%;
        }
        .browse-more-image {
          aspect-ratio: 1;
          object-fit: cover;
          width: 50px;
        }
        .browse-more-text {
          margin: auto 0;
        }
        .evaluation-image {
          aspect-ratio: 1.2;
          object-fit: cover;
          width: 100%;
          flex: 1;
        }
        @media (max-width: 991px) {
          .evaluation-image {
            max-width: 100%;
          }
        }
      `}</style>
 

    </>
  );
}

function StartYourJourney() {
  return (
    <div className="start-journey-container">
      <div className="bg-1">
      <ExploreCandidate
        logoImage={One}
        devPics={DevPics1}
        headline="Find your next star performer."
        description="Explore the vast Zwilt marketplace to find the candidate that meets your needs."
        JoinIcon={JoinIcon}
      />
      </div>
      <div className="bg-2">
      <ExploreCandidate
        logoImage={Two}
        devPics={DevPics2}
        headline="Discover top talent."
        description="Unlock access to a pool of highly skilled candidates ready to elevate your team."
        JoinIcon={JoinIcon}
      />
      </div>
      <div className="bg-3">
         
      <ExploreCandidate
        logoImage={Three}
        devPics={DevPics3}
        headline="Connect with the best."
        description="Build meaningful relationships with top-tier professionals in your industry."
        JoinIcon={JoinIcon}
      />
      </div>
    
   
    </div>
  );
}

export default StartYourJourney;
