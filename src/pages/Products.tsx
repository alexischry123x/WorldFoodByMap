// src/pages/Products.tsx
import React, { useState } from "react";
import { villageData } from "../data/villageData";
import ProductPurchase from "./ProductPurchase";

const Products: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleBack = () => setSelectedProductId(null);

  // Show ProductPurchase when a product is selected
  if (selectedProductId) {
    const village = villageData[selectedProductId];
    return (
      <ProductPurchase
        productId={village.id}
        productName={village.product}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Products</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(villageData).map((village) => (
            <div
              key={village.id}
              onClick={() => setSelectedProductId(village.id)}
              className="bg-white/90 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <h2 className="text-2xl font-bold text-green-700">{village.product}</h2>
              <p className="text-gray-700">{village.name}</p>
              <p className="mt-2 text-gray-600">{village.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
