
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users, 
  MessageSquare, 
  PieChart, 
  Settings,
  LogOut,
  ShoppingBag,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  userType: "vendor" | "sponsor";
}

const DashboardSidebar = ({ userType }: DashboardSidebarProps) => {
  const location = useLocation();
  const isVendor = userType === "vendor";
  
  const vendorLinks = [
    { name: "Dashboard", path: "/dashboard/vendor", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "My Proposals", path: "/dashboard/vendor/proposals", icon: <ClipboardList className="h-5 w-5" /> },
    { name: "Sponsor Matches", path: "/dashboard/vendor/sponsors", icon: <Users className="h-5 w-5" /> },
    { name: "Messages", path: "/dashboard/vendor/messages", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Impact & Growth", path: "/dashboard/vendor/impact", icon: <PieChart className="h-5 w-5" /> },
    { name: "Settings", path: "/dashboard/vendor/settings", icon: <Settings className="h-5 w-5" /> },
  ];
  
  const sponsorLinks = [
    { name: "Dashboard", path: "/dashboard/sponsor", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Vendor Discovery", path: "/dashboard/sponsor/vendors", icon: <Users className="h-5 w-5" /> },
    { name: "Proposals", path: "/dashboard/sponsor/proposals", icon: <ClipboardList className="h-5 w-5" /> },
    { name: "Messages", path: "/dashboard/sponsor/messages", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Impact Reports", path: "/dashboard/sponsor/impact", icon: <PieChart className="h-5 w-5" /> },
    { name: "Settings", path: "/dashboard/sponsor/settings", icon: <Settings className="h-5 w-5" /> },
  ];
  
  const links = isVendor ? vendorLinks : sponsorLinks;
  
  return (
    <aside className="w-64 border-r bg-white h-screen sticky top-0 py-6 flex flex-col">
      <div className="px-6 mb-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
            <span className="text-white font-bold">VS</span>
          </div>
          <span className="text-xl font-bold text-gray-800">VisibilitySponsor</span>
        </Link>
      </div>
      
      <div className="px-6 mb-6">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={isVendor ? "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" : "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"} />
            <AvatarFallback>{isVendor ? "V" : "S"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{isVendor ? "Sarah's Crafts" : "Tech Innovations"}</p>
            <p className="text-xs text-gray-500">{isVendor ? "Vendor" : "Sponsor"}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-sm",
                  location.pathname === link.path
                    ? "bg-brand-purple/10 text-brand-purple font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto px-3">
        <div className="p-4 rounded-lg bg-gray-50 mb-4">
          <div className="flex items-center mb-2">
            {isVendor 
              ? <ShoppingBag className="w-5 h-5 text-brand-purple mr-2" />
              : <Briefcase className="w-5 h-5 text-brand-blue mr-2" />
            }
            <h4 className="font-medium text-sm">
              {isVendor ? "Vendor Status" : "Sponsor Status"}
            </h4>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              {isVendor ? "Profile Completion" : "Active Sponsorships"}
            </span>
            <span className="font-medium">
              {isVendor ? "85%" : "4"}
            </span>
          </div>
        </div>
        
        <Link to="/logout">
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
