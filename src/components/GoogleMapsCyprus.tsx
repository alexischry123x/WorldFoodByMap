import React, { useState } from "react";
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
const center = { lat: 35.0, lng: 33.0 };

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = () => setMapLoaded(true);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative bg-gradient-to-br from-blue-400 via-blue-300 to-green-300 rounded-3xl p-8 shadow-2xl">
        {/* Map title with Cyprus flag */}
        <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
          🇨🇾 Cyprus Food Map
        </h1>

        {/* Google Map */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={handleMapLoad}
            >
              {mapLoaded &&
                villages.map((village) => {
                  const foodPin = {
                    url: "/logo.png",
                    scaledSize: new window.google.maps.Size(40, 40),
                    anchor: new window.google.maps.Point(20, 40),
                  };

                  return (
                    <Marker
                      key={village.id}
                      position={{ lat: village.lat, lng: village.lng }}
                      onClick={() => onVillageClick(village)}
                      icon={foodPin}
                    />
                  );
                })}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsCyprus;
