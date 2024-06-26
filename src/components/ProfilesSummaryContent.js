import React from "react";
import ITDevelopmentSection from "./ITDevelopmentSection";
import DesignCreativeSection from "./DesignCreativeSection";
import SkillIcon from "../assets/skills-ico.svg";
import ProfileIcon from "../assets/Profiles-ico.svg";
import CategoryIcon from "../assets/sub-categories-ico.svg";

const SkillItem = ({ imgSrc, skillCount }) => (
  <div className="skill-item">
    <img src={imgSrc} alt="Skill icon" className="skill-icon" />
    <div className="skill-count">{skillCount}</div>
  </div>
);

const ProfileItem = ({ imgSrc, profileCount }) => (
  <div className="profile-item">
    <img src={imgSrc} alt="Profile icon" className="profile-icon" />
    <div className="profile-count">{profileCount}</div>
  </div>
);

const CategoryItem = ({ imgSrc, categoryCount }) => (
  <div className="sub-category-item">
    <img src={imgSrc} alt="Category icon" className="category-icon" />
    <div className="category-count">{categoryCount}</div>
  </div>
);

const ProfileSummaryContent = () => {
  return (
    <div className="content-wrapper">
      <div className="top-row">
        <div className="dev-section">
          <p className="section-description">
            Find Dev and IT professionals to scale your business.
          </p>
          <div className="stats-container">
            <SkillItem imgSrc={SkillIcon} skillCount="989 Skills" className="stats-item" />
            <ProfileItem imgSrc={ProfileIcon} profileCount="1011 Profiles" className="stats-item" />
            <CategoryItem imgSrc={CategoryIcon} categoryCount="45 Sub-Categories" className="stats-item" />
          </div>
        </div>
        <div className="IT-dev-section">
          <ITDevelopmentSection />
        </div>
      </div>
      <div className="top-row">
        <div className="dev-section">
          <p className="section-description">
            Explore Creative individuals with a keen eye for detail.
          </p>
          <div className="stats-container">
            <SkillItem imgSrc={SkillIcon} skillCount="989 Skills" className="stats-item" />
            <ProfileItem imgSrc={ProfileIcon} profileCount="1011 Profiles" className="stats-item" />
            <CategoryItem imgSrc={CategoryIcon} categoryCount="45 Sub-Categories" className="stats-item" />
          </div>
        </div>
        <div className="design-section">
          {" "}
          <DesignCreativeSection/>
        </div>
      </div>

      <style jsx="true">{`
     


.main-container {
  margin: 89px 0;
}

@media (max-width: 991px) {
  .main-container {
    margin: 40px 0;
  }
  .stats-item{
    margin:0;
  }
  .skill-item,
  .profile-item,
  .sub-category-item {
    margin-left: 0; 
    margin-right: 0; 
  }
  .skill-count,
  .profile-count,
  .category-count {
    margin-top: 4px; /* Adjust the margin between the icon and count number */
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.top-row,
.bottom-row {
  display: flex;
}
@media screen and (max-width:991px){
  .top-row,
.bottom-row {
  display: block;
}
}

.dev-section,
.IT-dev-section {
  flex: 1;
}
@media screen and (max-width){
  .dev-section{
    display:inline-flex;
  }
}

.design-section {
  flex: 1;
}

.top-row {
  flex-direction: row;
}

.bottom-row {
  flex-direction: row-reverse;
}


@media (max-width: 991px) {
  .content-wrapper {
    flex-direction: column;
    gap: 0;
  }
}

.developer-section {
  width: 39%;
}

@media (max-width: 991px) {
  .developer-section {
    width: 100%;
  }
}

.section-header {
  margin-bottom: 27px;
}

@media (max-width: 991px) {
  .section-header {
    margin-top: 40px;
  }
}

.section-title {
  font: 500 24px/34px Switzer Variable, -apple-system, Roboto, Helvetica, sans-serif;
  color: #202229;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  font-size: 16px;
  color: rgba(32, 34, 41, 0.8);
  line-height: 200%;
}

@media (max-width: 991px) {
  .stats-container {
    padding-right: 20px;
    flex-direction: column;
  }
}

.skill-item,
.profile-item,
.sub-category-item {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  background-color: transparent;

}

.skill-icon,
.profile-icon {
  width: 16px;
  fill: #a285d0;
}

.category-icon {
  width: 18px;
  fill: #a285d0;
}

.skill-count,
.profile-count,
.category-count {
  font-family: Switzer, sans-serif;
}

.section-description {
  margin-top: 100px;
  font: 500 24px/34px Switzer Variable, -apple-system, Roboto, Helvetica, sans-serif;
}

@media (max-width: 991px) {
  .section-description {
    margin-top: 40px;
  }

  .category-section {
    width: 61%;
  }
  
  @media (max-width: 991px) {
    .category-section {
      width: 100%;
      margin-top: 40px;
    }
  }
  
  .category-card {
    background: #fff;
    border-radius: 7px;
    padding: 24px 27px;
  }
  
  @media (max-width: 991px) {
    .category-card {
      padding: 0 20px;
    }
  }
  
  .card-header {
    text-align: center;
  }
  
  .card-title {
    font: 500 16px/149% Switzer, -apple-system, Roboto, Helvetica, sans-serif;
    color: #202229;
  }
  
  .card-content {
    margin-top: 17px;
  }
  
  .developer-list,
  .designer-list {
    display: flex;
    gap: 20px;
  }
  
  @media (max-width: 991px) {
    .developer-list,
    .designer-list {
      flex-direction: column;
      gap: 0;
    }
  }
  
  .developer-item,
  .designer-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 14px;
    color: #202229;
    font-weight: 600;
    line-height: 18px;
  }
  
  @media (max-width: 991px) {
    .developer-item,
    .designer-item {
      width: 100%;
      margin-top: 20px;
    }
  }
  
  .developer-icon,
  .designer-icon {
    width: 96px;
  }
  
  .developer-title,
  .designer-title {
    margin-top: 16px;
    font-family: Switzer, sans-serif;
  }
  
  .extra-developer {
    width: 32%;
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: 991px) {
    .extra-developer {
      width: 100%;
      margin-top: 40px;
    }
  }
  
  .extra-developer-icon {
    width: 96px;
  }
  
  .extra-developer-icon:last-child {
    fill: #f6f6f6;
    stroke: #f6f6f6;
    stroke-width: 2px;
    border: 2px solid rgba(246, 246, 246, 1);
  }
  
  .extra-developer-title {
    margin: 16px 0 0 15px;
    font: 600 14px/18px Switzer, -apple-system, Roboto, Helvetica, sans-serif;
    color: #202229;
    text-align: center;
  }
  
  @media (max-width: 991px) {
    .extra-developer-title {
      margin-left: 10px;
    }
  }
}      

.stats-item{
margin:2px 2px;
background-color: transparent;
}





`}</style>
    </div>
  );
};

export default ProfileSummaryContent;
