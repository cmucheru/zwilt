import React from "react";
import "../styles/Profile.css";
import ProfileSummaryContent from "./ProfilesSummaryContent";
import ProfileExplore from "./ProfileExplore";
//TODO: `HEADLINE` goes out of bg 

function Profile() {
  return (
      <div className="background">
        <div className="profile-contents">
        <h1>&nbsp;</h1>

        
          <h1 className="profile-headline" >Your one stop market place for finding the talent your business</h1>
      
      <ProfileSummaryContent/>
      <ProfileExplore/>
        </div>

   

      </div>
  );
}

export default Profile;
