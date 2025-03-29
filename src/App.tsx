
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VendorDashboardPage from "./pages/VendorDashboardPage";
import SponsorDashboardPage from "./pages/SponsorDashboardPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import HowItWorks from "./pages/HowItWorks";
import SuccessStories from "./pages/SuccessStories";
import FaqPage from "./pages/FaqPage"; // Ensure this exists
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Vendor Dashboard with Nested Routes */}
          <Route path="/dashboard/vendor/*" element={<VendorDashboardPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/FaqPage" element={<FaqPage />} />
          <Route path="/HowItWorks" element={<HowItWorks />} /> 
          <Route path="/SuccessStories" element={<SuccessStories />} /> 
          {/* Sponsor Dashboard with Nested Routes */}
          <Route path="/dashboard/sponsor/*" element={<SponsorDashboardPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
