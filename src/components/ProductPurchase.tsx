import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { villageData } from './villageData';

const ProductPurchase: React.FC = () => {
  const { villageId } = useParams();
  const village = villageId ? villageData[villageId] : undefined;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!village) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart({ id: village.id, name: village.product, price: village.minPrice, quantity });
    alert(`Added ${quantity} × ${village.product} to your basket!`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Buy {village.product}</h1>
      <p className="mb-2">Price: €{village.minPrice}</p>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        className="border p-2 mb-4"
      />
      <div className="flex gap-4">
        <button onClick={handleAddToCart} className="bg-green-500 text-white px-4 py-2 rounded">
          Add to Basket
        </button>
        <button onClick={() => navigate(-1)} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductPurchase;
