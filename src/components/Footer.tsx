
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">VS</span>
              </div>
              <span className="text-xl font-bold">VisibilitySponsor</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Connecting local vendors with sponsors to increase visibility and drive growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register?type=vendor" className="text-gray-400 hover:text-white transition-colors">
                  Vendor Registration
                </Link>
              </li>
              <li>
                <Link to="/register?type=sponsor" className="text-gray-400 hover:text-white transition-colors">
                  Sponsor Registration
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: support@visibilitysponsor.com
              </li>
              <li className="text-gray-400">
                Phone: +1 (123) 456-7890
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VisibilitySponsor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
