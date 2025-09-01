import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { villageImages } from './villageImages';

interface Village {
  id: string;
  name: string;
  product: string;
  description: string;
  villageInfo: string;
  population: number;
  district: string;
  price: string;
  story: string;
  storyteller: string;
}

const villageData: Record<string, Village> = {
  // ... your villageData here (unchanged)
};

interface Props {
  villageId: string;
  onBack: () => void;
  onBuyProduct: () => void;
  onReadStory: () => void;
}

import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VillageDetail: React.FC<Props> = ({ villageId, onBack, onBuyProduct, onReadStory }) => {
  const village = villageData[villageId];
  const [modalOpen, setModalOpen] = useState(false);
  
  if (!village) return null;

  const images = villageImages[villageId] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6 flex relative">
      {/* Left images for desktop */}
      <div className="hidden md:flex flex-col space-y-4 sticky top-20 w-32">
        {images.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt={village.name} 
            className="rounded-lg cursor-pointer hover:scale-105 transition-all"
            onClick={() => setModalOpen(true)}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto">
        <Button 
          onClick={onBack}
          variant="outline" 
          className="mb-6 bg-white/80 hover:bg-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Map
        </Button>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold text-amber-800 mb-6 cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              {village.name}
            </h1>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-6 text-left">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">About {village.name}</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">{village.villageInfo}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>District:</strong> {village.district}</div>
                <div><strong>Population:</strong> {village.population.toLocaleString()}</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl mb-6">
              <h2 className="text-2xl text-amber-600 font-semibold mb-3">{village.product}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{village.description}</p>
              <div className="mt-4 text-xl font-bold text-green-600">
                Price Range: {village.price}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">Purchase Product</h3>
                <p className="text-gray-600 mb-4">Get authentic {village.product.toLowerCase()} directly from {village.name}</p>
                <Button 
                  onClick={onBuyProduct}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 text-lg"
                >
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
                
                <Button 
                  onClick={onReadStory}
                  variant="outline"
                  className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 py-3 text-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right images for desktop */}
      <div className="hidden md:flex flex-col space-y-4 sticky top-20 w-32">
        {images.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt={village.name} 
            className="rounded-lg cursor-pointer hover:scale-105 transition-all"
            onClick={() => setModalOpen(true)}
          />
        ))}
      </div>

      {/* Fullscreen modal carousel */}
      <Modal 
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Village Images"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70"
      >
        <div className="w-full max-w-4xl mx-auto">
          <Carousel showThumbs={true} infiniteLoop={true} dynamicHeight={true}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img src={src} alt={`Slide ${idx}`} className="rounded-lg" />
              </div>
            ))}
          </Carousel>
          <Button 
            onClick={() => setModalOpen(false)}
            className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg"
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default VillageDetail;
