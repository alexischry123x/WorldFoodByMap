import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Basket: React.FC = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Link
      to="/basket"
      className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center space-x-3 cursor-pointer z-50 border border-gray-200 hover:bg-gray-50 transition"
      title="View Basket"
    >
      <span role="img" aria-label="basket" className="text-2xl">
        🛒
      </span>
      <div className="flex flex-col items-start">
        <span className="font-semibold">
          {totalItems} item{totalItems !== 1 ? "s" : ""}
        </span>
        <span className="text-sm text-gray-600">€{totalPrice.toFixed(2)}</span>
      </div>
    </Link>
  );
};

export default Basket;
