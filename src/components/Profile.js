import React from "react";
import "../styles/Profile.css";
import ProfileSummaryContent from "./ProfilesSummaryContent";
import ProfileExplore from "./ProfileExplore";

function Profile() {
  return (
    <section className="profile-summary-headline">
      <div className="background-image-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae13478dd82ce53c96b1664be1a102e7840bf7b9023f02d1cf1772bd9c41c5b?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&"
          alt=""
          className="background-image"
        />

        <div className="content-inside-background">
          <h1 className="profile-headline">Your one stop market place for finding the talent yiur business</h1>
          <ProfileSummaryContent />
          <ProfileExplore/>
        </div>
      </div>
    </section>
  );
}

export default Profile;
