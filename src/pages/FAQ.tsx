// src/pages/FAQ.tsx
import React from "react";

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Find answers to the most common questions about exploring Cypriot villages and their traditional products.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
