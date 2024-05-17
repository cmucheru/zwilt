import React from "react";
import "../styles/ProfilesExplore.css";
import ExploreIcon from "../assets/explore-more-icon.svg";

/**
 *  TODO:
 * - Make the explore a dynamic button
 * 
 */
function ExploreMore() {
  return (
    <button className="explore-more">
      <img
        loading="lazy"
        src = {ExploreIcon}
        className="explore-icon"
        alt="Explore icon"
      />
      <span className="explore-text">Explore More</span>
    </button>
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
