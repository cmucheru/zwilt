import * as React from "react";

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
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a431cabeb06ed7560f533723a5da0d42d050610f8df894b2acb7e0858f6d8ba?apiKey=8df361690d044f688e1acde506ed89e6&"
        className="faq-separator"
        alt=""
      />
      <div className="faq-question">{question}</div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28771b134483ab11c5f4311d97cadb22975fe87de60c5324d958262600992f7?apiKey=8df361690d044f688e1acde506ed89e6&"
      className="faq-divider"
      alt=""
    />
  </>
);

const FaqSection = () => (
  <section className="faq-section">
    <header>
      <h2 className="faq-title">Frequently asked questions</h2>
    </header>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28771b134483ab11c5f4311d97cadb22975fe87de60c5324d958262600992f7?apiKey=8df361690d044f688e1acde506ed89e6&"
      className="faq-divider"
      alt=""
    />
    <div className="faq-list">
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} category={faq.category} />
      ))}
    </div>
  </section>
);

const FAQs = () => (
  <>
    <div className="faq-container">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/78725fe58177ec508179a2068974a4d37dfd8d9aa29a3a2f1b5382274d1f5e87?apiKey=8df361690d044f688e1acde506ed89e6&"
        className="faq-background"
        alt=""
      />
      <FaqSection />
    </div>

    <style jsx>{`
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
        font: 700 54px/100% Switzer, -apple-system, Roboto, Helvetica, sans-serif;
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
        width: 957px;
        max-width: 100%;
        margin-left: 70px;
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
          white-space: initial;
        }
      }

      .faq-category {
        font-family: Switzer, sans-serif;
        margin: auto 0;
      }

      .faq-separator {
        width: 1px;
        border: 1px solid #d6d6d6;
      }

      .faq-question {
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
  </>
);

export default FAQs;