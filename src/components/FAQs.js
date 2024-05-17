import * as React from "react";
import FooterLine from "../assets/footer-line.svg";
import FaqDivider from "../assets/FaqDivider.svg";
import FaqSep from "../assets/FaqSep.svg";
import FaqBg from "../assets/FaqBg.svg";

const faqData = [
  {
    question: "I want to work part-time, is that possible",
    category: "General",
  },
  {
    question: "How long are the average projects?",
    category: "General",
  },
  {
    question: "How does the payment works?",
    category: "Joining Process",
  },
  {
    question: "How much can I earn?",
    category: "Joining Process",
  },
];

const FaqItem = ({ question, category }) => (
  <>
    <div className="faq-item">
      <div className="faq-category">{category}</div>
      <img loading="lazy" src={FaqSep} className="faq-separator" alt="" />
      <div className="faq-question">{question}</div>
    </div>
    <img loading="lazy" src={FaqDivider} className="faq-divider" alt="" />
  </>
);

const FaqSection = () => (
  <section className="faq-section">
    <header>
      <h2 className="faq-title">Frequently asked questions</h2>
    </header>
    <img loading="lazy" src={FooterLine} className="faq-divider" alt="" />
    <div className="faq-list">
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} category={faq.category} />
      ))}
    </div>
  </section>
);

const FAQs = () => (
  <div className="faq-container">
    <img loading="lazy" src={FaqBg} className="faq-background" alt="" />
    <FaqSection />

    <style jsx="true">{`
      .faq-container {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 1343px;
        padding: 80px 0;
        background-color: #f3f3f3;
        overflow: hidden;
      }

      .faq-background {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .faq-title {
        position: relative;
        margin: 62px auto 0;
        color: #202229;
        text-align: center;
        font: 700 54px/100% Switzer, -apple-system, Roboto, Helvetica,
          sans-serif;
      }

      @media (max-width: 991px) {
        .faq-title {
          max-width: 100%;
          margin-top: 40px;
          font-size: 40px;
        }
      }

      .faq-divider {
        width: 100%;
        margin-top: 82px;
        border: 1px solid #d6d6d6;
      }

      @media (max-width: 991px) {
        .faq-divider {
          max-width: 100%;
          margin-top: 40px;
        }
      }

      .faq-list {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        width: 100%; /* Changed width to 100% */
        max-width: 957px; /* Added max-width */
        margin: 0 auto; /* Center align */
        gap: 20px;
        font-size: 22px;
        color: #202229;
        line-height: 109%;
      }

      @media (max-width: 991px) {
        .faq-list {
          flex-wrap: wrap;
        }
      }

      .faq-item {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        font-weight: 600;
        white-space: nowrap;
      }

      @media (max-width: 991px) {
        .faq-item {
          flex-direction: column; /* Change to column layout on smaller screens */
        }
      }

      .faq-category {
        font-family: Switzer, sans-serif;
        margin: auto 0;
      }

      .faq-separator {
        width: 1px;
        border: 1px solid #d6d6d6;
        display:none;
      }

      .faq-question {
        white-space:normal;
        font-family: Switzer, sans-serif;
        font-weight: 400;
        flex-grow: 1;
        margin: auto 0;
      }

      .faq-section {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-bottom: 43px;
        background-color: #e8e8e8;
        font-size: 22px;
        color: #202229;
        font-weight: 600;
        line-height: 109%;
      }

      @media (max-width: 991px) {
        .faq-section {
          max-width: 100%;
          margin-top: 40px;
        }
      }
    `}</style>
  </div>
);

export default FAQs;
