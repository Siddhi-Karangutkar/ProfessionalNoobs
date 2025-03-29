// VendorSettings.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const VendorSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <Button variant="outline" className="mr-2">Upload New Photo</Button>
            <Button variant="destructive">Remove</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" defaultValue="Sarah's Crafts" />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input id="category" defaultValue="Crafts & Handmade" />
          </div>
        </div>

        <div>
          <Label htmlFor="description">Business Description</Label>
          <textarea
            id="description"
            className="w-full p-2 border rounded-md min-h-[100px]"
            defaultValue="Handmade crafts and custom decorations..."
          />
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="sarah@crafts.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-brand-purple hover:bg-brand-blue">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default VendorSettings;