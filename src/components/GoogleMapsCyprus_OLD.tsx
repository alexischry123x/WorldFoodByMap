import React from 'react';

interface Village {
  id: string;
  name: string;
  lat: number;
  lng: number;
  product: string;
}

const villages: Village[] = [
  { id: '1', name: 'Lefkara', lat: 34.8667, lng: 33.3167, product: 'Traditional Lace' },
  { id: '2', name: 'Omodos', lat: 34.8417, lng: 32.7333, product: 'Wine & Zivania' },
  { id: '3', name: 'Kakopetria', lat: 34.9833, lng: 32.9, product: 'Honey & Preserves' },
  { id: '4', name: 'Platres', lat: 34.9167, lng: 32.8667, product: 'Rose Products' },
  { id: '5', name: 'Lania', lat: 34.8833, lng: 32.8, product: 'Olive Oil' }
];

interface Props {
  onVillageClick: (village: Village) => void;
}

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  // Google Maps with Cyprus centered and proper zoom
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415000!2d33.0!3d35.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f8.5!3m3!1m2!1s0x14e7330b7c8b3e87%3A0x1b2b3b3b3b3b3b3b!2sCyprus!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative bg-gradient-to-br from-blue-400 via-blue-300 to-green-300 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
          🇨🇾 Cyprus Food Map
        </h1>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
          <iframe
            src={mapSrc}
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
        
        {/* Village buttons below map */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {villages.map((village) => (
            <button
              key={village.id}
              onClick={() => onVillageClick(village)}
              className="bg-white/90 hover:bg-white p-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-2xl mb-2">📍</div>
              <div className="font-bold text-gray-800">{village.name}</div>
              <div className="text-sm text-gray-600">{village.product}</div>
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-medium drop-shadow">
            Click on any village to discover authentic Cypriot products! 🏺
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsCyprus;
