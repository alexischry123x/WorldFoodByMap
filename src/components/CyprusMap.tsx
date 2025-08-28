import React from 'react';
import { MapPin } from 'lucide-react';

interface Village {
  id: string;
  name: string;
  x: number;
  y: number;
  product: string;
}

const villages: Village[] = [
  { id: '1', name: 'Lefkara', x: 60, y: 65, product: 'Traditional Lace' },
  { id: '2', name: 'Omodos', x: 45, y: 70, product: 'Wine & Zivania' },
  { id: '3', name: 'Kakopetria', x: 50, y: 45, product: 'Honey & Preserves' },
  { id: '4', name: 'Platres', x: 48, y: 75, product: 'Rose Products' },
  { id: '5', name: 'Lania', x: 47, y: 68, product: 'Olive Oil' },
];

interface Props {
  onVillageClick: (village: Village) => void;
}

const CyprusMap: React.FC<Props> = ({ onVillageClick }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative bg-gradient-to-br from-blue-400 via-blue-300 to-green-300 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
          🇨🇾 Cyprus Food Map
        </h1>
        
        {/* Simple Cyprus outline */}
        <svg viewBox="0 0 100 100" className="w-full h-96 bg-gradient-to-br from-emerald-200 to-green-400 rounded-2xl shadow-inner">
          <path
            d="M10,50 Q20,30 40,35 Q60,25 80,40 Q90,50 85,70 Q70,80 50,75 Q30,85 15,70 Q5,60 10,50 Z"
            fill="url(#cyprusGradient)"
            stroke="#059669"
            strokeWidth="2"
            className="drop-shadow-md"
          />
          <defs>
            <linearGradient id="cyprusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          
          {villages.map((village) => (
            <g key={village.id}>
              <circle
                cx={village.x}
                cy={village.y}
                r="3"
                fill="#dc2626"
                className="cursor-pointer hover:r-4 transition-all duration-300 drop-shadow-lg"
                onClick={() => onVillageClick(village)}
              />
              <text
                x={village.x}
                y={village.y - 5}
                textAnchor="middle"
                className="text-xs font-semibold fill-white drop-shadow cursor-pointer"
                onClick={() => onVillageClick(village)}
              >
                {village.name}
              </text>
            </g>
          ))}
        </svg>
        
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-medium drop-shadow">
            Click on any village to discover authentic Cypriot products! 🏺
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyprusMap;