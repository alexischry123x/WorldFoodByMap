// App.tsx
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
import GoogleMapsCyprus from "./components/GoogleMapsCyprus";

import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [currentCountry, setCurrentCountry] = useState("Cyprus");

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <Toaster />
            <Sonner />

            <div className="flex h-screen">
              {/* Sidebar */}
              <nav className="bg-white shadow-md w-64 p-6 flex flex-col justify-start">
                <h2 className="text-xl font-bold mb-6">{currentCountry} Food Map</h2>
                <Link to="/" className="mb-3 text-blue-700 hover:text-blue-900 font-semibold">Map</Link>
                <Link to="/about" className="mb-3 text-blue-700 hover:text-blue-900 font-semibold">About</Link>
                <Link to="/products" className="mb-3 text-blue-700 hover:text-blue-900 font-semibold">Products</Link>
                <Link to="/gallery" className="mb-3 text-blue-700 hover:text-blue-900 font-semibold">Gallery</Link>
                <Link to="/events" className="mb-3 text-blue-700 hover:text-blue-900 font-semibold">Events</Link>
                <Link to="/faq" className="mb-3 text-blue-700 hover:text-blue-900 font-semibold">FAQ</Link>
                <Link to="/contact" className="mb-3 text-blue-700 hover:text-blue-900 font-semibold">Contact Us</Link>
                <Link to="/basket" className="mt-auto text-blue-700 hover:text-blue-900 font-semibold">Basket</Link>
              </nav>

              {/* Main content */}
              <div className="flex-1 overflow-auto">
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={
                      <GoogleMapsCyprus onCountryHover={(country) => setCurrentCountry(country)} />
                    } />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/village/:villageId" element={<VillageDetail />} />
                    <Route path="/story/:villageId" element={<StoryDetail />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
