// VendorImpact.tsx
import React from "react";
import { PieChart, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const VendorImpact = () => {
  const metrics = [
    { label: "Profile Completion", value: 85, icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Engagement Rate", value: 65, icon: <PieChart className="h-5 w-5" /> },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Impact & Growth</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{metric.label}</h3>
              {metric.icon}
            </div>
            <Progress value={metric.value} className="h-2" />
            <span className="text-sm text-gray-600 mt-2 block">
              {metric.value}% Complete
            </span>
          </div>
        ))}
      </div>

      <div className="p-6 border rounded-lg">
        <h3 className="font-medium mb-4">Growth Overview</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Chart placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default VendorImpact;