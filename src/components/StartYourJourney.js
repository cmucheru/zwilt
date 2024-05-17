import React from 'react';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import '../styles/StartYourJourney.css'; 
import JoinIcon from "../assets/join-now-icon.svg";

function Card({ numberIcon, headline, description, imageUrl }) {
    return (
        <div className="card-container">
            <div className="left-card">
                <div className="number-icon" style={{ fontSize: "30px" }}>{numberIcon}</div>
                <h3 className="headline">{headline}</h3>
                <p className="description">{description}</p>
                <button className="button">
                    <img src={JoinIcon} alt="Join Icon" />
                </button>
            </div>
            <div className="right-card">
                <img src={imageUrl} alt="Car" />
            </div>
        </div>
    );
}

function ThreeCards() {
    return (
        <div>
            <Card
                numberIcon="1"
                headline="Find Your Next Star Performer"
                description="Text 1 - A brief description goes here."
                imageUrl={img1}
            />
            <Card
                numberIcon="2"
                headline="Evaluate to Your Heart's Content"
                description="Text 2 - A brief description goes here."
                imageUrl={img2}
            />
            <Card
                numberIcon="3"
                headline="Start Building Your Team"
                description="Text 3 - A brief description goes here."
                imageUrl={img3}
            />
        </div>
    );
}

export default ThreeCards;
