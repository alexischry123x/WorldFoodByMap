// src/pages/ContactUs.tsx
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Have questions or want to collaborate? Reach out to us using the details below:
        </p>
        <ul className="text-gray-700 list-disc list-inside">
          <li>Email: alexischry@hotmail.com</li>
          <li>Phone: +357 99 573095</li>
          <li>Address: Nicosia, Cyprus</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
