
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import SponsorDashboard from "@/components/dashboard/sponsor/SponsorDashboard";
import SponsorVendors from "@/components/dashboard/sponsor/SponsorVendors";
import SponsorProposals from "@/components/dashboard/sponsor/SponsorProposals";
import SponsorMessages from "@/components/dashboard/sponsor/SponsorMessages";
import SponsorImpact from "@/components/dashboard/sponsor/SponsorImpact";
import SponsorSettings from "@/components/dashboard/sponsor/SponsorSettings";

const SponsorDashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Sponsor */}
      <DashboardSidebar userType="sponsor" />
      
      {/* Main Content Area */}
      <main className="flex-1 p-8 bg-gray-50">
        <Routes>
          {/* Default Sponsor Dashboard */}
          <Route path="/" element={<SponsorDashboard />} />
          
          {/* Nested Routes for Sidebar Links */}
          <Route path="vendors" element={<SponsorVendors />} />
          <Route path="proposals" element={<SponsorProposals />} />
          <Route path="messages" element={<SponsorMessages />} />
          <Route path="impact" element={<SponsorImpact />} />
          <Route path="settings" element={<SponsorSettings />} />
        </Routes>
      </main>
    </div>
  );
};

export default SponsorDashboardPage;

