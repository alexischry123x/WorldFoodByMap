import React from 'react';
import { ArrowLeft, ShoppingCart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  images: string[]; // New: array of image URLs
}

const villageData: Record<string, Village> = {
  '1': {
    id: '1',
    name: 'Lefkara',
    product: 'Traditional Lace',
    villageInfo: 'Lefkara is a small village in Cyprus, in the Larnaca district. It has a population of 1,100. Lefkara is famous for their traditional lace because this product has been made in Lefkara since the 15th century, when Leonardo da Vinci visited and bought lace for the altar of Milan Cathedral.',
    population: 1100,
    district: 'Larnaca',
    description: 'Famous for its intricate handmade lace, a UNESCO recognized craft passed down through generations.',
    price: '€45-150',
    story: 'My grandmother taught me when I was just 8 years old. Each pattern tells a story of our village...',
    storyteller: 'Maria Constantinou, 78',
    images: [
      '/images/lefkara1.jpg',
      '/images/lefkara2.jpg',
      '/images/lefkara3.jpg',
    ],
  },
  '2': {
    id: '2',
    name: 'Omodos',
    product: 'Wine & Zivania',
    villageInfo: 'Omodos is a small village in Cyprus, in the Limassol district. It has a population of 300. Omodos is famous for their wine and zivania because this product has been made in Omodos since ancient times, with vineyards dating back over 1000 years in the Troodos Mountains.',
    population: 300,
    district: 'Limassol',
    description: 'Traditional Cypriot wine and zivania (grape brandy) made from ancient vine varieties.',
    price: '€15-35',
    story: 'Our family has been making wine for over 200 years. The secret is in the mountain soil...',
    storyteller: 'Andreas Kyprianou, 65',
    images: [
      '/images/omodos1.jpg',
      '/images/omodos2.jpg',
    ],
  },
  // Add other villages similarly...
};

interface Props {
  villageId: string;
  onBack: () => void;
  onBuyProduct: () => void;
  onReadStory: () => void;
}

const VillageDetail: React.FC<Props> = ({ villageId, onBack, onBuyProduct, onReadStory }) => {
  const village = villageData[villageId];
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  if (!village) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % village.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? village.images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6">
      <div className="max-w-4xl mx-auto">
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
            {/* Clickable title opens modal */}
            <h1
              className="text-5xl font-bold text-amber-800 mb-6 cursor-pointer hover:text-amber-600 transition"
              onClick={() => setIsModalOpen(true)}
            >
              {village.name}
            </h1>

            {/* Village Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-6 text-left">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">About {village.name}</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">{village.villageInfo}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>District:</strong> {village.district}</div>
                <div><strong>Population:</strong> {village.population.toLocaleString()}</div>
              </div>
            </div>

            {/* Product Information */}
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

      {/* Modal Carousel */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full p-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              X
            </button>

            <div className="flex items-center justify-center">
              <button
                onClick={prevImage}
                className="mr-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                &lt;
              </button>
              <img
                src={village.images[currentImage]}
                alt={`${village.name} ${currentImage + 1}`}
                className="max-h-96 rounded-xl"
              />
              <button
                onClick={nextImage}
                className="ml-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                &gt;
              </button>
            </div>

            <p className="text-center mt-2 text-gray-600">
              {currentImage + 1} / {village.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VillageDetail;
