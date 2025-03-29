
import React from "react";
import { 
  Users, 
  ClipboardCheck, 
  HandshakeIcon, 
  BarChart4, 
  ShoppingBag,
  Briefcase
} from "lucide-react";

const HowItWorks = () => {
  const vendorSteps = [
    {
      icon: <ShoppingBag className="w-12 h-12 text-brand-purple" />,
      title: "Create Your Profile",
      description: "Register as a vendor and showcase your business and products."
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-brand-purple" />,
      title: "Submit Proposals",
      description: "Create sponsorship proposals highlighting your goals and requirements."
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-brand-purple" />,
      title: "Connect with Sponsors",
      description: "Chat with interested sponsors and finalize partnership details."
    },
    {
      icon: <BarChart4 className="w-12 h-12 text-brand-purple" />,
      title: "Grow & Track Impact",
      description: "Receive funding, implement your plans, and track your growth."
    }
  ];

  const sponsorSteps = [
    {
      icon: <Briefcase className="w-12 h-12 text-brand-blue" />,
      title: "Create Your Profile",
      description: "Register as a sponsor and define your interests and budget."
    },
    {
      icon: <Users className="w-12 h-12 text-brand-blue" />,
      title: "Discover Vendors",
      description: "Browse vendor profiles or review incoming sponsorship proposals."
    },
    {
      icon: <HandshakeIcon className="w-12 h-12 text-brand-blue" />,
      title: "Finalize Partnerships",
      description: "Connect with vendors and establish sponsorship terms."
    },
    {
      icon: <BarChart4 className="w-12 h-12 text-brand-blue" />,
      title: "Monitor Impact",
      description: "Track your funding impact and generate CSR reports."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy for vendors and sponsors to connect and create 
            successful partnerships. Here's how:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-brand-purple">For Vendors</h3>
            <div className="space-y-8">
              {vendorSteps.map((step, index) => (
                <div key={`vendor-${index}`} className="flex items-start space-x-4 card-hover bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">{step.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-brand-blue">For Sponsors</h3>
            <div className="space-y-8">
              {sponsorSteps.map((step, index) => (
                <div key={`sponsor-${index}`} className="flex items-start space-x-4 card-hover bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">{step.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
