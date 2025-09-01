import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "./components/CartContext";

import Index from "./pages/Index";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";

import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";

import VillageDetail from "./components/VillageDetail";
import StoryDetail from "./components/StoryDetail";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />

          {/* Navigation */}
          <nav className="bg-white shadow-md p-4 flex justify-center gap-6 sticky top-0 z-50">
            <Link to="/" className="font-bold text-blue-700 hover:text-blue-900">Map</Link>
            <Link to="/about" className="font-bold text-blue-700 hover:text-blue-900">About</Link>
            <Link to="/products" className="font-bold text-blue-700 hover:text-blue-900">Products</Link>
            <Link to="/gallery" className="font-bold text-blue-700 hover:text-blue-900">Gallery</Link>
            <Link to="/events" className="font-bold text-blue-700 hover:text-blue-900">Events</Link>
            <Link to="/faq" className="font-bold text-blue-700 hover:text-blue-900">FAQ</Link>
            <Link to="/contact" className="font-bold text-blue-700 hover:text-blue-900">Contact Us</Link>
            <Link to="/basket" className="font-bold text-blue-700 hover:text-blue-900">Basket</Link>
          </nav>

          {/* Routes */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events" element={<Events />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<ContactUs />} />

              {/* Village pages */}
              <Route path="/village/:villageId" element={<VillageDetailWrapper />} />
              <Route path="/story/:villageId" element={<StoryDetailWrapper />} />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
