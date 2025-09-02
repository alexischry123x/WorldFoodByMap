import React from "react";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";

const BasketPage: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const increaseQty = (id: string) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      addToCart({ ...item, quantity: 1 }); // ✅ add one more
    }
  };

  const decreaseQty = (id: string) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      if (item.quantity > 1) {
        // reduce by one
        removeFromCart(id);
        addToCart({ ...item, quantity: item.quantity - 1 });
      } else {
        // remove completely
        removeFromCart(id);
      }
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6">
      <div className="max-w-3xl mx-auto bg-white/90 shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Your Basket</h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your basket is empty.</p>
            <Link
              to="/products"
              className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-semibold text-green-700">{item.name}</p>
                    <p className="text-gray-600">
                      €{item.price.toFixed(2)} x {item.quantity} ={" "}
                      <span className="font-semibold">
                        €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-xl font-bold text-green-800">
                Total: €{totalPrice.toFixed(2)}
              </p>
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Clear Basket
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BasketPage;
