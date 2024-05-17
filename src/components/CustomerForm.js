import React, { useState } from 'react';
import '../styles/CustomerForm.css';
import formImage from '../assets/form-open-btn.png';
import formSubmit from "../assets/form-submit-btn.png";


function Component() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        // Hide form after submission
        setShowForm(false);
    };

    return (
        <div style={{ backgroundColor: '#525AA0', padding: '20px', color: 'white', textAlign: 'center' }}>
            <p>Need a job done, and done well? Get started</p>
            {!showForm && // Render button only if showForm is false
                <div style={{ marginTop: '20px' }}>
                    <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', outline: 'none' }} onClick={() => setShowForm(true)}
                    className='form-btn'
                    >
                      
                        <img src={formImage} alt="Button Image" style={{ width: '100px', height: '100px' }} />
                    </button>
                </div>
            }
            {showForm &&
                <div style={{ backgroundColor: 'rgba(82, 90, 160, 0.8)', padding: '20px', marginTop: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange}  className='input-field'/>
                        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange}  className='input-field'/>
                        <input type="text" name="message" placeholder="Enter your message" value={formData.message} onChange={handleInputChange}  className='input-field' />
                        <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        className='submit-btn'
                        >
                            <img src={formSubmit} alt="Submit Image" style={{ width: '100px', height: '50px' }} />
                        </button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Component;
