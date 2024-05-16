import React from "react";
import "../styles/JobCategory.css";

const JobItem = ({ title }) => (
  <div className="job-item">{title}</div>
);

const jobs = [
  "Python Developer",
  "Shopify Developer", 
  "MERN Stack Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Front End Developer",
  "Explore More"
];

function JobCategory() {
  return (
    <section className="jobs-section">
      <div className="jobs-container">
        <div className="column">
          <div className="jobs-list">
            {jobs.slice(0, 4).map((job, index) => (
              <JobItem key={index} title={job} />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="jobs-featured">
            <div className="jobs-categories">
              <div className="category-item active">IT & Development</div>
              <div className="category-item">Design and Creative</div>
            </div>
            {jobs.slice(4, 8).map((job, index) => (
              <JobItem key={index} title={job} />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="jobs-list">
            {jobs.slice(8).map((job, index) => (
              <JobItem key={index} title={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobCategory;
