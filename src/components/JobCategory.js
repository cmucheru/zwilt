import React, { useState } from "react";

const JobCategory = () => {
  const [showIT, setShowIT] = useState(true);

  const showITJobs = () => {
    setShowIT(true);
  };

  const showDesignJobs = () => {
    setShowIT(false);
  };

  const jobsDev = [
    "Python Developer",
    "Shopify Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Front End Developer",
    "Explore More",
  ];

  const jobsDesign = [
    "Graphic Designer",
    "UI/UX Designer",
    "Web Designer",
    "Motion Graphics Designer",
    "Illustrator",
    "Animator",
    "Explore More",
  ];

  const renderJobs = () => {
    const jobs = showIT ? jobsDev : jobsDesign;
    const halfLength = Math.ceil(jobs.length / 2);
    const leftColumn = jobs.slice(0, halfLength);
    const rightColumn = jobs.slice(halfLength);

    return (
      <div className="jobs-columns">
        <div className="column">
          {leftColumn.map((job, index) => (
            <div key={index} className="job-item">{job}</div>
          ))}
        </div>
        <div className="column">
          {rightColumn.map((job, index) => (
            <div key={index} className="job-item">{job}</div>
          ))}
        </div>
        <style jsx="true">{`
          .jobs-columns {
            display: flex;
          }
          .column {
            display: flex;
            flex-direction: column;
            line-height: normal;
            width: 25%;
          }
          .job-item {
            margin-top: 18px;
            font-family: Switzer, sans-serif;
          }
          .job-item:first-child {
            margin-top: 0;
          }
        `}</style>
      </div>
    );
  };

  return (
    <section className="jobs-section">
      <div className="jobs-container">
        <div className="jobs-featured">
          <center>
            <div className="jobs-categories">
              <div className="category-item-container">
                <button
                  className={`category-item ${showIT ? "active" : ""}`}
                  onClick={showITJobs}
                >
                  IT & Development
                </button>
              </div>
              <div className="category-item-container">
                <button
                  className={`category-item ${!showIT ? "active" : ""}`}
                  onClick={showDesignJobs}
                >
                  Design & Creative
                </button>
              </div>
            </div>
          </center>
          <div className="job-list">{renderJobs()}</div>
        </div>
      </div>
      <style jsx='true'>{`
        .jobs-section {
          border-radius: 15px;
          background-color: #f8f8f8;
          margin: 40px auto 0 auto;
          width: 920px;
          max-width: 100%;
          padding: 15px 73px 28px;
        }
        @media (max-width: 991px) {
          .jobs-section {
            padding: 0 20px;
          }
        }
        .jobs-container {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .jobs-container {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }
        .job-list {
          display: inline-flex;
          margin-top: 69px;
          flex-grow: 1;
          flex-direction: column;
          font-size: 16px;
          color: #959595;
          font-weight: 400;
          line-height: 100%;
        }
        @media (max-width: 991px) {
          .job-list {
            margin-top: 40px;
          }
        }
        .jobs-featured {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
          color: #959595;
          line-height: 100%;
        }
        .jobs-categories {
          align-self: stretch;
          display: inline-flex;
          gap: 0;
          color: #202229;
          text-align: center;
          line-height: 149%;
        }
        .category-item {
          font-family: Switzer, sans-serif;
          border-radius: 15px;
          font-weight: 500;
          justify-content: center;
          padding: 14px 0;
          border: none;
          width: 150px;
          cursor: pointer;
          
        }
        .category-item:first-child{
          margin-right:-10px;
        }
        .category-item:last-child{
          margin-left:-8px;
        
        }

        .category-item.active {
          background-color: #c7f4c2;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
        .category-item:not(.active) {
          background-color: #d2d2d2;
          align-items: end;
          flex-grow: 1;
          width: fit-content;
        }
        .category-item:not(.active):first-child{
          margin-right:-12px;
        }
        .job-item:hover{
          cursor:pointer;
        }
        .job-item:last-child {
          color: #202229;
          font-weight: 600;
        }
    
      `}</style>
    </section>
  );
};

export default JobCategory;
