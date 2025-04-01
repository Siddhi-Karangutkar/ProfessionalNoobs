import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageSquare } from "lucide-react";

const SponsorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [sponsor, setSponsor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select(`
            *,
            sponsorships:proposals(status, title, requested_amount)
          `)
          .eq('id', id)
          .single();

        if (error) throw error;
        setSponsor(data);
      } catch (error) {
        console.error("Error fetching sponsor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsor();
  }, [id]);

  if (loading) return <div>Loading sponsor profile...</div>;
  if (!sponsor) return <div>Sponsor not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">{sponsor.organization_name}</h1>
          <p className="text-gray-600 mt-2">{sponsor.description}</p>
          <div className="mt-4 flex gap-2">
            {sponsor.sponsor_types?.map((type: string) => (
              <Badge key={type} variant="outline">{type}</Badge>
            ))}
          </div>
        </div>
        <Button asChild>
          <a href={`mailto:${sponsor.email}`} className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Contact Sponsor
          </a>
        </Button>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Active Sponsorships</h2>
          <div className="space-y-3">
            {sponsor.sponsorships?.map((proposal: any) => (
              <div key={proposal.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{proposal.title}</h3>
                    <p className="text-sm text-gray-600">
                      ${proposal.requested_amount} • {proposal.status}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/proposals/${proposal.id}`}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Sponsorship Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Funding Range</p>
              <p>${sponsor.min_funding} - ${sponsor.max_funding}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Focus Areas</p>
              <p>{sponsor.focus_areas?.join(', ')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SponsorProfile;