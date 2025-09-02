import React from "react";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";

const BasketPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Your Basket</h1>

      {cart.length === 0 ? (
        <p>
          Your basket is empty.{" "}
          <Link to="/products" className="text-blue-500 underline">
            Browse products
          </Link>
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>€{item.price.toFixed(2)} × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total:</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Clear Basket
          </button>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
