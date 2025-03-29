import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search } from "lucide-react";

const VendorProposals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const proposals = [
    { id: 1, title: "Storefront Renovation", amount: "$5,000", status: "Approved" },
    { id: 2, title: "Marketing Campaign", amount: "$2,500", status: "Pending" },
    { id: 3, title: "Product Expansion", amount: "$7,500", status: "Pending" },
  ];

  const filteredProposals = proposals.filter(proposal =>
    proposal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Proposals</h2>
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
              <p className="text-sm text-gray-500">Requested: {proposal.amount}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant={proposal.status.toLowerCase()}>
                {proposal.status}
              </Badge>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4">
          View All Proposals
        </Button>
      </div>
    </div>
  );
};

export default VendorProposals;