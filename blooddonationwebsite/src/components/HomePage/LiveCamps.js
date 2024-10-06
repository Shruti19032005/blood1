import React, { useState } from 'react';
import './LiveCamps.css'; // Import the CSS file for styling

const LiveCamps = ({ camps, setCamps }) => {
    const [formData, setFormData] = useState({
        campName: '',
        location: '',
        date: '',
        startTime: '',
        endTime: '',
        expectedTurnout: '',
        contactPerson: '',
        contactNumber: '',
        email: '',
        description: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you would typically send the data to your server
        setCamps([...camps, formData]);
        setSuccessMessage("Camp registered successfully!");
        setIsModalOpen(false); // Close the modal

        // Reset the form
        setFormData({
            campName: '',
            location: '',
            date: '',
            startTime: '',
            endTime: '',
            expectedTurnout: '',
            contactPerson: '',
            contactNumber: '',
            email: '',
            description: '',
        });
    };

    return (
        <div className="live-camps">
            <h1>Live Blood Donation Camps</h1>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {camps.length > 0 ? (
                <div className="camp-container">
                    {camps.map((camp, index) => (
                        <div key={index} className="camp-card">
                            <h2>{camp.campName}</h2>
                            <ul>
                                <li><strong>Location:</strong> {camp.location}</li>
                                <li><strong>Date:</strong> {camp.date}</li>
                                <li><strong>Start Time:</strong> {camp.startTime}</li>
                                <li><strong>End Time:</strong> {camp.endTime}</li>
                                <li><strong>Expected Turnout:</strong> {camp.expectedTurnout}</li>
                                <li><strong>Contact Person:</strong> {camp.contactPerson}</li>
                                <li><strong>Contact Number:</strong> {camp.contactNumber}</li>
                                <li><strong>Email:</strong> {camp.email}</li>
                                <li><strong>Description:</strong> {camp.description}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No camps registered yet.</p>
            )}
            <button onClick={() => setIsModalOpen(true)} className="register-button">Register Your Camp</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Register Your Blood Donation Camp</h2>
                        <div className="quote">"Together we can save lives!"</div> {/* Add your quote here */}
                        <form onSubmit={handleSubmit} className="register-form">
                            <label htmlFor="camp-name">Camp Name:</label>
                            <input 
                                type="text" 
                                id="camp-name" 
                                name="campName" 
                                value={formData.campName} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="location">Location:</label>
                            <input 
                                type="text" 
                                id="location" 
                                name="location" 
                                value={formData.location} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="date">Date:</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date" 
                                value={formData.date} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="start-time">Start Time:</label>
                            <input 
                                type="time" 
                                id="start-time" 
                                name="startTime" 
                                value={formData.startTime} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="end-time">End Time:</label>
                            <input 
                                type="time" 
                                id="end-time" 
                                name="endTime" 
                                value={formData.endTime} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="expected-turnout">Expected Turnout:</label>
                            <input 
                                type="number" 
                                id="expected-turnout" 
                                name="expectedTurnout" 
                                value={formData.expectedTurnout} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="contact-person">Contact Person:</label>
                            <input 
                                type="text" 
                                id="contact-person" 
                                name="contactPerson" 
                                value={formData.contactPerson} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="contact-number">Contact Number:</label>
                            <input 
                                type="tel" 
                                id="contact-number" 
                                name="contactNumber" 
                                value={formData.contactNumber} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="email">Email Address:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="description">Description:</label>
                            <textarea 
                                id="description" 
                                name="description" 
                                rows="4" 
                                value={formData.description} 
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LiveCamps;
