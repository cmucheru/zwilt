import React, { useState } from "react";
import formImage from "../assets/form-open-btn.png";
import formSubmit from "../assets/form-submit-btn.png";

function Component() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Hide form after submission
    setShowForm(false);
  };

  return (
    <div className="customer-form-container">
      <p className="customer-text">
        Need a job done, and done well? Get started
      </p>
      {!showForm && ( // Render button only if showForm is false
        <div style={{ marginTop: "20px" }}>
          <button className="form-button" onClick={() => setShowForm(true)}>
            <img src={formImage} alt="Btn" className="form-btn-img" />
          </button>
        </div>
      )}
      {showForm && (
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              className="input-field"
            />
            <button type="submit" className="submit-btn">
              <img src={formSubmit} alt="Submit" className="submit-btn-img" />
            </button>
          </form>
        </div>
      )}
      <style jsx="true">{`
        .customer-form-container {
          background-color: #525aa0;
          padding: 20px;
          width: 90%;
          margin: 20px auto;
          text-align: center;
        }

        .customer-text {
          color: #fff;
          max-width: 646px;
          margin: 0 auto;
          font: 600 54px/64px Switzer, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media screen and (max-width:991px){
            .customer-text{
                font: 600 24px/34px Switzer, -apple-system, Roboto, Helvetica,
            sans-serif;
            }
        }

        .form-button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .contact-form {
          margin-top: 20px;
        }

        .contact-form input[type="text"],
        .contact-form input[type="email"],
        .contact-form textarea {
          width: 100%;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          background-color: #525aa0;
          color: white;
          border: none;
          outline: none;
        }

        .contact-form textarea {
          height: 100px;
        }

        .contact-form button[type="submit"] {
          width: 100%;
          padding: 10px;
          background-color: #525aa0;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .form-btn-img {
          border-radius: 40px;
        }
        @media screen and (max-width:991px){
        
            .form-btn-img{
                width:50px; 
            }
        }

        .submit-btn-img {
          border-radius: 30px;
        }
        // media queries 991px
        @media screen and (max-width:991px){
            .submit-btn-img{
                width:20px; /* Adjust the width as needed */
            }
        }
        
      `}</style>
    </div>
  );
}

export default Component;
