import React from "react";
import "../styles/ProfilesSummary.css";
//import ExploreIcon from "../assets/explore-ico.svg";

function ExploreMore() {
  return (
    <div className="explore-more">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe9b2babe1122319154f1894defc309686cbeb5720228fa409db4826357075c3?apiKey=3bdc093048a04f4c95c19e52c84dae1a&"
        className="explore-icon"
        alt="Explore icon"
      />
      <span className="explore-text">Explore More</span>
    </div>
  );
}

function ExploreCount() {
  return (
    <div className="explore-count">
      <span className="count-bold">30 more</span>{" "}
      <span className="count-regular">to explore</span>
    </div>
  );
}

function ProfilesSummary() {
  return (
    <div className="profiles-summary">
      <div className="explore-container">
        <ExploreMore />
        <ExploreCount  />
      </div>
    </div>
  );
}

export default ProfilesSummary;
