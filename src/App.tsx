// src/App.tsx
import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "./components/CartContext";
import { useState } from "react";

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

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MenuLinks = () => (
    <>
      <Link to="/" className="font-bold text-gray-800 hover:text-blue-700">Map</Link>
      <Link to="/about" className="font-bold text-gray-800 hover:text-blue-700">About</Link>
      <Link to="/products" className="font-bold text-gray-800 hover:text-blue-700">Products</Link>
      <Link to="/gallery" className="font-bold text-gray-800 hover:text-blue-700">Gallery</Link>
      <Link to="/events" className="font-bold text-gray-800 hover:text-blue-700">Events</Link>
      <Link to="/faq" className="font-bold text-gray-800 hover:text-blue-700">FAQ</Link>
      <Link to="/contact" className="font-bold text-gray-800 hover:text-blue-700">Contact Us</Link>
      <Link to="/basket" className="font-bold text-gray-800 hover:text-blue-700">Basket</Link>
    </>
  );

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <Toaster />
            <Sonner />

            <BrowserRouter>
              <div className="flex min-h-screen">
                {/* Sidebar for desktop */}
                <aside className="hidden md:flex w-64 bg-white shadow-md p-6 flex-col gap-4 sticky top-0 h-screen">
                  <h2 className="text-xl font-bold text-blue-700 mb-4">World Food Map</h2>
                  <MenuLinks />
                </aside>

                {/* Mobile menu */}
                <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-50 p-4 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-blue-700">World Food Map</h2>
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-2xl font-bold"
                  >
                    ☰
                  </button>
                  {mobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-2 p-4">
                      <MenuLinks />
                    </div>
                  )}
                </div>

                {/* Main content */}
                <main className="flex-1 p-6 bg-gray-50 mt-16 md:mt-0">
                  <Routes>
                    <Route path="/" element={<Index />} />
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
                </main>
              </div>
            </BrowserRouter>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
