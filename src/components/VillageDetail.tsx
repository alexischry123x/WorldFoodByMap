// src/components/VillageDetail.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { villageData } from "./villageData";
import ProductPurchase from "../pages/ProductPurchase";

const VillageDetail: React.FC = () => {
  const { villageId } = useParams<{ villageId: string }>();
  const village = villageData[villageId!];

  const [showPurchase, setShowPurchase] = useState(false);

  if (!village) return <div className="p-6 text-center">Village not found.</div>;

  if (showPurchase) {
    return <ProductPurchase productId={village.id} onBack={() => setShowPurchase(false)} />;
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-800">{village.product}</h1>
        <p className="text-gray-700">{village.description}</p>
        <p className="text-sm text-green-600 font-semibold">
          Price: €{village.priceValue} {village.price.includes('-') ? `(${village.price})` : ''}
        </p>
        <p className="text-gray-600">{village.villageInfo}</p>

        {village.photosLeft && (
          <div className="grid grid-cols-2 gap-4">
            {village.photosLeft.map((src, idx) => (
              <img key={idx} src={src} alt={village.name} className="rounded-xl" />
            ))}
          </div>
        )}

        <button
          onClick={() => setShowPurchase(true)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg"
        >
          🛒 Buy {village.product}
        </button>
      </div>
    </div>
  );
};

export default VillageDetail;
