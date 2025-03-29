import React from "react";
import { FaHandshake, FaStar, FaUsers, FaRocket, FaLightbulb, FaChartLine } from "react-icons/fa";

const successStories = [
    {
        icon: <FaHandshake className="text-blue-600 text-4xl" />, 
        title: "TechNova & VC Firm Alpha", 
        description: "TechNova secured a $2M investment from VC Firm Alpha, enabling them to scale their AI-driven analytics platform globally."
    },
    {
        icon: <FaUsers className="text-blue-600 text-4xl" />, 
        title: "GreenFuture NGO & EcoCorp", 
        description: "GreenFuture NGO partnered with EcoCorp to plant 100,000 trees across urban areas, creating significant environmental impact."
    },
    {
        icon: <FaStar className="text-blue-600 text-4xl" />, 
        title: "CodeFest & DevX Inc.", 
        description: "CodeFest, a leading hackathon, secured sponsorship from DevX Inc., bringing in over 5,000 participants from 30+ countries."
    },
    {
        icon: <FaRocket className="text-blue-600 text-4xl" />, 
        title: "SpaceNext & AstroFund", 
        description: "SpaceNext, a satellite startup, received $5M funding from AstroFund, accelerating their mission to deploy next-gen nanosatellites."
    },
    {
        icon: <FaLightbulb className="text-blue-600 text-4xl" />, 
        title: "InnovateHub & XYZ Enterprises", 
        description: "InnovateHub secured mentorship and funding from XYZ Enterprises, helping 50+ startups turn their ideas into reality."
    },
    {
        icon: <FaChartLine className="text-blue-600 text-4xl" />, 
        title: "NextGen Markets & FinanceX", 
        description: "NextGen Markets revolutionized stock trading with AI-driven predictions after receiving strategic investment from FinanceX."
    }
];

const SuccessStories: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto p-8 text-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-6">Success Stories</h1>
            <p className="text-lg text-gray-700 mb-8">Discover how our platform has helped businesses, NGOs, and events achieve their goals.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center border-t-4 border-blue-600">
                        {story.icon}
                        <h3 className="text-xl font-semibold mt-4">{story.title}</h3>
                        <p className="text-gray-600 mt-2">{story.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessStories;