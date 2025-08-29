import React from "react";
import GoogleMapsCyprus from "./GoogleMapsCyprus";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const AppLayout: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleVillageClick = (village: any) => {
    console.log("Village clicked:", village);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-white shadow">
        <h1 className="text-xl font-bold">🌎 World Food Map</h1>
        <div
          className="cursor-pointer text-lg font-semibold"
          onClick={() => navigate("/basket")}
        >
          🛒 {totalItems} item{totalItems !== 1 ? "s" : ""}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto my-6 px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left description */}
          <div className="md:w-1/5 p-6 bg-gradient-to-b from-blue-400 via-blue-300 to-green-300 text-white rounded-l-2xl text-center mb-4 md:mb-0">
            <h2 className="font-bold mb-2 text-lg">Handpicked Quality</h2>
            <p className="text-sm">
              All items are personally selected by us directly from the villages,
              ensuring the best quality and proper quantity.
            </p>
          </div>

          {/* Map */}
          <div className="md:flex-1 md:mx-4">
            <GoogleMapsCyprus onVillageClick={handleVillageClick} />
          </div>

          {/* Right description */}
          <div className="md:w-1/5 p-6 bg-gradient-to-b from-blue-400 via-blue-300 to-green-300 text-white rounded-r-2xl text-center mt-4 md:mt-0">
            <h2 className="font-bold mb-2 text-lg">Authentic Experience</h2>
            <p className="text-sm">
              Visit villages virtually, learn their stories, and get products
              crafted by local artisans.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
