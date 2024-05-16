import * as React from "react";

const cardData1 = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f9c2c45c3acbc89771bd69e2bfbdc7950aaf8b1882b1a1dd05f095fc417b521?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    altText: "Profile image of Allison Parker",
    name: "Allison Parker",
    title: "Ruby Developer",
    location: "Redwood City, California",
    experience: "7 years experience",
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/05b651f2eeb0bc76c2fd77d041f43c7972cdec4fefea25ec48fff859e120ce44?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    altLogo: "Company logo"
  },
];
const cardData2 = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9250ed24717a2d84cce897b8b9ce9482e1c5f5b86f0b8a40ebed640aa7de64e?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&",
    altText: "Zwilt Logo",
    heading: "Start building your team.",
  },
];

function Card1({ imgSrc, altText, name, title, location, experience, logoSrc, altLogo }) {
  return (
    <div className="profile-card">
      <img className="profile-image" src={imgSrc} alt={altText} />
      <div className="profile-details">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-title">{title}</p>
        <p className="profile-location-experience">
          {location}<br />{experience}
        </p>
        <img className="company-logo" src={logoSrc} alt={altLogo} />
      </div>
    </div>
  );
}

function Card2({ imgSrc, altText, heading }) {
  return (
 
      <div className="card">
        <img className="card-image" src={imgSrc} alt={altText} />
        <h3 className="card-heading">{heading}</h3>
     
    </div>
  );
}


function MyComponent() {
  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
        }
        .header-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        .header-text {
          max-width: 938px;
          font-size: 54px;
          color: #202229;
          font-weight: 700;
          line-height: 119%;
        }
        .header-img {
          max-width: 100%;
          width: 466px;
          aspect-ratio: 0.68;
        }
        .header-subtext {
          font-family: Switzer, sans-serif;
          margin: -402px 0 413px;
        }
        @media (max-width: 991px) {
          .header-text {
            font-size: 40px;
          }
          .header-subtext {
            max-width: 100%;
            font-size: 40px;
            margin: -200px 0 40px;
          }
        }
        .step-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 100%;
          width: 482px;
        }
        .step-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 19px;
          font-size: 34px;
          color: #202229;
          font-weight: 600;
        }
        .step-img {
          width: 51px;
          aspect-ratio: 0.61;
          border: 5px solid rgba(237, 239, 255, 1);
        }
        .step-description {
          font-family: Switzer, sans-serif;
          margin: 26px 0 0 75px;
        }
        .step-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: rgba(32, 34, 41, 0.8);
          font: 16px/24px Switzer, sans-serif;
        }
        .step-link {
          display: flex;
          gap: 8px;
          font-size: 15px;
          color: #202229;
          font-weight: 500;
          line-height: 82%;
        }
        .step-link-img {
          width: 50px;
          aspect-ratio: 1;
        }
        .profile-card{
          display:flex;
          flex-direction:column;
          background-color:#d8d2ff;
          padding:18px 80px 18px 15px;
          margin:20px 0;
          border-radius:21px;
          box-shadow: 0px 29.257px 58.514px 0px rgba(0, 0, 0, 0.05);
        }
        .profile-image,
        .profile-details {
          flex: 1;
        }
        .profile-image {
          width: 100%;
          border-radius: 50%;
          box-shadow: 0px 14.629px 29.257px 0px rgba(0, 0, 0, 0.1);
        }
        .profile-name {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.44px;
        }
        .profile-title {
          font-size: 18px;
          margin-top: 36px;
        }
        .profile-location-experience {
          font-size: 12px;
          margin-top: 20px;
        }
        .company-logo {
          width:70px;
          margin-top: 37px;
        }
        .card{
          
          display:flex;
          flex-direction:column;
          background-color:#c8efc4;
          padding:18px 80px 18px 15px;
          margin:20px 0;
          border-radius:21px;
          align-items:center;
          box-shadow: 0px 29.257px 58.514px 0px rgba(0, 0, 0, 0.05);
        }
        .card-image{
          width:100%;
          max-width: 138px;
        }

        @media (max-width: 991px) {
          .profile-card {
            padding-right: 20px;
            margin-top: 40px;
          }
          .profile-col {
            width: 100%;
          }
          .profile-img {
            margin-top: 40px;
          }
        }
        
      `}
      </style>
      <section className="container">
        <section className="header-main">
          <img className="header-img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2430c7aebe63b77e8fc5cc652f22456ea8debf8b6f5b8db7f12320901e5633a5?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&" alt="Journey start image" />
          <h1 className="header-text">Start your journey today.</h1>
          <h2 className="header-subtext">Find your next star performer.</h2>
        </section>
      
      
        <section className="step-card">
          <div className="step-header">
            <img className="step-img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e3517444063c4a451fb8c3c20191294201787d88bb6ccab2748d2cafcfcf8e8?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&" alt="Step 1 icon" />
            <h2 className="step-description">Explore the vast Zwilt marketplace to find the candidate that meets your needs.</h2>
          </div>
          <div className="step-content">
            <h3 className="step-description">Evaluate to your heart’s content.</h3>
            <p>Assess the candidate through work history, transparent tests and video interviews.</p>
            <div className="step-link">
              <img className="step-link-img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81fd584d7a19808a38a66a7e028aa1b969ec37687837510c12fee66b808631fd?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&" alt="Join Now icon" />
              <a href="#">Join Now</a>
            </div>
          </div>
          <div className="step-content">
            <div className="step-link">
              <img className="step-link-img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3960f63e4d547f370ab0f9ef6ba6c2ca8056f12a0493e21b62993686abe2aa5?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&" alt="Browse more icon" />
              <a href="#">Browse More</a>
            </div>
          </div>
        </section>
   
        <section className="step-card">
          <div className="step-header">
            <img className="step-img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3960f63e4d547f370ab0f9ef6ba6c2ca8056f12a0493e21b62993686abe2aa5?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&" alt="Step 2 icon" />
            <h2 className="step-description">Start building your team.</h2>
          </div>
          <div className="step-content">
            <h3 className="step-description">Onboard your candidate right away and start creating the next big thing.</h3>
            <div className="step-link">
              <img className="step-link-img" src="https://cdn.builder.io/api/v1/image/assets/TEMP/649fa36af9773addc4881de5ecfd42ba77a38f3fd7908b052e7507c7341da2f5?apiKey=f55e1348fc3e4b59b815fa07e6f435fa&" alt="Join Now icon" />
             <a href="#">Join Now</a>
            </div>
          </div>

        
        </section>
      
        <section>
        {cardData1.map((card, index) => (
          <Card1
            key={index}
            imgSrc={card.imgSrc}
            altText={card.altText}
            name={card.name}
            title={card.title}
            location={card.location}
            experience={card.experience}
            logoSrc={card.logoSrc}
            altLogo={card.altLogo}
          />
          ))}
  </section>
  <section>
        {cardData2.map((card, index) => (
          <Card2
            key={index}
            imgSrc={card.imgSrc}
            altText={card.altText}
            heading={card.heading}
           
          />
          ))}
  </section>
       
      </section>
    </>
  );
}

export default MyComponent;