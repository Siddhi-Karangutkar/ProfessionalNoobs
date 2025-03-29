
import React from "react";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  BarChart,
  Heart,
  Globe,
  FileText 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const vendorBenefits = [
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-purple" />,
      title: "Increased Visibility",
      description: "Gain more exposure for your business and products through sponsorships."
    },
    {
      icon: <Users className="h-10 w-10 text-brand-purple" />,
      title: "Access to Resources",
      description: "Get funding and resources to scale your business operations."
    },
    {
      icon: <Target className="h-10 w-10 text-brand-purple" />,
      title: "Strategic Partnerships",
      description: "Form valuable long-term relationships with aligned sponsors."
    },
    {
      icon: <Award className="h-10 w-10 text-brand-purple" />,
      title: "Credibility Boost",
      description: "Increase trust and brand reputation through established partnerships."
    }
  ];

  const sponsorBenefits = [
    {
      icon: <Heart className="h-10 w-10 text-brand-blue" />,
      title: "CSR Fulfillment",
      description: "Meet corporate social responsibility goals through impactful funding."
    },
    {
      icon: <Globe className="h-10 w-10 text-brand-blue" />,
      title: "Community Impact",
      description: "Make a real difference in local communities and businesses."
    },
    {
      icon: <BarChart className="h-10 w-10 text-brand-blue" />,
      title: "Measurable Results",
      description: "Track and quantify the impact of your sponsorship investments."
    },
    {
      icon: <FileText className="h-10 w-10 text-brand-blue" />,
      title: "Brand Alignment",
      description: "Associate your brand with causes and businesses that share your values."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Platform Benefits</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform creates value for both vendors seeking support and sponsors 
            looking to make an impact.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-brand-purple">For Vendors</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {vendorBenefits.map((benefit, index) => (
                <Card key={`vendor-benefit-${index}`} className="card-hover border-t-4 border-t-brand-purple">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">{benefit.icon}</div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-brand-blue">For Sponsors</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {sponsorBenefits.map((benefit, index) => (
                <Card key={`sponsor-benefit-${index}`} className="card-hover border-t-4 border-t-brand-blue">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">{benefit.icon}</div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
