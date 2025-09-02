import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Village } from "../data/VillageData";

interface ProductPurchaseProps {
  village: Village;
}

const ProductPurchase: React.FC<ProductPurchaseProps> = ({ village }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const numericPrice = typeof village.price === "string"
      ? parseFloat(village.price.replace("€", "").trim())
      : village.price;

    addToCart({
      id: village.id,
      name: village.product,
      price: numericPrice,
      quantity,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-16 border rounded px-2 py-1"
      />
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Basket
      </button>
    </div>
  );
};

export default ProductPurchase;
