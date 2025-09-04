import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const products = [
  { id: '1', name: 'Traditional Lace', village: 'Lefkara' },
  { id: '2', name: 'Wine & Zivania', village: 'Omodos' },
  { id: '3', name: 'Honey & Preserves', village: 'Kakopetria' },
  { id: '4', name: 'Rose Products', village: 'Platres' },
  { id: '5', name: 'Olive Oil', village: 'Lania' }
];

const Products: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/village/${product.id}`}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">from {product.village}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Products;
