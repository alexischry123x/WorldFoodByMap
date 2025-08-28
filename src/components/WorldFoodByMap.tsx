import React, { useState } from 'react';
import GoogleMapsCyprus from './GoogleMapsCyprus';
import VillageDetail from './VillageDetail';
import ProductPurchase from './ProductPurchase';
import StoryDetail from './StoryDetail';

type View = 'map' | 'village' | 'purchase' | 'story';

interface Village {
  id: string;
  name: string;
  x: number;
  y: number;
  product: string;
}

const WorldFoodByMap: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('map');
  const [selectedVillage, setSelectedVillage] = useState<string>('');

  const handleVillageClick = (village: Village) => {
    setSelectedVillage(village.id);
    setCurrentView('village');
  };

  const handleBackToMap = () => {
    setCurrentView('map');
    setSelectedVillage('');
  };

  const handleBuyProduct = () => {
    setCurrentView('purchase');
  };

  const handleReadStory = () => {
    setCurrentView('story');
  };

  const handleBackToVillage = () => {
    setCurrentView('village');
  };

  return (
    <div className="min-h-screen">
      {currentView === 'map' && (
        <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200 flex items-center justify-center p-6">
          <GoogleMapsCyprus onVillageClick={handleVillageClick} />
        </div>
      )}
      
      {currentView === 'village' && (
        <VillageDetail 
          villageId={selectedVillage}
          onBack={handleBackToMap}
          onBuyProduct={handleBuyProduct}
          onReadStory={handleReadStory}
        />
      )}
      
      {currentView === 'purchase' && (
        <ProductPurchase 
          villageId={selectedVillage}
          onBack={handleBackToVillage}
        />
      )}
      
      {currentView === 'story' && (
        <StoryDetail 
          villageId={selectedVillage}
          onBack={handleBackToVillage}
        />
      )}
    </div>
  );
};

export default WorldFoodByMap;