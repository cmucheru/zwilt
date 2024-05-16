import React from "react";
import '../styles/Headline.css';
import Animation from  "../assets/animate.gif";


const HomeHeadline = () => {
  return (
    <section className="section">
      <h1 className="title">
        Finding the right fit 
        <img src={Animation} alt="animation-gif" className="animation"/>
        has never been easier.
      </h1>
    </section>
  );
}

export default HomeHeadline;
