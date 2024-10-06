// src/components/HomePage/RegisterCamp.js
import React, { useState } from 'react';
import axios from 'axios';
import './RegisterCamp.css'; // Import the CSS file for styling

const RegisterCamp = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/camps', formData); // Update the URL as per your backend
            onRegister(response.data); // Call the onRegister callback to update the camps list
            setFormData({ name: '', date: '', location: '', description: '' }); // Reset form
        } catch (error) {
            console.error("Error registering camp:", error);
        }
    };

    return (
        <div className="register-camp">
            <h2>Register a Live Camp</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Camp Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register Camp</button>
            </form>
        </div>
    );
};

export default RegisterCamp;
