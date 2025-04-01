// VendorMessages.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Search } from "lucide-react";

const VendorMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const messages = [
    { id: 1, sender: "Tech Innovations", preview: "We're interested in your proposal...", unread: true },
    { id: 2, sender: "Community First", preview: "Request for additional documents...", unread: false },
  ];

  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Messages</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="pl-8 pr-4 py-2 w-full rounded-md border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        {filteredMessages.map((message) => (
          <div key={message.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h4 className={`font-medium ${message.unread ? 'text-brand-purple' : 'text-gray-900'}`}>
                  {message.sender}
                </h4>
                <p className="text-sm text-gray-600">{message.preview}</p>
              </div>
              {message.unread && <Badge className="bg-blue-600 text-white">New</Badge>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorMessages;