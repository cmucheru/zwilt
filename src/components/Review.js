import React from "react";
import {ReactComponent as LogoName} from "../assets/groove-logo-name.svg"
import  Logo from "../assets/groove-logo.png"
import {ReactComponent as ReviewNext} from "../assets/review-next.svg";
import {ReactComponent as ReviewPrevious} from "../assets/review-previous.svg";
import {ReactComponent as ReviewQuote} from "../assets/review-quote.svg";
import Jason from "../assets/jason.png"
import "../styles/Review.css";


function Review() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
            
   
    
              <div className="div-4">
                How it worked
                <br />
                for Jason
                <img src={Jason} className="reviewer-icon" style={{height:"56px",width:"56px",borderRadius:"90px"}}/>
                
                 at
                <br />{" "}
              </div>
              <LogoName
                loading="lazy"
                className="img"
              />
              <div className="div-5">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since.
              </div>
              <div className="div-6">
                <ReviewPrevious
                  loading="lazy"
                  className="img-2"
                />
                
                <ReviewNext
                  loading="lazy"
                  className="img-3"
                />
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="div-7">
              <ReviewQuote
                loading="lazy"
                className="img-4"
              />
              <div className="column-2-content"> 
                <div className="div-8">
                  <img
                    loading="lazy"
                    srcSet={Logo}
                    className="img-5"
                  />
                  <div className="div-9">
                    <div className="div-10">Jason Makki</div>
                    <div className="div-11">
                      Engineer at{" "}
                      <span style={{ color: "rgba(255,255,255,1)" }}>GROOVE</span>
                    </div>
                    <div className="div-12">San Francisco</div>
                  </div>
                </div>
                <div className="div-13">
                  Zwilt enabled us to deliver on time and they’ve been heavy
                  hitters in our corner since. Zwilt enabled us to deliver on time
                  and they’ve been heavy hitters in our corner since.Zwilt enabled
                  us to deliver on time and they’ve been heavy hitters.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
