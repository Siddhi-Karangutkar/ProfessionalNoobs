// components/messages/MessageList.tsx
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

export const MessageList = ({ receiverId }: { receiverId: string }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*, sender:profiles!sender_id(business_name)')
        .or(`and(sender_id.eq.${user.id},receiver_id.eq.${receiverId}),and(sender_id.eq.${receiverId},receiver_id.eq.${user.id})`)
        .order('created_at', { ascending: true });

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
  }, [user, receiverId]);

  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender_id === user?.id ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-md p-4 rounded-lg ${
              message.sender_id === user?.id 
                ? 'bg-brand-purple text-white' 
                : 'bg-gray-100'
            }`}
          >
            <p>{message.content}</p>
            <p className="text-xs mt-2 opacity-70">
              {new Date(message.created_at).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};