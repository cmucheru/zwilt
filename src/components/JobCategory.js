import React, { useState } from "react";
import "../styles/JobCategory.css";

const JobItem = ({ title }) => <div className="job-item">{title}</div>;
/*  TODO:
- Add btn to @  category item list
- Group the items by 4
*/

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

function JobCategory() {
  const [showIT, setShowIT] = useState(true);

  const showITJobs = () => {
    setShowIT(true);
  };

  const showDesignJobs = () => {
    setShowIT(false);
  };

  const renderJobs = () => {
    const jobs = showIT ? jobsDev : jobsDesign;
    const halfLength = Math.ceil(jobs.length / 2);
    const leftColumn = jobs.slice(0, halfLength);
    const rightColumn = jobs.slice(halfLength);

    return (
      <div className="jobs-columns">
        <div className="column">
          {leftColumn.map((job, index) => (
            <JobItem key={index} title={job} />
          ))}
        </div>
        <div className="column">
          {rightColumn.map((job, index) => (
            <JobItem key={index} title={job} />
          ))}
        </div>
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
    </section>
  );
}

export default JobCategory;
