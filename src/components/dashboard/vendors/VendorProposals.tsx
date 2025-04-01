// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Search } from "lucide-react";

// const VendorProposals = () => {
//   const [searchTerm, setSearchTerm] = useState("");
  
//   const proposals = [
//     { id: 1, title: "Storefront Renovation", amount: "$5,000", status: "Approved" },
//     { id: 2, title: "Marketing Campaign", amount: "$2,500", status: "Pending" },
//     { id: 3, title: "Product Expansion", amount: "$7,500", status: "Pending" },
//   ];

//   const filteredProposals = proposals.filter(proposal =>
//     proposal.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">My Proposals</h2>
//         <div className="relative w-64">
//           <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search proposals..."
//             className="pl-8 pr-4 py-2 w-full rounded-md border"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="space-y-4">
//         {filteredProposals.map((proposal) => (
//           <div key={proposal.id} className="flex items-center justify-between p-4 border rounded-lg">
//             <div>
//               <h4 className="font-semibold">{proposal.title}</h4>
//               <p className="text-sm text-gray-500">Requested: {proposal.amount}</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Badge variant={proposal.status.toLowerCase()}>
//                 {proposal.status}
//               </Badge>
//               <Button variant="outline" size="sm">
//                 <ExternalLink className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         ))}
//         <Button variant="outline" className="w-full mt-4">
//           View All Proposals
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default VendorProposals;


import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const VendorProposals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [proposals, setProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Fetch proposals from Supabase
  const fetchProposals = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('proposals')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProposals(data || []);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, [user]); // Refetch when user changes

  const filteredProposals = proposals.filter(proposal =>
    proposal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading proposals...</div>;
  }

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
              <p className="text-sm text-gray-500">
                Requested: ${proposal.requested_amount}
              </p>
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
        
        {proposals.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No proposals found. Create your first proposal!
          </div>
        )}

        <Button variant="outline" className="w-full mt-4">
          View All Proposals
        </Button>
      </div>
    </div>
  );
};

export default VendorProposals;