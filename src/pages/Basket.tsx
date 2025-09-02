import React from 'react';
import { useCart } from '../components/CartContext';

const BasketPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Basket</h1>
      {cart.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name} × {item.quantity}</span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
              </li>
            ))}
          </ul>
          <p className="font-bold mb-4">Total: €{total.toFixed(2)}</p>
          <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded">Clear Basket</button>
        </>
      )}
    </div>
  );
};

export default BasketPage;
