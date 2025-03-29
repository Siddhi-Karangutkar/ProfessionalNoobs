
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase'; // Required for auth

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("vendor"); // Default to vendor
  const { toast } = useToast();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password
  //     });
  
  //     if (error) throw error;
  
  //     // Get user profile
  //     const { data: profile } = await supabase
  //       .from('profiles')
  //       .select('user_type')
  //       .eq('id', data.user.id)
  //       .single();
  
  //     toast({ title: "Login successful!" });
  //     navigate(`/dashboard/${profile.user_type}`);
  //   } catch (error) {
  //     toast({
  //       title: "Login failed",
  //       description: error.message,
  //       variant: "destructive"
  //     });
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password
  //     });
  
  //     if (error) throw error;
  
  //     // Force refresh auth state
  //     window.location.reload();
      
  //   } catch (error) {
  //     toast({
  //       title: "Login failed",
  //       description: error.message.includes('Email not confirmed') 
  //         ? "Confirm your email first" 
  //         : error.message,
  //       variant: "destructive"
  //     });
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
  
      if (error) throw error;
  
      // Force state refresh
      window.location.href = `/dashboard/${data.user.user_metadata.user_type}`;
  
    } catch (error) {
      toast({
        title: "Login failed",
        description: error.message.includes('Invalid login credentials') 
          ? "Check email/password"
          : error.message,
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Sign in to your account to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link 
                to="/forgot-password" 
                className="text-sm text-brand-purple hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Account Type</Label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="vendor" 
                  checked={userType === "vendor"} 
                  onCheckedChange={() => setUserType("vendor")}
                />
                <Label htmlFor="vendor" className="text-sm font-normal">
                  Vendor
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="sponsor" 
                  checked={userType === "sponsor"} 
                  onCheckedChange={() => setUserType("sponsor")}
                />
                <Label htmlFor="sponsor" className="text-sm font-normal">
                  Sponsor
                </Label>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-blue">
            Sign In
          </Button>
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-brand-purple hover:underline">
              Create an account
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
