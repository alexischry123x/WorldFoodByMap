import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider, useCart } from "./components/CartContext";

import Index from "./pages/Index";
import BasketPage from "./pages/Basket";
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

// Basket icon component visible on all pages
const Basket: React.FC = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      to="/basket"
      className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center space-x-2 cursor-pointer z-50"
      title="View Basket"
    >
      <span role="img" aria-label="basket" className="text-xl">
        🛒
      </span>
      <span className="font-semibold">
        {totalItems} item{totalItems !== 1 ? "s" : ""}
      </span>
    </Link>
  );
};

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

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
              {/* Desktop Sidebar */}
              <div className="hidden md:flex fixed top-0 left-0 h-full w-48 flex-col bg-white shadow-lg p-6 z-50">
                <div className="text-2xl font-bold mb-8">World Food Map</div>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="font-semibold text-blue-700 hover:text-blue-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile top bar */}
              <div className="md:hidden flex justify-between items-center bg-white shadow p-4 sticky top-0 z-50">
                <div className="text-xl font-bold">World Food Map</div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded bg-blue-100"
                  aria-label="Toggle menu"
                >
                  ☰
                </button>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full flex flex-col p-4 gap-2 z-40">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="font-semibold text-blue-700 hover:text-blue-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Basket icon visible on all pages */}
              <Basket />

              {/* Main Content */}
              <div className="md:ml-48 p-4">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/basket" element={<BasketPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<ContactUs />} />

                  {/* Village detail */}
                  <Route path="/village/:villageId" element={<VillageDetail />} />
                  <Route path="/story/:villageId" element={<StoryDetail />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </BrowserRouter>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
