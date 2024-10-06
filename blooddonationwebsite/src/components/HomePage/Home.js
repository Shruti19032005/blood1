import React, { useEffect, useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import LiveCamps from './LiveCamps';
import RecipientRequests from './RecipientRequests'; // Import the RecipientRequests component
import './Home.css'; 
import axios from 'axios'; 

function Home() {
    const [camps, setCamps] = useState([]);
    const [requests, setRequests] = useState([]); // State for recipient requests

    useEffect(() => {
        const fetchCamps = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/camps');
                setCamps(response.data);
            } catch (error) {
                console.error("Error fetching camps:", error);
            }
        };

        fetchCamps();
    }, []);

    return (
        <div className="home">
            <Header />
            <HeroSection />
            <AboutSection />
            <LiveCamps camps={camps} setCamps={setCamps} />
            <RecipientRequests requests={requests} setRequests={setRequests} /> {/* Include RecipientRequests */}
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Home;
