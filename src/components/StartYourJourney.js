import React from 'react';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import '../styles/StartYourJourney.css'; 
import JoinIcon from "../assets/join-now-icon.svg";

function Card({ numberIcon, headline, description, imageUrl }) {
    // Define a variable to hold the color based on the number icon value
    let numberColor = '';
    switch(numberIcon) {
        case '1':
            numberColor = 'purple'; // Set color to purple for number 1
            break;
        case '2':
            numberColor = 'gold'; // Set color to gold for number 2
            break;
        case '3':
            numberColor = 'silver'; // Set color to silver for number 3
            break;
        default:
            numberColor = 'black'; // Default color
    }

    // Define the style object for the number icon based on the color
    const numberStyle = {
        fontSize: '30px',
        color: numberColor // Apply the determined color
    };

    return (
        <div className="card-container">
            <div className="left-card">
                <div className="number-icon" style={numberStyle}>{numberIcon}</div>
                <h3 className="headline">{headline}</h3>
                <p className="description">{description}</p>
                <button className="button">
                    <img src={JoinIcon} alt="Join Icon" />
                    <p>Join Now</p>
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
