import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Basket: React.FC = () => {
  const { cart } = useCart();

  // Count all items in the basket
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems === 0) {
    // If basket is empty, hide the floating icon (optional)
    return null;
  }

  return (
    <Link
      to="/basket"
      className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center space-x-2 cursor-pointer z-50 hover:scale-105 transition-transform"
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

export default Basket;
