import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <h1 className="text-3xl font-bold text-blue-700">About Us</h1>
            <p className="text-lg text-gray-700 mt-4 text-justify">
                Many startups, NGOs, and event organizers struggle to find suitable sponsors, 
                while companies and vendors face difficulties in identifying the right opportunities 
                to invest in. There is no streamlined, transparent, and data-driven platform that 
                efficiently matches sponsors with potential beneficiaries based on their interests, 
                industry, and goals.
            </p>
            <p className="text-lg text-gray-700 mt-4 text-justify">
                Our platform bridges this gap by providing a seamless, intelligent, and data-driven 
                approach to sponsorship matchmaking, ensuring that both sponsors and beneficiaries 
                achieve their goals efficiently and effectively.
            </p>
            
            <div className="mt-6 pt-4 border-t-2 border-blue-700">
                <h2 className="text-2xl font-semibold text-blue-700">Contact Us</h2>
                <div className="flex flex-col items-center gap-3 mt-4 text-lg text-gray-700">
                    <span className="flex items-center gap-2"><img src="email-icon.png" alt="Email" className="w-5 h-5"/> <strong>Email:</strong> support@example.com</span>
                    <span className="flex items-center gap-2"><img src="phone-icon.png" alt="Phone" className="w-5 h-5"/> <strong>Phone:</strong> +1 (123) 456-7890</span>
                    <span className="flex items-center gap-2"><img src="location-icon.png" alt="Location" className="w-5 h-5"/> <strong>Address:</strong> 123 Sponsorship Lane, Business City, Country</span>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
