import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DomeCameras from "./pages/DomeCameras";
import BulletCameras from "./pages/BulletCameras";
import PtzCameras from "./pages/PtzCameras";
import WirelessCameras from "./pages/WirelessCameras";
import ThermalCameras from "./pages/ThermalCameras";
import DoorbellCameras from "./pages/DoorbellCameras";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cameras/dome" element={<DomeCameras />} />
          <Route path="/cameras/bullet" element={<BulletCameras />} />
          <Route path="/cameras/ptz" element={<PtzCameras />} />
          <Route path="/cameras/wireless" element={<WirelessCameras />} />
          <Route path="/cameras/thermal" element={<ThermalCameras />} />
          <Route path="/cameras/doorbell" element={<DoorbellCameras />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
