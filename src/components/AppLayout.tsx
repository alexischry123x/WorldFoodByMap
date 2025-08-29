import React from "react";
import WorldFoodByMap from "./WorldFoodByMap";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react"; // using lucide-react world icon

const AppLayout: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* Header with Basket */}
      <header className="p-4 flex justify-between items-center bg-white shadow">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Globe className="h-6 w-6 text-green-600" />
          World Food Map
        </h1>
        <div
          className="cursor-pointer text-lg font-semibold"
          onClick={() => navigate("/basket")}
        >
          🛒 {totalItems} item{totalItems !== 1 ? "s" : ""}
        </div>
      </header>

      {/* Main content */}
      <WorldFoodByMap />
    </div>
  );
};

export default AppLayout;
