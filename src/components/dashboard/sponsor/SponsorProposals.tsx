// SponsorProposals.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, FileText } from "lucide-react";

const SponsorProposals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const proposals = [
    { id: 1, title: "Store Expansion", vendor: "Sarah's Crafts", amount: "$5,000", status: "Pending" },
    { id: 2, title: "New Product Line", vendor: "Urban Brew Co.", amount: "$10,000", status: "Under Review" },
  ];

  const filteredProposals = proposals.filter(proposal =>
    proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proposal.vendor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Sponsorship Proposals</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search proposals..."
            className="pl-8 pr-4 py-2 w-full rounded-md border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredProposals.map((proposal) => (
          <div key={proposal.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-semibold">{proposal.title}</h4>
              <p className="text-sm text-gray-500">Vendor: {proposal.vendor}</p>
              <p className="text-sm text-gray-500">Amount: {proposal.amount}</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant={proposal.status === 'Pending' ? 'yellow' : 'blue'}>
                {proposal.status}
              </Badge>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorProposals;