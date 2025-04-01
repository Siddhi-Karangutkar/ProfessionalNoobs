import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageSquare } from "lucide-react";

const VendorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [vendor, setVendor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select(`
            *,
            proposals:proposals(user_id, title, status, requested_amount)
          `)
          .eq('id', id)
          .single();

        if (error) throw error;
        setVendor(data);
      } catch (error) {
        console.error("Error fetching vendor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, [id]);

  if (loading) return <div>Loading vendor profile...</div>;
  if (!vendor) return <div>Vendor not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">{vendor.business_name}</h1>
          <p className="text-gray-600 mt-2">{vendor.description}</p>
          <div className="mt-4 flex gap-2">
            <Badge variant="outline">{vendor.category}</Badge>
            <Badge variant="outline">{vendor.location}</Badge>
          </div>
        </div>
        <Button asChild>
          <a href={`mailto:${vendor.email}`} className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Contact Vendor
          </a>
        </Button>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Active Proposals</h2>
          <div className="space-y-3">
            {vendor.proposals?.map((proposal: any) => (
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
          <h2 className="text-xl font-semibold mb-4">Business Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Established</p>
              <p>{new Date(vendor.established_date).getFullYear()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Website</p>
              <a href={vendor.website} className="text-brand-purple hover:underline">
                {vendor.website}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VendorProfile;