import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from './CartContext';

interface ProductVariation {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

interface ProductPurchaseProps {
  product: ProductVariation;
  villageId: string;
}

const ProductPurchase: React.FC<ProductPurchaseProps> = ({ product, villageId }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `${villageId}-${product.id}`,
      name: product.name,
      price: product.price,
      quantity,
    });
    alert(`Added ${quantity} x "${product.name}" to your basket!`);
  };

  return (
    <div className="mt-2">
      {/* Quantity selector */}
      <Input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => {
          const value = Number(e.target.value);
          setQuantity(isNaN(value) || value < 1 ? 1 : value);
        }}
        className="w-20 mx-auto mb-2"
      />

      {/* Add to Basket Button */}
      <Button
        onClick={handleAddToCart}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 text-sm flex items-center justify-center"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Basket
      </Button>
    </div>
  );
};

export default ProductPurchase;
