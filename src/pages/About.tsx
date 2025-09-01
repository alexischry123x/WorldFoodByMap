// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-6">About World Food By Map</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our vision is to connect people with authentic products, all over the world. From the villager to the consumer!! We begin our journey with Cypriot villages and their traditional products. 
          Discover the rich culture, heritage, and flavors of Cyprus, one village at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
