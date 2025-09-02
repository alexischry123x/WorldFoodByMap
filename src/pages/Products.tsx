// src/pages/Products.tsx
import React from "react";
import { villageData } from "../data/villageData";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Products</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(villageData).map((village) => (
            <Link
              key={village.id}
              to={`/village/${village.id}`}
              className="bg-white/90 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold text-green-700">{village.product}</h2>
              <p className="text-gray-700">{village.name}</p>
              <p className="mt-2 text-gray-600">{village.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
