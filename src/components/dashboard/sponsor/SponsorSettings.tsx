// SponsorSettings.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SponsorSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" />
            <AvatarFallback>TI</AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline" className="mr-2">Upload New Logo</Button>
            <Button variant="destructive">Remove</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" defaultValue="Tech Innovations Inc." />
          </div>
          <div>
            <Label htmlFor="industry">Industry</Label>
            <Input id="industry" defaultValue="Technology" />
          </div>
        </div>

        <div>
          <Label htmlFor="mission">Mission Statement</Label>
          <textarea
            id="mission"
            className="w-full p-2 border rounded-md min-h-[100px]"
            defaultValue="Empowering innovation through strategic partnerships..."
          />
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="contact@techinnovations.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 987-6543" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-brand-blue hover:bg-brand-purple">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default SponsorSettings;