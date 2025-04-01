
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  ClipboardCheck, 
  MessageSquare, 
  Plus,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  // Mock data that would normally come from an API
  const stats = [
    { title: "Profile Views", value: "124", icon: <Users className="h-4 w-4" />, change: "+12% from last month" },
    { title: "Active Proposals", value: "3", icon: <ClipboardCheck className="h-4 w-4" />, change: "2 pending review" },
    { title: "Sponsor Matches", value: "2", icon: <TrendingUp className="h-4 w-4" />, change: "1 new this week" },
    { title: "Messages", value: "8", icon: <MessageSquare className="h-4 w-4" />, change: "3 unread" },
  ];

  const proposals = [
    { id: 1, title: "Storefront Renovation", amount: "$5,000", status: "Approved", date: "2023-05-15" },
    { id: 2, title: "Marketing Campaign", amount: "$2,500", status: "Pending", date: "2023-06-01" },
    { id: 3, title: "Product Expansion", amount: "$7,500", status: "Pending", date: "2023-06-10" },
  ];

  const sponsors = [
    { id: 1, name: "Tech Innovations Inc.", interest: "High", category: "Technology", lastActive: "Today" },
    { id: 2, name: "Community First Fund", interest: "Medium", category: "Non-profit", lastActive: "Yesterday" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Vendor Dashboard</h2>
        <Button className="bg-brand-purple hover:bg-brand-blue">
          <Plus className="mr-2 h-4 w-4" /> Create New Proposal
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
                <div className="p-2 bg-brand-purple/10 rounded-full">
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
              <CardTitle>Your Sponsorship Proposals</CardTitle>
              <CardDescription>
                Track the status of your submitted proposals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proposals.map((proposal) => (
                  <div key={proposal.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{proposal.title}</h4>
                      <p className="text-sm text-gray-500">Requested: {proposal.amount}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        className={`
                          ${proposal.status === 'Approved' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                            proposal.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : 
                            'bg-red-100 text-red-800 hover:bg-red-100'}
                        `}
                      >
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
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Interested Sponsors</CardTitle>
              <CardDescription>
                Sponsors who have shown interest in your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sponsors.map((sponsor) => (
                  <div key={sponsor.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{sponsor.name}</h4>
                      <Badge 
                        className={`
                          ${sponsor.interest === 'High' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                            sponsor.interest === 'Medium' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' : 
                            'bg-blue-100 text-blue-800 hover:bg-blue-100'}
                        `}
                      >
                        {sponsor.interest} Interest
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">Category: {sponsor.category}</p>
                    <p className="text-sm text-gray-500">Last Active: {sponsor.lastActive}</p>
                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" variant="outline" className="w-full">View Profile</Button>
                      <Button size="sm" className="w-full bg-brand-purple hover:bg-brand-blue">Message</Button>
                    </div>
                  </div>
                ))}
                <Link to="/dashboard/vendor/sponsors">
                  <Button variant="outline" className="w-full mt-4">
                    View All Sponsors
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

export default VendorDashboard;
