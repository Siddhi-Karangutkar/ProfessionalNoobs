import React from "react";

const FaqPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-blue-500 font-semibold">What is this platform about?</h3>
          <p className="text-gray-600">
            Our platform connects startups, NGOs, and event organizers with suitable sponsors by leveraging data-driven matching based on interests, industry, and goals.
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-blue-500 font-semibold">Who can use this platform?</h3>
          <p className="text-gray-600">
            This platform is designed for startups, NGOs, event organizers, companies, and vendors looking for sponsorship or investment opportunities.
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-blue-500 font-semibold">How does the sponsorship matching work?</h3>
          <p className="text-gray-600">
            Our platform uses an algorithm to analyze user preferences, industry trends, and company goals to provide optimal sponsorship matches.
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-blue-500 font-semibold">Is there a cost to use the platform?</h3>
          <p className="text-gray-600">
            We offer free and premium plans depending on the level of features and customization required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;