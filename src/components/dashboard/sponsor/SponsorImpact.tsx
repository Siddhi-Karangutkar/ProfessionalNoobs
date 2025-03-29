// SponsorImpact.tsx
import React from "react";
import { BarChart, HeartHandshake } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SponsorImpact = () => {
  const metrics = [
    { label: "Total Sponsorships", value: 12, icon: <HeartHandshake className="h-5 w-5" /> },
    { label: "Engagement Rate", value: 78, icon: <BarChart className="h-5 w-5" /> },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Impact Reports</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-6 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{metric.label}</h3>
              {metric.icon}
            </div>
            <div className="text-3xl font-bold text-brand-blue">
              {metric.label.includes('%') ? `${metric.value}%` : metric.value}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border rounded-lg">
        <h3 className="font-medium mb-4">Sponsorship Overview</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Chart placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default SponsorImpact;