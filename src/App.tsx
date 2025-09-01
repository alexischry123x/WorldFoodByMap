// src/App.tsx
import { useState, useEffect } from "react";
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

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Map", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
    { name: "Basket", path: "/basket" },
  ];

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="flex h-screen">

                {/* Sidebar for desktop */}
                {!isMobile && (
                  <div className="w-56 bg-white shadow-md flex flex-col p-4">
                    {menuItems.map(item => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="px-4 py-3 rounded-lg text-gray-800 hover:bg-blue-100 hover:text-blue-800 font-semibold transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Main content */}
                <div className="flex-1 relative">
                  
                  {/* Mobile top bar */}
                  {isMobile && (
                    <div className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
                      <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-2xl font-bold"
                      >
                        ☰
                      </button>
                      <span className="font-bold text-blue-700">World Food By Map</span>
                    </div>
                  )}

                  {/* Mobile menu overlay */}
                  {isMobile && mobileMenuOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col p-6 gap-4">
                      {menuItems.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-lg font-semibold text-gray-800 hover:text-blue-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Routes */}
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

                </div>
              </div>
            </BrowserRouter>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
