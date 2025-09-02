import React from "react";
import { Link } from "react-router-dom";
import { villageData } from "../data/villageData";
import { useCart } from "../components/CartContext";

const Products: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Products</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(villageData).map((village) => (
            <div
              key={village.id}
              className="bg-white/90 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex flex-col justify-between"
            >
              {/* Product info */}
              <div>
                <h2 className="text-2xl font-bold text-green-700">
                  {village.product}
                </h2>
                <p className="text-gray-700">{village.name}</p>
                <p className="mt-2 text-gray-600">{village.description}</p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/village/${village.id}`}
                  className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 font-semibold"
                >
                  View
                </Link>

                <button
                  onClick={() =>
                    addToCart({
                      id: village.id,
                      name: village.product,
                      price: village.price ?? 0, // if you have price in data
                    })
                  }
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 font-semibold"
                >
                  Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
