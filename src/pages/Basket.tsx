// src/pages/BasketPage.tsx
import React from 'react';
import { useCart } from '../components/CartContext';
import { Button } from '@/components/ui/button';

const BasketPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <div className="p-6 text-center">Your basket is empty.</div>;

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">🛒 Your Basket</h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center bg-white rounded-xl p-4 shadow">
            <div>
              <div className="font-semibold">{item.name}</div>
              <div>€{item.price.toFixed(2)} × {item.quantity}</div>
            </div>
            <div>
              <Button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-600 text-white">Remove</Button>
            </div>
          </div>
        ))}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>€{total.toFixed(2)}</span>
        </div>
        <Button onClick={clearCart} className="w-full bg-blue-500 hover:bg-blue-600 text-white">Clear Basket</Button>
      </div>
    </div>
  );
};

export default BasketPage;
