// SponsorVendors.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star } from "lucide-react";

const SponsorVendors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const vendors = [
    { id: 1, name: "Sarah's Crafts", category: "Handmade Goods", match: 92 },
    { id: 2, name: "Urban Brew Co.", category: "Food & Beverage", match: 85 },
  ];

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Vendor Discovery</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search vendors..."
            className="pl-8 pr-4 py-2 w-full rounded-md border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVendors.map((vendor) => (
          <div key={vendor.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">{vendor.name}</h4>
              <Badge variant="blue">
                <Star className="h-4 w-4 mr-1" />
                {vendor.match}% Match
              </Badge>
            </div>
            <p className="text-sm text-gray-500">Category: {vendor.category}</p>
            <div className="mt-3 flex space-x-2">
              <Button variant="outline" className="w-full">View Profile</Button>
              <Button className="w-full bg-brand-blue hover:bg-brand-purple">Contact</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorVendors;