// src/components/VillageDetail.tsx
import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { villageData } from './villageData'; // import all villages

interface Props {
  villageId: string;
  onBack: () => void;
  onBuyProduct: () => void;
  onReadStory: () => void;
}

const VillageDetail: React.FC<Props> = ({ villageId, onBack, onBuyProduct, onReadStory }) => {
  const village = villageData[villageId];
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!village) return null;

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setCarouselOpen(true);
  };

  const nextImage = () => setCurrentIndex((currentIndex + 1) % village.images.length);
  const prevImage = () => setCurrentIndex((currentIndex - 1 + village.images.length) % village.images.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6">
      <div className="max-w-4xl mx-auto relative">
        <Button onClick={onBack} variant="outline" className="mb-6 bg-white/80 hover:bg-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Map
        </Button>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <h1 className="text-5xl font-bold text-amber-800 mb-6">{village.name}</h1>

          {/* Image thumbnails */}
          <div className="flex justify-center gap-4 mb-6 overflow-x-auto">
            {village.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={village.name}
                className="w-32 h-24 object-cover rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform"
                onClick={() => openCarousel(idx)}
              />
            ))}
          </div>

          {/* Village Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-6 text-left">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">About {village.name}</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">{village.villageInfo}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><strong>District:</strong> {village.district}</div>
              <div><strong>Population:</strong> {village.population.toLocaleString()}</div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-6">
            <h2 className="text-2xl text-amber-600 font-semibold mb-3">{village.product}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{village.description}</p>
            <div className="mt-4 text-xl font-bold text-green-600">Price Range: {village.price}</div>
          </div>

          {/* Actions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">Purchase Product</h3>
                <Button onClick={onBuyProduct} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 text-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy This Product
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Traditional Story</h3>
                <p className="text-gray-700 italic leading-relaxed mb-3">"{village.story}"</p>
                <p className="text-sm text-blue-600 font-medium mb-4">— {village.storyteller}</p>
                <Button onClick={onReadStory} variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 py-3 text-lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Modal */}
        {carouselOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <img src={village.images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-auto rounded-xl shadow-lg" />
              <button onClick={() => setCarouselOpen(false)} className="absolute top-2 right-2 text-white text-3xl font-bold">&times;</button>
              <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold">&#10094;</button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold">&#10095;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VillageDetail;
