import { useAuth } from '@/hooks/useAuth'; // Required for user context
import { getProposals } from '@/services/proposals'; // Use service layer

const ProposalsList = () => {
    const { user } = useAuth();
    const [proposals, setProposals] = useState([]);
  
    useEffect(() => {
      if (user) {
        getProposals(user.id).then(({ data }) => setProposals(data));
      }
    }, [user]);
  
    return (
      <div>
        {proposals.map(proposal => (
          <div key={proposal.id}>
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
            <Button onClick={() => updateProposal(proposal.id, { status: 'submitted' })}>
              Submit
            </Button>
          </div>
        ))}
      </div>
    );
  };