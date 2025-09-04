import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';
import ProductPurchase from './ProductPurchase';

interface ProductVariation {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

interface ProductCategory {
  categoryName: string;
  description: string; // small description under category
  variations: ProductVariation[];
}

interface Village {
  id: string;
  name: string;
  villageInfo: string;
  population: number;
  district: string;
  story: string;
  storyteller: string;
  productCategory: ProductCategory;
}

// Example village data
const villageData: Record<string, Village> = {
  '1': {
    id: '1',
    name: 'Lefkara',
    villageInfo: 'Lefkara is a small village in Cyprus, in the Larnaca district. It has a population of 1,100. Lefkara is famous for their traditional lace since the 15th century.',
    population: 1100,
    district: 'Larnaca',
    story: 'My grandmother taught me when I was just 8 years old. Each pattern tells a story of our village...',
    storyteller: 'Maria Constantinou, 78',
    productCategory: {
      categoryName: 'Traditional Lace',
      description: 'Famous for its intricate handmade lace, a UNESCO recognized craft passed down through generations.',
      variations: [
        { id: 'laceA', name: 'Lace A', price: 45, imageUrl: '/images/laceA.jpg' },
        { id: 'laceB', name: 'Lace B', price: 60, imageUrl: '/images/laceB.jpg' },
        { id: 'laceC', name: 'Lace C', price: 75, imageUrl: '/images/laceC.jpg' },
        { id: 'laceD', name: 'Lace D', price: 90, imageUrl: '/images/laceD.jpg' },
      ]
    }
  },
  '2': {
    id: '2',
    name: 'Omodos',
    villageInfo: 'Omodos is a small village in Cyprus, in the Limassol district. It has a population of 300. Omodos is famous for their wine and zivania because this product has been made in Omodos since ancient times, with vineyards dating back over 1000 years in the Troodos Mountains.',
    population: 300,
    district: 'Limassol',
    description: 'Traditional Cypriot wine and zivania (grape brandy) made from ancient vine varieties.',
    price: '€15-35',
    story: 'Our family has been making wine for over 200 years. The secret is in the mountain soil...',
    storyteller: 'Andreas Kyprianou, 65',
    productCategory: {
      categoryName: 'Wine & Zivania',
      description: 'Traditional Cypriot wine and grape brandy made from ancient mountain vineyards.',
      variations: [
        { id: 'ZivanaA', name: 'Zivana A', price: 15, imageUrl: '/images/laceA.jpg' },
        { id: 'ZivanaB', name: 'Zivana B', price: 20, imageUrl: '/images/laceB.jpg' },
        { id: 'ZiavnaC', name: 'Zivana C', price: 10, imageUrl: '/images/laceC.jpg' },
      ]
    }
  },
  '3': {
    id: '3',
    name: 'Kakopetria',
    villageInfo: 'Kakopetria is a small village in Cyprus, in the Nicosia district, nestled in the Troodos Mountains. It has a population of 1,200. Kakopetria is famous for their honey because this product has been made in Kakopetria since old age, with beekeepers using traditional methods passed down for centuries.',
    population: 1200,
    district: 'Nicosia',
    description: 'Pure mountain honey and traditional fruit preserves made from local orchards.',
    price: '€8-25',
    story: 'The bees know the best flowers in our mountains. This honey tastes like sunshine...',
    storyteller: 'Eleni Georgiou, 72',
    productCategory: {
      categoryName: 'Honey & Preserves',
      description: 'Pure mountain honey and traditional fruit preserves crafted from local orchards.',
      variations: [
        { id: 'HoneyA', name: 'Honey A', price: 15, imageUrl: '/images/laceA.jpg' },
        { id: 'HoneyB', name: 'Honey B', price: 20, imageUrl: '/images/laceB.jpg' },
        { id: 'HoneyC', name: 'Honey C', price: 10, imageUrl: '/images/laceC.jpg' },
      ]
    }
  },
  '4': {
    id: '4',
    name: 'Platres',
    villageInfo: 'Platres is a small village in Cyprus, in the Limassol district, located in the Troodos Mountains. It has a population of 250. Platres is famous for their rose products because roses have been cultivated in Platres since the Ottoman period, with the mountain climate creating perfect conditions for fragrant roses.',
    population: 250,
    district: 'Limassol',
    description: 'Rose water, oils, and cosmetics from the famous Platres mountain roses.',
    price: '€12-40',
    story: 'Every morning at dawn, we pick roses when the dew is still fresh...',
    storyteller: 'Sophia Panayiotou, 69',
    productCategory: {
      categoryName: 'Rose Products',
      description: 'Fragrant rose water, oils, and cosmetics made from the famous Platres mountain roses.',
      variations: [
        { id: 'HoneyA', name: 'Honey A', price: 15, imageUrl: '/images/laceA.jpg' },
        { id: 'HoneyB', name: 'Honey B', price: 20, imageUrl: '/images/laceB.jpg' },
        { id: 'HoneyC', name: 'Honey C', price: 10, imageUrl: '/images/laceC.jpg' },
      ]
    }
  },
  '5': {
    id: '5',
    name: 'Lania',
    villageInfo: 'Lania is a small village in Cyprus, in the Limassol district. It has a population of 50. Lania is famous for their olive oil because this product has been made in Lania since old age, with olive groves that have been in families for generations and some trees over 500 years old.',
    population: 50,
    district: 'Limassol',
    description: 'Extra virgin olive oil from centuries-old olive groves in the Troodos mountains.',
    price: '€18-30',
    story: 'These olive trees were planted by my great-grandfather. They know our family...',
    storyteller: 'Costas Michaelis, 74',
    productCategory: {
      categoryName: 'Olive Oil',
      description: 'Extra virgin olive oil from centuries-old groves, handpicked and pressed with traditional care.',
      variations: [
        { id: 'HoneyA', name: 'Honey A', price: 15, imageUrl: '/images/laceA.jpg' },
        { id: 'HoneyB', name: 'Honey B', price: 20, imageUrl: '/images/laceB.jpg' },
        { id: 'HoneyC', name: 'Honey C', price: 10, imageUrl: '/images/laceC.jpg' },
      ]
    }
  }
};

interface Props {
  villageId?: string;   // make optional
  onBack?: () => void;
  onBuyProduct?: () => void;
  onReadStory?: () => void;
}

const VillageDetail: React.FC<Props> = ({ villageId: propVillageId, onBack, onBuyProduct, onReadStory }) => {
  const params = useParams<{ villageId: string }>();
  const villageId = propVillageId || params.villageId; // fallback to URL param

  const village = villageId ? villageData[villageId] : undefined;

  if (!village) return <p>Village not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* ✅ Back button ONLY if passed (map flow) */}
        {onBack && (
          <Button 
            onClick={onBack}
            variant="outline" 
            className="mb-6 bg-white/80 hover:bg-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Map
          </Button>
        )}

        {/* === Your existing content goes here === */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-amber-800 mb-6">{village.name}</h1>
            
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
              <div className="mt-4 text-xl font-bold text-green-600">
                Price Range: {village.price}
              </div>
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">Purchase Product</h3>
                <p className="text-gray-600 mb-4">
                  Get authentic {village.product.toLowerCase()} directly from {village.name}
                </p>
                {onBuyProduct && (
                  <Button 
                    onClick={onBuyProduct}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 text-lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy This Product
                  </Button>
                )}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Traditional Story</h3>
                <p className="text-gray-700 italic leading-relaxed mb-3">"{village.story}"</p>
                <p className="text-sm text-blue-600 font-medium mb-4">— {village.storyteller}</p>
                
                {onReadStory && (
                  <Button 
                    onClick={onReadStory}
                    variant="outline"
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 py-3 text-lg"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Full Story
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageDetail;
