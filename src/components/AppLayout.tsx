import React from "react";
import WorldFoodByMap from "./WorldFoodByMap";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import cyprusFlag from "../assets/cy.png";

const AppLayout: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* Header with Basket */}
      <header className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white shadow gap-2 sm:gap-0">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <img
            src={cyprusFlag}
            alt="Cyprus Flag"
            className="w-6 h-4 object-cover"
          />
          Cyprus Food Map
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
