import * as React from "react";
import Quote from "../assets/quote-review.svg";
import GrooveIcon from "../assets/groove-logo.png";
import GrooveNameIcon from "../assets/groove-logo-name.svg";
import ReviewNextIcon from "../assets/review-next.svg";
import ReviewPreviousIcon from "../assets/review-previous.svg";
import Jason from "../assets/jason.png";

const TestimonialCard = ({ title, subtitle, image, content, icon1, icon2, jasonImage }) => {
  const titleParts = title.split(" ");
  const jasonIndex = titleParts.indexOf("Jason");
  const atIndex = titleParts.indexOf("at");

  return (
    <section className="testimonial-card">
      <h2 className="testimonial-title">
        {titleParts.slice(0, jasonIndex + 1).map((word, index) => (
          <React.Fragment key={index}>
            {word} <br />
          </React.Fragment>
        ))}
        <img loading="lazy" src={jasonImage} alt="Jason" className="testimonial-inline-image" />
        {titleParts.slice(atIndex).map((word, index) => (
          <React.Fragment key={index + jasonIndex + 1}>
            {word} <br />
          </React.Fragment>
        ))}
      </h2>
      <img loading="lazy" src={image} alt="" className="testimonial-image" />
      <p className="testimonial-content">{content}</p>
      <div className="icons">
        <img loading="lazy" src={icon1} alt="Previous Icon" className="icon" />
        <img loading="lazy" src={icon2} alt="Next Icon" className="icon" />
      </div>
    </section>
  );
}

function PersonalInfo({ name, title, company, location, avatar }) {
  return (
    <section className="personal-info">
      <img loading="lazy" src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <img src={GrooveIcon} alt="icon" className="groove-icon-image"/>

      <div className="info">

        <h3 className="name">{name}</h3>
        <p className="title-name">
          {title} at <span className="company">{company}</span>
        </p>
        <p className="location">{location}</p>
      </div>
      
    </section>
  );
}

function MyComponent() {
  return (
    <><div className="container-wrapper">
            <main className="container">
        <div className="columns">
          <div className="column">
            <TestimonialCard
              title="How it worked for Jason at"
              image={GrooveNameIcon}
              content="Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since."
              icon1={ReviewPreviousIcon}
              icon2={ReviewNextIcon}
              jasonImage={Jason}
            />
          </div>
          <div className="column">
            <PersonalInfo
              name="Jason Makki"
              title="Engineer"
              company="GROOVE"
              location="San Francisco"
              avatar={Quote}
            />
            <p className="additional-content" style={{ color: "white" }}>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since. Zwilt enabled us
              to deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </main>

    </div>
      <style jsx="true">{`
      @media (max-width:991px){
      .container-wrapper{
          margin-top:0;
      }
    }
        .container {
          background-color: #202229;
          padding: 0 21px 80px 78px;
          display: flex;
          flex-direction: column;
          margin-top:200px;
          
        }
        @media (max-width: 991px) {
          .container {
            padding: 90px 20px;
            margin-top:-4px;
          }
        }
        .columns {
          gap: 20px;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 992px) {
          .columns {
            flex-direction: row;
            align-items: flex-start;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .testimonial-card, .personal-info {
          margin-bottom: 20px;
        }
        @media (min-width: 992px) {
          .column {
            width: 50%;
          }
          .testimonial-card, .personal-info {
            margin-bottom: 0;
          }
        }
        .testimonial-card {
          display: flex;
          flex-direction: column;
        }
        .testimonial-title {
          color: #fff;
          font: 700 54px/64px Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .testimonial-title {
            font-size: 40px;
            line-height: 52px;
          }
        }
        .testimonial-inline-image {
          width: 50px; /* Adjust the size as needed */
          vertical-align: middle;
          margin: 0 10px; /* Adjust spacing as needed */
        }
        .testimonial-image {
          aspect-ratio: 3.7;
          object-fit: cover;
          width: 192px;
        }
        .testimonial-content {
          color: #fff;
          font: 400 22px/32px Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .icons {
          display: flex;
          gap: 16px;
          margin-top: 10px;
        }
        .icon {
          aspect-ratio: 1;
          object-fit: cover;
          width: 50px;
        }
        .personal-info {
          display: flex;
          flex-direction: column;
          color: #fff;
        }
        .avatar {
          aspect-ratio: 1.27;
          object-fit: cover;
          width: 221px;
        }
        .info {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
        }
        .name {
          font: 600 34px/1.29 Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .title-name {
          color:#fff;
        }
        .company {
          color: #fff;
        }
        .location {
        }
        .additional-content {
          font: 400 22px/32px Switzer, -apple-system, Roboto, Helvetica, sans-serif;
          color: white;
          margin-top: 20px;
        }

        .groove-icon-image{
          width:100px;
        }
      
      `}</style>
    </>
  );
}

export default MyComponent;
