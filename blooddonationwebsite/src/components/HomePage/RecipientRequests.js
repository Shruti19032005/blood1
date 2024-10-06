import React, { useState } from 'react';
import './RecipientRequests.css'; // Import the CSS file for styling

const RecipientRequests = ({ requests, setRequests }) => {
    const [formData, setFormData] = useState({
        name: '',
        bloodType: '',
        from: '',
        till: '',
        contact: '',
        location: '',
        urgency: '',
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
        setRequests([...requests, formData]);
        setSuccessMessage("Request registered successfully!"); // Set success message
        setIsModalOpen(false);

        setFormData({
            name: '',
            bloodType: '',
            from: '',
            till: '',
            contact: '',
            location: '',
            urgency: '',
        });
    };

    return (
        <div className="recipient-requests">
            <h1>Need Blood? Let Us Know!</h1>
            <h2>Emergency Blood Requests</h2>
            <blockquote className="quote">
                "The best way to find yourself is to lose yourself in the service of others."
            </blockquote>
            
            {/* Display success message on the homepage */}
            {successMessage && <div className="success-message">{successMessage}</div>}
            
            {requests.length > 0 ? (
                <div className="requests-container">
                    {requests.map((request, index) => (
                        <div key={index} className="request-card">
                            <h3 style={{ fontSize: '24px', color: 'white' }}>{request.bloodType}</h3>
                            <ul>
                                <li><strong>Name:</strong> {request.name}</li>
                                <li><strong>From:</strong> {request.from}</li>
                                <li><strong>Till:</strong> {request.till}</li>
                                <li><strong>Contact:</strong> {request.contact}</li>
                                <li><strong>Location:</strong> {request.location}</li>
                                <li><strong>Urgency:</strong> {request.urgency}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No requests registered yet.</p>
            )}
            <button onClick={() => setIsModalOpen(true)} className="register-button">Create Your Request</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>Your Lifeline Awaits  Create a Blood Request</h2>
                        <form onSubmit={handleSubmit} className="request-form">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="blood-type">Blood Type:</label>
                            <input 
                                type="text" 
                                id="blood-type" 
                                name="bloodType" 
                                value={formData.bloodType} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="from">From:</label>
                            <input 
                                type="date" 
                                id="from" 
                                name="from" 
                                value={formData.from} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="till">Till:</label>
                            <input 
                                type="date" 
                                id="till" 
                                name="till" 
                                value={formData.till} 
                                onChange={handleChange} 
                                required 
                            />
                            <label htmlFor="contact">Contact:</label>
                            <input 
                                type="tel" 
                                id="contact" 
                                name="contact" 
                                value={formData.contact} 
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
                            <label htmlFor="urgency">Urgency:</label>
                            <select 
                                id="urgency" 
                                name="urgency" 
                                value={formData.urgency} 
                                onChange={handleChange} 
                                required 
                            >
                                <option value="">Select Urgency</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipientRequests;
