// src/pages/Gallery.tsx
import React from "react";
import { villageData } from "../components/villageData";

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">Gallery</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(villageData).map((village) =>
            [...(village.photosLeft ?? []), ...(village.photosRight ?? [])].map((img, idx) => (
              <img
                key={`${village.id}-${idx}`}
                src={img}
                alt={`${village.name} photo`}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
