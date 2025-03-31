export interface Message {
    id: string;
    content: string;
    sender_id: string;
    receiver_id: string;
    read: boolean;
    created_at: string;
    sender: {
      business_name: string;
    };
  }