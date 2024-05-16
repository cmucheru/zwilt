import React, { useState } from 'react';
import '../styles/CustomerForm.css';
import formImage from '../assets/form-open-btn.png';
import formSubmit from "../assets/form-submit-btn.png";

const CustomerForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="customer-form-container" style={{ backgroundColor: '#525AA0', padding: '20px', width: '300px', transform: 'skew(-20deg)', margin: '20px' }}>
      <h1 className="customer-text">Need a job done, and done well? Get started</h1>
      <button className="form-button" onClick={handleButtonClick}>
        <img src={formImage} alt="Form"/>  
      </button>
      {showForm && (
        <form className="contact-form" style={{ marginTop: '20px' }}>
          <input type="text" placeholder="Name" style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Email" style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <textarea placeholder="Message" style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#525AA0', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            <img src={formSubmit} alt="submit-btn" />
          </button>
        </form>
      )}
    </div>
  );
};

export default CustomerForm;
