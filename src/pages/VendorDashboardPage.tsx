
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import VendorDashboard from "@/components/dashboard/vendors/VendorDashboard";
import VendorProposals from "@/components/dashboard/vendors/VendorProposals";
import VendorSponsors from "@/components/dashboard/vendors/VendorSponsors";
import VendorMessages from "@/components/dashboard/vendors/VendorMessages";
import VendorImpact from "@/components/dashboard/vendors/VendorImpact";
import VendorSettings from "@/components/dashboard/vendors/VendorSettings";

const VendorDashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar always visible */}
      <DashboardSidebar userType="vendor" />
      
      {/* Main Content Area */}
      <main className="flex-1 p-8 bg-gray-50">
        <Routes>
          {/* Default Dashboard */}
          <Route path="/" element={<VendorDashboard />} />
          
          {/* Nested Routes for Sidebar Links */}
          <Route path="proposals" element={<VendorProposals />} />
          <Route path="sponsors" element={<VendorSponsors />} />
          <Route path="messages" element={<VendorMessages />} />
          <Route path="impact" element={<VendorImpact />} />
          <Route path="settings" element={<VendorSettings />} />
        </Routes>
      </main>
    </div>
  );
};

export default VendorDashboardPage;

