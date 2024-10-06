// src/components/HomePage/RegisterCampModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './RegisterCampModal.css';

Modal.setAppElement('#root');


const RegisterCampModal = ({ isOpen, onRequestClose, onRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
        contact: '',
        photos: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await axios.post('/api/camps', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onRegister(response.data);
            onRequestClose(); // Close the modal
            setFormData({ name: '', date: '', location: '', description: '', contact: '', photos: null });
        } catch (error) {
            console.error("Error registering camp:", error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Register Live Camp"
            className="modal"
            overlayClassName="overlay"
        >
            <h2>Register a Live Camp</h2>
            <form onSubmit={handleSubmit}>
            <h3>Enter Camp Details</h3>
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
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact Information"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="photos"
                    onChange={handleChange}
                    accept="image/*"
                    required
                />
                <button type="submit">Register Camp</button>
            </form>
            <button onClick={onRequestClose} className="close-button">Close</button>
        </Modal>
    );
};

export default RegisterCampModal;
