import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from './CartContext'; // <-- import CartContext

interface Props {
  villageId: string;
  onBack: () => void;
}

const ProductPurchase: React.FC<Props> = ({ villageId, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const { addToCart } = useCart(); // <-- get addToCart function

  const handleAddToCart = () => {
    addToCart({
      id: villageId,
      name: `Product from Village ${villageId}`,
      price: 25,
      quantity,
    });
    alert(`Added ${quantity} item(s) to your basket!`);
  };

  const handlePurchase = () => {
    alert('Thank you! Your order has been placed. You will receive a confirmation email shortly.');
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 p-6">
      <div className="max-w-2xl mx-auto">
        <Button 
          onClick={onBack}
          variant="outline" 
          className="mb-6 bg-white/80 hover:bg-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Village
        </Button>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            🛒 Complete Your Purchase
          </h1>

          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Order Summary</h3>
              <div className="flex justify-between items-center mb-4">
                <span>Quantity:</span>
                <Input 
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-20"
                />
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-green-600">€{(25 * quantity).toFixed(2)}</span>
              </div>
            </div>

            {/* Email & Shipping */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="address">Shipping Address</Label>
                <Input id="address" placeholder="Your full address" />
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-green-500 mb-2" />
                <span>Secure Payment</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="h-8 w-8 text-blue-500 mb-2" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="h-8 w-8 text-purple-500 mb-2" />
                <span>Easy Returns</span>
              </div>
            </div>

            {/* Buttons */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg"
            >
              🛒 Add to Basket
            </Button>

            <Button
              onClick={handlePurchase}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 text-lg"
              disabled={!email}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Complete Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchase;
