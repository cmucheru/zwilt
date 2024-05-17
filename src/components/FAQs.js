import * as React from "react";

function FAQSection() {
  const questions = [
    "I want to work part-time, is that possible?",
    "How long are the average projects?",
    "How does the payment work?",
    "How much can I earn?",
  ];

  const topics = [
    "General",
    "Joining Process",
  ];

  return (
    <>
      <style jsx>{`
        .faq-container {
          background: #f3f3f3;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 1343px;
          padding: 80px 0;
        }
        .background-img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .faq-title {
          color: #202229;
          text-align: center;
          margin: 62px 0;
          font: 700 54px/100% Switzer, -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .faq-title {
            font-size: 40px;
            margin: 40px 0;
          }
        }
        .separator-img {
          width: 100%;
          margin-top: 82px;
          border: 1px solid #d6d6d6;
        }
        @media (max-width: 991px) {
          .separator-img {
            margin-top: 40px;
          }
        }
        .question-container,
        .topic-container {
          display: flex;
          align-items: center;
          margin: 20px 70px;
          color: #202229;
          font-size: 22px;
          line-height: 109%;
        }
        @media (max-width: 991px) {
          .question-container,
          .topic-container {
            flex-wrap: wrap;
          }
        }
        .question-title,
        .topic-title {
          flex-grow: 1;
          margin: auto 0;
          font-family: Switzer, sans-serif;
        }
        .question-separator,
        .topic-separator {
          width: 1px;
          border: 1px solid #d6d6d6;
        }
        .topic-content {
          display: flex;
          flex-grow: 1;
          align-items: center;
          flex-wrap: wrap;
          color: #202229;
          font-size: 22px;
          line-height: 109%;
        }
        .column-container {
          display: flex;
          flex-direction: column;
        }
        .topic-box {
          background-color: #e8e8e8;
          padding: 48px 70px;
          font-weight: 600;
        }
        .topic-box-inner {
          display: flex;
          align-items: center;
          margin: 20px 0;
        }
        .faq-item {
          flex-grow: 1;
        }
        .highlight {
          font-weight: 700;
        }
      `}</style>
      <section className="faq-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/78725fe58177ec508179a2068974a4d37dfd8d9aa29a3a2f1b5382274d1f5e87?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" className="background-img" />
        <h2 className="faq-title">Frequently asked questions</h2>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28771b134483ab11c5f4311d97cadb22975fe87de60c5324d958262600992f7?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" className="separator-img" />
        <div className="question-container">
          <span className="highlight">General</span>
          <img className="question-separator" />
          <span className="faq-item">{questions[0]}</span>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28771b134483ab11c5f4311d97cadb22975fe87de60c5324d958262600992f7?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" className="separator-img" />
        <div className="question-container">{questions[1]}</div>
        <div className="topic-container">
          <div className="column-container">
            <div className="topic-box">
              <span className="highlight">General</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a431cabeb06ed7560f533723a5da0d42d050610f8df894b2acb7e0858f6d8ba?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" className="question-separator" />
            </div>
          </div>
          <div className="column-container">
            <div className="topic-box-inner">
              <span className="highlight">How does the payment works?</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/61c2163a642dad97b66d2a3c805d108b6aee6c064b1fd9fea13d38c4c4c0e241?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" />
              <span className="topic-content">{questions[2]}</span>
            </div>
          </div>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28771b134483ab11c5f4311d97cadb22975fe87de60c5324d958262600992f7?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" className="separator-img" />
        <div className="question-container">{questions[3]}</div>
        {questions.map(question => (
          <React.Fragment key={question}>
            <div className="question-container">{question}</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f28771b134483ab11c5f4311d97cadb22975fe87de60c5324d958262600992f7?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" className="separator-img" />
          </React.Fragment>
        ))}
        {topics.map(topic => (
          <div className="topic-container" key={topic}>
            <div className="column-container">
              <div className="topic-box">
                <span className="highlight">{topic}</span>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a431cabeb06ed7560f533723a5da0d42d050610f8df894b2acb7e0858f6d8ba?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" className="topic-separator" />
              </div>
            </div>
            <div className="column-container">
              <div className="topic-box-inner">
                <span className="highlight">{topics[1]}</span>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a431cabeb06ed7560f533723a5da0d42d050610f8df894b2acb7e0858f6d8ba?apiKey=8df361690d044f688e1acde506ed89e6&" alt="" />
                <span className="topic-content">{questions[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default FAQSection;