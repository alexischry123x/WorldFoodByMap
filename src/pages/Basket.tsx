import React from "react";
import { useCart } from "../components/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Basket: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    addToCart({ ...cart.find(i => i.id === id)!, quantity: quantity - cart.find(i => i.id === id)!.quantity });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Basket</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your basket is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">€{item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-20"
                    />
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: €{totalPrice.toFixed(2)}</h2>
              <div className="space-x-2">
                <Button
                  onClick={clearCart}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                >
                  Clear Basket
                </Button>
                <Button
                  onClick={() => alert("Proceed to checkout!")}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
