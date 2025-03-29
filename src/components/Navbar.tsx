
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
            <span className="text-white font-bold">VS</span>
          </div>
          <span className="text-xl font-bold text-gray-800">VisibilitySponsor</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-brand-purple transition-colors">
            About
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-brand-purple transition-colors">
            How It Works
          </Link>
          <Link to="/success-stories" className="text-gray-600 hover:text-brand-purple transition-colors">
            Success Stories
          </Link>
          <Link to="/faq" className="text-gray-600 hover:text-brand-purple transition-colors">
            FAQ
          </Link>
        </div>
        
        <div className="flex items-center">
          <Link to="/login">
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
              <LogIn className="mr-2 h-4 w-4" />
              Account Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
