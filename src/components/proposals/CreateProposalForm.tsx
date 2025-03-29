// src/components/proposals/CreateProposalForm.tsx
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

type ProposalFormData = {
  title: string;
  description: string;
  requested_amount: number;
};

export const CreateProposalForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ProposalFormData>();

  const onSubmit = async (data: ProposalFormData) => {
    try {
      const { error } = await supabase
        .from('proposals')
        .insert({
          user_id: user?.id,
          ...data,
          status: 'draft'
        });

      if (error) throw error;
      onSuccess();
    } catch (error) {
      console.error('Proposal creation failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="title">Proposal Title</Label>
        <Input 
          id="title" 
          {...register('title', { required: true })} 
          placeholder="Storefront Renovation" 
        />
      </div>

      <div>
        <Label htmlFor="description">Project Description</Label>
        <Textarea
          id="description"
          {...register('description', { required: true })}
          placeholder="Describe your project in detail..."
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="requested_amount">Requested Amount ($)</Label>
        <Input
          id="requested_amount"
          type="number"
          {...register('requested_amount', { required: true, valueAsNumber: true })}
          placeholder="5000"
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Submit Proposal'}
      </Button>
    </form>
  );
};