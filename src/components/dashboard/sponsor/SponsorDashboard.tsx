import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  ClipboardCheck, 
  MessageSquare, 
  Search,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

const SponsorDashboard = () => {
  const { user } = useAuth();
  const [proposals, setProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch proposals from Supabase
  const fetchProposals = async () => {
    try {
      const { data, error } = await supabase
        .from('proposals')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProposals(data || []);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };

  // Set up real-time subscription
  useEffect(() => {
    fetchProposals();

    const subscription = supabase
      .channel('proposals')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'proposals'
      }, () => {
        fetchProposals();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Mock data for stats
  const stats = [
    { title: "Proposals Reviewed", value: "18", icon: <ClipboardCheck className="h-4 w-4" />, change: "+5 from last month" },
    { title: "Active Sponsorships", value: "4", icon: <TrendingUp className="h-4 w-4" />, change: "2 need updates" },
    { title: "Vendors Discovered", value: "36", icon: <Users className="h-4 w-4" />, change: "12 new this week" },
    { title: "Messages", value: "15", icon: <MessageSquare className="h-4 w-4" />, change: "7 unread" },
  ];

  // Vendor mock data
  const vendors = [
    { id: 1, name: "Sustainable Fashion", category: "Apparel", location: "Portland, OR", match: "High" },
    { id: 2, name: "Urban Gardens", category: "Agriculture", location: "Seattle, WA", match: "Medium" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Sponsor Dashboard</h2>
        <Button className="bg-brand-blue hover:bg-brand-purple">
          <Search className="mr-2 h-4 w-4" /> Discover Vendors
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className="p-2 bg-brand-blue/10 rounded-full">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Sponsorship Proposals</CardTitle>
              <CardDescription>
                Review and respond to sponsorship requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proposals.slice(0, 3).map((proposal) => (
                  <div key={proposal.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{proposal.title}</h4>
                      <p className="text-sm text-gray-500">From: {proposal.vendor_name}</p>
                      <p className="text-sm text-gray-500">Requested: ${proposal.requested_amount}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        className={`
                          ${proposal.status === 'approved' ? 'bg-green-100 text-green-800' : 
                           proposal.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                           'bg-red-100 text-red-800'}`}
                      >
                        {proposal.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                {proposals.length === 0 && !loading && (
                  <div className="text-center py-8 text-gray-500">
                    No proposals found
                  </div>
                )}
                
                <Link to="/dashboard/sponsor/proposals">
                <Button variant="outline" className="w-full mt-4">
                  View All Proposals
                </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Vendors</CardTitle>
              <CardDescription>
                Vendors that match your sponsorship interests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{vendor.name}</h4>
                      <Badge 
                        className={`
                          ${vendor.match === 'High' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                            vendor.match === 'Medium' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : 
                            'bg-blue-100 text-blue-800 hover:bg-blue-100'}`}
                      >
                        {vendor.match} Match
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">Category: {vendor.category}</p>
                    <p className="text-sm text-gray-500">Location: {vendor.location}</p>
                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" variant="outline" className="w-full">View Profile</Button>
                      <Button size="sm" className="w-full bg-brand-blue hover:bg-brand-purple">Message</Button>
                    </div>
                  </div>
                ))}
                <Link to="/dashboard/sponsor/vendors">
                  <Button variant="outline" className="w-full mt-4">
                    View All Vendors
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SponsorDashboard;