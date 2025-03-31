// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Search } from "lucide-react";

// const SponsorMessages = () => {
//   const [searchTerm, setSearchTerm] = useState("");
  
//   const messages = [
//     { id: 1, sender: "Sarah's Crafts", preview: "Following up on our proposal...", unread: true },
//     { id: 2, sender: "Urban Brew Co.", preview: "Thank you for your support!", unread: false },
//   ];

//   const filteredMessages = messages.filter(message =>
//     message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     message.preview.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Messages</h2>
//         <div className="relative w-64">
//           <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search messages..."
//             className="pl-8 pr-4 py-2 w-full rounded-md border"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="space-y-2">
//         {filteredMessages.map((message) => (
//           <div key={message.id} className="p-4 border rounded-lg hover:bg-gray-50">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h4 className={`font-medium ${message.unread ? 'text-brand-blue' : 'text-gray-900'}`}>
//                   {message.sender}
//                 </h4>
//                 <p className="text-sm text-gray-600">{message.preview}</p>
//               </div>
//               {message.unread && <Badge variant="blue">New</Badge>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SponsorMessages;


import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { MessageComposer } from "@/components/messages/MessageComposer";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { MessageList } from "@/components/messages/MessageList";

const SponsorMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*, sender:profiles!sender_id(business_name)')
        .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
        .order('created_at', { ascending: false });

      if (!error) setMessages(data || []);
    };

    fetchMessages();

    const subscription = supabase
      .channel('messages')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'messages'
      }, () => fetchMessages())
      .subscribe();

    return () => { subscription.unsubscribe() };
  }, [user]);

  const markAsRead = async (messageId: string) => {
    await supabase
      .from('messages')
      .update({ read: true })
      .eq('id', messageId);
  };

  const filteredMessages = messages.filter(message =>
    message.sender.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-160px)]">
      {/* Conversation List */}
      <div className="w-1/3 border-r p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Conversations</h2>
          <div className="relative w-48">
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
            <div
              key={message.id}
              onClick={() => {
                setSelectedConversation(message.sender_id === user?.id ? message.receiver_id : message.sender_id);
                if (!message.read && message.receiver_id === user?.id) {
                  markAsRead(message.id);
                }
              }}
              className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium ${!message.read ? 'text-brand-blue' : 'text-gray-900'}`}>
                    {message.sender.business_name}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-1">{message.content}</p>
                </div>
                {!message.read && <Badge variant="blue">New</Badge>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversation View */}
      <div className="flex-1 p-4">
        {selectedConversation ? (
          <div className="h-full flex flex-col">
            <MessageList receiverId={selectedConversation} />
            <MessageComposer receiverId={selectedConversation} />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default SponsorMessages;