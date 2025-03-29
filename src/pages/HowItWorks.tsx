import React from "react";
import { FaUserPlus, FaRobot, FaComments, FaFileAlt, FaStar, FaHandshake } from "react-icons/fa";

const HowItWorks: React.FC = () => {
    const steps = [
        { icon: <FaUserPlus className="text-blue-600 text-4xl" />, title: "Profile Creation", description: "Sign up and create your profile with details about your organization, interests, and sponsorship goals." },
        { icon: <FaRobot className="text-blue-600 text-4xl" />, title: "AI Matchmaking", description: "Our AI analyzes preferences and suggests the best sponsorship opportunities for you." },
        { icon: <FaComments className="text-blue-600 text-4xl" />, title: "Chat Section", description: "Connect with potential sponsors or beneficiaries through real-time messaging." },
        { icon: <FaFileAlt className="text-blue-600 text-4xl" />, title: "Submit Proposals", description: "Send detailed sponsorship proposals directly through the platform." },
        { icon: <FaHandshake className="text-blue-600 text-4xl" />, title: "Finalize Partnership", description: "Negotiate terms and finalize agreements seamlessly within the platform." },
        { icon: <FaStar className="text-blue-600 text-4xl" />, title: "Feedback & Ratings", description: "Rate and review your sponsorship experience to build credibility." }
    ];

    return (
        <div className="max-w-5xl mx-auto p-8 text-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-6">How It Works</h1>
            <p className="text-lg text-gray-700 mb-8">Follow these simple steps to find the perfect sponsorship match.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center border-t-4 border-blue-600">
                        {step.icon}
                        <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
