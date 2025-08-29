import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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

const containerStyle = { width: "100%", height: "600px", borderRadius: "1rem" };

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [zoom, setZoom] = useState(10);
  const [center, setCenter] = useState({ lat: 35.0, lng: 33.0 });

  // Adjust zoom & center based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setZoom(9);
        setCenter({ lat: 35.0, lng: 32.8 });
      } else {
        setZoom(10);
        setCenter({ lat: 35.0, lng: 33.0 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMapLoad = () => setMapLoaded(true);

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">
      {/* Info overlays on left and right */}
      <div className="hidden lg:block absolute top-1/4 left-0 w-1/5 p-4">
        <div className="bg-white/70 rounded-xl p-4 shadow-lg text-center">
          <h2 className="text-lg font-bold mb-2">Why Our Products?</h2>
          <p className="text-gray-800 text-sm">
            🏺 All items are handpicked directly by us from the villages, ensuring the best quality 
            and proper quantity for every product you select.
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute top-1/4 right-0 w-1/5 p-4">
        <div className="bg-white/70 rounded-xl p-4 shadow-lg text-center">
          <h2 className="text-lg font-bold mb-2">Authentic & Fresh</h2>
          <p className="text-gray-800 text-sm">
            🌿 Each product is collected personally, so you get the real local flavors and quality.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative bg-gradient-to-br from-blue-400 via-blue-300 to-green-300 rounded-3xl p-6 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
          🇨🇾 Cyprus Food Map
        </h1>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={zoom}
              onLoad={handleMapLoad}
            >
              {mapLoaded &&
                villages.map((village) => {
                  // Shift pins slightly for mobile if needed
                  let lat = village.lat;
                  let lng = village.lng;
                  if (window.innerWidth < 768) {
                    lng -= 0.02; // shift left a bit on mobile
                  }

                  const foodPin = {
                    url: "/logo.png",
                    scaledSize: new window.google.maps.Size(40, 40),
                    anchor: new window.google.maps.Point(20, 40),
                  };

                  return (
                    <Marker
                      key={village.id}
                      position={{ lat, lng }}
                      onClick={() => onVillageClick(village)}
                      icon={foodPin}
                    />
                  );
                })}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Village Buttons */}
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

export defaul
