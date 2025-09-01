import React from "react";

const Events: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-6">Events & Festivals</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Discover local events and festivals celebrating traditional Cypriot food, culture, and heritage. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default Events;
