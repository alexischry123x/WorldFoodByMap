// src/pages/ProductPurchase.tsx
import React, { useState } from 'react';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from "../components/CartContext";
import { villageData } from "../components/villageData";

interface Props {
  productId: string;
  onBack: () => void;
}

const ProductPurchase: React.FC<Props> = ({ productId, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const { addToCart } = useCart();

  const village = villageData[productId];
  if (!village) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart({
      id: village.id,
      name: village.product,
      price: village.priceValue, // numeric
      quantity,
    });
    alert(`Added ${quantity} × ${village.product} to your basket!`);
  };

  const handlePurchase = () => {
    alert('Thank you! Your order has been placed.');
    onBack();
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <Button onClick={onBack} variant="outline" className="mb-6">← Back to Products</Button>
      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">🛒 {village.product}</h1>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span>Quantity:</span>
            <Input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20"
            />
          </div>
          <div className="flex justify-between items-center font-semibold">
            <span>Total:</span>
            <span>€{(village.priceValue * quantity).toFixed(2)}</span>
          </div>

          <Label>Email:</Label>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />

          <Button onClick={handleAddToCart} className="w-full bg-green-500 hover:bg-green-600 text-white">
            🛒 Add to Basket
          </Button>

          <Button onClick={handlePurchase} className="w-full bg-blue-500 hover:bg-blue-600 text-white" disabled={!email}>
            <CreditCard className="mr-2 h-5 w-5"/> Complete Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchase;
