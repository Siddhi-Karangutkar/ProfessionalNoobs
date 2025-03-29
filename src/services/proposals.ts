import { supabase } from '@/lib/supabase'; // Required for DB operations

export const getProposals = async (userId: string) => {
    return supabase
      .from('proposals')
      .select('*')
      .eq('user_id', userId)
      // .order('created_at', { ascending: false });
  };
  
  export const createProposal = async (proposal: { 
    title: string;
    description: string;
    userId: string 
  }) => {
    return supabase
      .from('proposals')
      .insert({
        ...proposal,
        user_id: userId
      });
  };
  
  export const updateProposal = async (
    id: number,
    updates: { title?: string; description?: string; status?: string }
  ) => {
    return supabase
      .from('proposals')
      .update({ ...updates, updated_at: new Date() })
      .eq('id', id);
  };
  
  export const deleteProposal = async (id: number) => {
    return supabase
      .from('proposals')
      .delete()
      .eq('id', id);
  };