import React from "react";
import "../styles/ProfilesSummaryContent.css";
import ITDevelopmentSection from "./ITDevelopmentSection";
import DesignCreativeSection from "./DesignCreativeSection";
import SkillIcon from "../assets/skills-ico.svg";
import ProfileIcon from "../assets/Profiles-ico.svg";
import CategoryIcon from "../assets/sub-categories-ico.svg";
/**
 * 
 *TODO:
 `45 Sub-categories has a button, where is it coming from ?
 */
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
            <SkillItem imgSrc={SkillIcon} skillCount="989 Skills" className='stats-item'/>
            <ProfileItem imgSrc={ProfileIcon} profileCount="1011 Profiles" className='stats-item'/>
            <CategoryItem
              imgSrc={CategoryIcon}
              categoryCount="45 Sub-Categories"
              className='stats-item'
              
            />
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
            <SkillItem imgSrc={SkillIcon} skillCount="989 Skills" className='stats-item'/>
            <ProfileItem imgSrc={ProfileIcon} profileCount="1011 Profiles" className='stats-item'/>
            <CategoryItem
              imgSrc={CategoryIcon}
              categoryCount="45 Sub-Categories"
              className='stats-item'
            />
          </div>
        </div>
        <div className="design-section">
          {" "}
          <DesignCreativeSection />
        </div>
      </div>
    </div>
  );
};

export default ProfileSummaryContent;
