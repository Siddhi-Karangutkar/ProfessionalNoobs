
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import VendorDashboard from "@/components/dashboard/VendorDashboard";

const VendorDashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar userType="vendor" />
      <main className="flex-1 p-8 bg-gray-50">
        <VendorDashboard />
      </main>
    </div>
  );
};

export default VendorDashboardPage;
