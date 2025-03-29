// VendorSponsors.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const VendorSponsors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const sponsors = [
    { id: 1, name: "Tech Innovations Inc.", interest: "High", category: "Technology" },
    { id: 2, name: "Community First Fund", interest: "Medium", category: "Non-profit" },
  ];

  const filteredSponsors = sponsors.filter(sponsor =>
    sponsor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sponsor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Sponsor Matches</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search sponsors..."
            className="pl-8 pr-4 py-2 w-full rounded-md border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSponsors.map((sponsor) => (
          <div key={sponsor.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">{sponsor.name}</h4>
              <Badge variant={sponsor.interest.toLowerCase()}>
                {sponsor.interest} Interest
              </Badge>
            </div>
            <p className="text-sm text-gray-500">Category: {sponsor.category}</p>
            <div className="mt-3 flex space-x-2">
              <Button variant="outline" className="w-full">View Profile</Button>
              <Button className="w-full bg-brand-purple hover:bg-brand-blue">Message</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorSponsors;