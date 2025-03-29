
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect Local Vendors with Perfect Sponsors
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Boost visibility, grow your business, and create meaningful partnerships
              that drive success for both vendors and sponsors.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/register?type=vendor">
                <Button className="w-full sm:w-auto bg-white text-brand-purple hover:bg-gray-100 hover:text-brand-blue text-base px-8 py-6">
                  Join as a Vendor →
                </Button>
              </Link>
              <Link to="/register?type=sponsor">
                <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-base px-8 py-6">
                  Partner as a Sponsor →
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 animate-slide-from-right">
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1521322800607-8c38375eef04" 
                alt="Vendors and sponsors collaborating" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
