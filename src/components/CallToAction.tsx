
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl text-white p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join our platform today to connect, grow, and make a difference. 
            Whether you're a vendor seeking support or a sponsor looking to create impact, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
      </div>
    </section>
  );
};

export default CallToAction;
