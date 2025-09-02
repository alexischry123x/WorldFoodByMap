import React from "react";
import { useCart } from "../components/CartContext";
import { Button } from "@/components/ui/button";

const BasketPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen p-6 bg-green-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Your Basket is Empty</h1>
        <p className="text-gray-700">Add some products to your basket to see them here.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Your Basket</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 flex justify-between items-center shadow"
          >
            <div>
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-600">
                €{item.priceValue.toFixed(2)} × {item.quantity} = €
                {(item.priceValue * item.quantity).toFixed(2)}
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6 p-4 bg-white rounded-xl shadow">
          <span className="font-semibold text-lg">Total ({totalItems} items):</span>
          <span className="font-bold text-lg text-green-700">€{totalPrice.toFixed(2)}</span>
        </div>

        <div className="mt-4 flex gap-4">
          <Button
            variant="secondary"
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Clear Basket
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
