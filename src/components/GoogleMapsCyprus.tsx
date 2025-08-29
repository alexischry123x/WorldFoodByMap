import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Change Google map pin to ours
const foodPin = {
  url: "/logo.png", // path to your transparent PNG
  scaledSize: new window.google.maps.Size(40, 40), // adjust size
  anchor: new window.google.maps.Point(20, 40), // pin tip points to exact location
};


interface Village {
  id: string;
  name: string;
  lat: number;
  lng: number;
  product: string;
  url: string;
}

const villages: Village[] = [
  { id: "1", name: "Lefkara", lat: 34.8667, lng: 33.3167, product: "Traditional Lace", url: "/products/lefkara" },
  { id: "2", name: "Omodos", lat: 34.8417, lng: 32.7333, product: "Wine & Zivania", url: "/products/omodos" },
  { id: "3", name: "Kakopetria", lat: 34.9833, lng: 32.9, product: "Honey & Preserves", url: "/products/kakopetria" },
  { id: "4", name: "Platres", lat: 34.9167, lng: 32.8667, product: "Rose Products", url: "/products/platres" },
  { id: "5", name: "Lania", lat: 34.8833, lng: 32.8, product: "Olive Oil", url: "/products/lania" }
];

interface Props {
  onVillageClick: (village: Village) => void;
}

const containerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "1rem"
};

const center = { lat: 35.0, lng: 33.0 };

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative bg-gradient-to-br from-blue-400 via-blue-300 to-green-300 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
          🇨🇾 Cyprus Food Map
        </h1>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
              {villages.map((village) => (
                <Marker
                  key={village.id}
                  position={{ lat: village.lat, lng: village.lng }}
                  onClick={() => onVillageClick(village)}
                />
              ))}
            </GoogleMap>
          </LoadScript>
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
