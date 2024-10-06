// src/components/RecipientForm.js
import React, { useState } from 'react';

const RecipientForm = ({ recipients, setRecipients }) => {
    const [formData, setFormData] = useState({
        name: '',
        bloodGroup: '',
        location: '',
        contactNumber: '',
        urgency: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipients([...recipients, formData]);
        setFormData({ name: '', bloodGroup: '', location: '', contactNumber: '', urgency: '' }); // Reset form
        alert('Registration successful!'); // Show success message
    };

    return (
        <div className="recipient-form">
            <h2>Request Blood</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="Blood Group" required />
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
                <input type="text" name="urgency" value={formData.urgency} onChange={handleChange} placeholder="Urgency Level" required />
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default RecipientForm;
