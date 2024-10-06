// src/components/HomePage/RecipientForm.js
import React, { useState } from 'react';
import './RecipientForm.css'; // Import your CSS file for styling

const RecipientForm = ({ recipients, setRecipients }) => {
    const [formData, setFormData] = useState({
        name: '',
        bloodGroup: '',
        location: '',
        contactNumber: '',
        urgency: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipients([...recipients, formData]);
        setSuccessMessage("Your request has been submitted successfully!");

        // Reset the form
        setFormData({
            name: '',
            bloodGroup: '',
            location: '',
            contactNumber: '',
            urgency: '',
        });
    };

    return (
        <div className="recipient-form">
            <h2>Request Blood</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                
                <label htmlFor="bloodGroup">Blood Group:</label>
                <input type="text" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
                
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
                
                <label htmlFor="contactNumber">Contact Number:</label>
                <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                
                <label htmlFor="urgency">Urgency:</label>
                <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} required>
                    <option value="">Select Urgency</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default RecipientForm;
