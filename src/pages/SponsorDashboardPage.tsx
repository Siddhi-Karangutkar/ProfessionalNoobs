
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import SponsorDashboard from "@/components/dashboard/SponsorDashboard";

const SponsorDashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar userType="sponsor" />
      <main className="flex-1 p-8 bg-gray-50">
        <SponsorDashboard />
      </main>
    </div>
  );
};

export default SponsorDashboardPage;
