// src/components/Basket.tsx
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const Basket: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      to="/basket"
      className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center space-x-2 cursor-pointer z-50"
      title="View Basket"
    >
      <span role="img" aria-label="basket" className="text-xl">🛒</span>
      <span className="font-semibold">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
    </Link>
  );
};

export default Basket;
