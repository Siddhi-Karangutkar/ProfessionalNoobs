// import React, { useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { 
//   Card, 
//   CardContent, 
//   CardDescription, 
//   CardFooter, 
//   CardHeader, 
//   CardTitle 
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useToast } from "@/hooks/use-toast";
// import { supabase } from '@/lib/supabase'; // Required for auth

// const sponsorTypes = ["Corporate", "Individual", "Government", "Non-Profit"];

// const RegisterForm = () => {
//   const [searchParams] = useSearchParams();
//   const defaultType = searchParams.get("type") || "vendor";
//   const { toast } = useToast();
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     name: "",
//     businessName: "",
//     phoneNumber: "",
//     sponsorType: [],
//     dropdownOpen: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         sponsorType: checked 
//           ? [...prev.sponsorType, value]
//           : prev.sponsorType.filter((t) => t !== value),
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e, type) => {
//     e.preventDefault();
    
//     try {
//       const { data: authData, error: authError } = await supabase.auth.signUp({
//         email: formData.email,
//         password: formData.password,
//         options: {
//           data: { // Add this for immediate profile access
//             full_name: formData.name,
//             phone_number: formData.phoneNumber,
//             user_type: type,
//             ...(type === 'sponsor' && { 
//               organization_name: formData.businessName,
//               sponsor_types: formData.sponsorType 
//             }),
//             ...(type === 'vendor' && { 
//               business_name: formData.businessName 
//             })
//           }
//         }
//       });
  
//       if (authError) throw authError;
  
//       // No need for separate profile insert with options.data above
//       toast({ title: "Check your email for confirmation!" });
      
//     } catch (error) {
//       toast({
//         title: "Registration failed",
//         description: error.message,
//         variant: "destructive"
//       });
//     }
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <Tabs defaultValue={defaultType} className="w-full">
//         <TabsList className="grid grid-cols-2 w-full">
//           <TabsTrigger value="vendor">Vendor</TabsTrigger>
//           <TabsTrigger value="sponsor">Sponsor</TabsTrigger>
//         </TabsList>
        
//         {['vendor', 'sponsor'].map((type) => (
//           <TabsContent key={type} value={type}>
//             <form onSubmit={(e) => handleSubmit(e, type)}>
//               <CardHeader>
//                 <CardTitle>{type === "vendor" ? "Vendor Registration" : "Sponsor Registration"}</CardTitle>
//                 <CardDescription>
//                   {type === "vendor" 
//                     ? "Create an account to showcase your business and connect with sponsors"
//                     : "Create an account to discover vendors and make a difference"}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Full Name</Label>
//                   <Input id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="businessName">{type === "vendor" ? "Business Name" : "Organization Name"}</Label>
//                   <Input id="businessName" name="businessName" placeholder="Enter name" value={formData.businessName} onChange={handleChange} required />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="phoneNumber">Phone Number</Label>
//                   <Input id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
//                 </div>
                
//                 {/* Sponsor Type Dropdown */}
//                 <div className="space-y-2">
//                   <Label>Sponsor Type</Label>
//                   <div className="relative">
//                     <button
//                       type="button"
//                       className="w-full border p-2 rounded-md text-left bg-white shadow-sm focus:ring-2 focus:ring-brand-purple h-[42px]"
//                       onClick={() => setFormData((prev) => ({ ...prev, dropdownOpen: !prev.dropdownOpen }))}
//                     >
//                       {formData.sponsorType.length ? formData.sponsorType.join(", ") : "Select Sponsor Types"}
//                     </button>
//                     {formData.dropdownOpen && (
//                       <div className="absolute w-full mt-2 border bg-white shadow-lg rounded-md p-3 z-10 max-h-48 overflow-y-auto">
//                         {sponsorTypes.map((type) => (
//                           <div key={type} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
//                             <input 
//                               type="checkbox" 
//                               id={type} 
//                               name="sponsorType" 
//                               value={type} 
//                               checked={formData.sponsorType.includes(type)} 
//                               onChange={handleChange} 
//                               className="w-5 h-5 text-brand-purple focus:ring-brand-purple"
//                             />
//                             <Label htmlFor={type} className="cursor-pointer">{type}</Label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="password">Password</Label>
//                   <Input id="password" name="password" type="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />
//                 </div>
                
//                 <div className="space-y-2">
//                   <Label htmlFor="confirmPassword">Confirm Password</Label>
//                   <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-blue">
//                   Register as {type.charAt(0).toUpperCase() + type.slice(1)}
//                 </Button>
//               </CardFooter>
//             </form>
//           </TabsContent>
//         ))}
//       </Tabs>
//     </Card>
//   );
// };

// export default RegisterForm;



import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';

const businessCategories = ["Technology", "Handicrafts", "Food & Beverage", "Retail", "Healthcare"];
const sponsorTypes = ["Corporate", "Individual", "Government", "Non-Profit"];

const RegisterForm = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get("type") || "vendor";
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    businessName: "",
    phoneNumber: "",
    businessType: [],  // For vendors
    sponsorType: [],    // For sponsors
    dropdownOpen: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter((t) => t !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
            phone_number: formData.phoneNumber,
            user_type: type,
            ...(type === 'vendor' && { 
              business_name: formData.businessName,
              business_type: formData.businessType
            }),
            ...(type === 'sponsor' && { 
              organization_name: formData.businessName,
              sponsor_type: formData.sponsorType
            })
          }
        }
      });
  
      if (authError) throw authError;
      toast({ title: "Check your email for confirmation!" });
      
    }  catch (error) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <Tabs defaultValue={defaultType} className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="vendor">Vendor</TabsTrigger>
          <TabsTrigger value="sponsor">Sponsor</TabsTrigger>
        </TabsList>
        
        {['vendor', 'sponsor'].map((type) => (
          <TabsContent key={type} value={type}>
            <form onSubmit={(e) => handleSubmit(e, type)}>
              <CardHeader>
                <CardTitle>{type === "vendor" ? "Vendor Registration" : "Sponsor Registration"}</CardTitle>
                <CardDescription>
                  {type === "vendor" 
                    ? "Create an account to showcase your business and connect with sponsors"
                    : "Create an account to discover vendors and make a difference"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessName">{type === "vendor" ? "Business Name" : "Organization Name"}</Label>
                  <Input id="businessName" name="businessName" placeholder="Enter name" value={formData.businessName} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
                </div>

                {/* Business Type (Vendors) */}
                {type === "vendor" && (
                  <div className="space-y-2">
                    <Label>Business Category</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {businessCategories.map((category) => (
                        <div key={category} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={category}
                            name="businessType"
                            value={category}
                            checked={formData.businessType.includes(category)}
                            onChange={handleChange}
                            className="w-5 h-5 text-brand-purple focus:ring-brand-purple"
                          />
                          <Label htmlFor={category}>{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sponsor Type (Sponsors) */}
                {type === "sponsor" && (
                  <div className="space-y-2">
                    <Label>Sponsor Type</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {sponsorTypes.map((sponsorType) => (
                        <div key={sponsorType} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={sponsorType}
                            name="sponsorType"
                            value={sponsorType}
                            checked={formData.sponsorType.includes(sponsorType)}
                            onChange={handleChange}
                            className="w-5 h-5 text-brand-purple focus:ring-brand-purple"
                          />
                          <Label htmlFor={sponsorType}>{sponsorType}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-blue">
                  Register as {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};
export default RegisterForm;