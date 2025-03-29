// import { useAuth } from '@/hooks/useAuth'; // Required for user context
// import { getProposals } from '@/services/proposals'; // Use service layer

// const ProposalsList = () => {
//     const { user } = useAuth();
//     const [proposals, setProposals] = useState([]);
  
//     useEffect(() => {
//       if (user) {
//         getProposals(user.id).then(({ data }) => setProposals(data));
//       }
//     }, [user]);
  
//     return (
//       <div>
//         {proposals.map(proposal => (
//           <div key={proposal.id}>
//             <h3>{proposal.title}</h3>
//             <p>{proposal.description}</p>
//             <Button onClick={() => updateProposal(proposal.id, { status: 'submitted' })}>
//               Submit
//             </Button>
//           </div>
//         ))}
//       </div>
//     );
//   };


// src/components/proposals/ProposalsList.tsx
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { CreateProposalForm } from "./CreateProposalForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const ProposalsList = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [proposals, setProposals] = useState([]);

  const handleSuccess = () => {
    setIsOpen(false);
    // Refresh proposals list
    fetchProposals();
  };

  const fetchProposals = async () => {
    if (user) {
      const { data } = await supabase
        .from('proposals')
        .select('*')
        .eq('user_id', user.id);
      setProposals(data || []);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Sponsorship Proposals</h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="default">Create New Proposal</Button>
          </DialogTrigger>
          <DialogContent>
            <CreateProposalForm onSuccess={handleSuccess} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Existing proposals list */}
      {proposals.map((proposal) => (
        <div key={proposal.id} className="border rounded-lg p-4">
          <h3 className="font-medium">{proposal.title}</h3>
          <p className="text-sm text-gray-600">{proposal.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm">Requested: ${proposal.requested_amount}</span>
            <span className="text-sm px-2 py-1 rounded bg-gray-100">
              {proposal.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};