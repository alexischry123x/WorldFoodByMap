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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Menu items
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

                {/* Sidebar */}
                <div
                  className={`
                    bg-white shadow-md z-50
                    ${isMobile ? "fixed top-0 left-0 w-full h-auto flex justify-between p-4" : "relative w-20 hover:w-56 transition-all duration-300"}
                    flex flex-col
                  `}
                  onMouseEnter={() => !isMobile && setSidebarOpen(true)}
                  onMouseLeave={() => !isMobile && setSidebarOpen(false)}
                >
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`
                        flex items-center gap-2 px-4 py-3 rounded-lg
                        hover:bg-blue-100 hover:text-blue-800 transition-colors
                        ${isMobile || sidebarOpen ? "justify-start" : "justify-center"}
                      `}
                    >
                      <span className={isMobile || sidebarOpen ? "font-bold" : "sr-only"}>
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Main Content */}
                <div className={`flex-1 overflow-auto ${isMobile ? "mt-20" : "ml-20"}`}>
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
