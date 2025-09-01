import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, OverlayView, Polygon } from "@react-google-maps/api";
import cyFlag from "../assets/cy.png";

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
  { id: "5", name: "Lania", lat: 34.8833, lng: 32.8, product: "Olive Oil", url: "/products/lania" },
];

interface Props {
  onVillageClick: (village: Village) => void;
}

const containerStyle = { width: "100%", height: "600px", borderRadius: "1rem" };
const webCenter = { lat: 35.0, lng: 33.0 };
const mobileCenter = { lat: 34.95, lng: 32.95 };

// Approx polygon around Cyprus to create the “hole”
const cyprusPolygon = [
  { lat: 35.7, lng: 32.25 },
  { lat: 35.7, lng: 34.75 },
  { lat: 34.4, lng: 34.75 },
  { lat: 34.4, lng: 32.25 },
];

const worldBoundsPolygon = [
  { lat: 90, lng: -180 },
  { lat: 90, lng: 180 },
  { lat: -90, lng: 180 },
  { lat: -90, lng: -180 },
];

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMapLoad = () => setMapLoaded(true);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg flex items-center justify-center space-x-2">
        <img src={cyFlag} alt="Cyprus Flag" className="h-8 w-8 rounded-sm" />
        <span>Cyprus Food Map</span>
      </h1>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={isMobile ? mobileCenter : webCenter}
            zoom={isMobile ? 9 : 10}
            onLoad={handleMapLoad}
          >
            {mapLoaded && window.google && (
              <>
                {/* Grey overlay for the world except Cyprus */}
                <Polygon
                  paths={[worldBoundsPolygon, cyprusPolygon]}
                  options={{
                    fillColor: "#000000",
                    fillOpacity: 0.4,
                    strokeOpacity: 0,
                    clickable: false,
                  }}
                />

                {/* Villages */}
                {villages.map((village) => {
                  const foodPin = {
                    url: "/logo.png",
                    scaledSize: new window.google.maps.Size(40, 40),
                    anchor: new window.google.maps.Point(20, 40),
                  };

                  return (
                    <React.Fragment key={village.id}>
                      <Marker
                        position={{ lat: village.lat, lng: village.lng }}
                        icon={foodPin}
                        onClick={() => onVillageClick(village)}
                        onMouseOver={() => setHoveredMarkerId(village.id)}
                        onMouseOut={() => setHoveredMarkerId(null)}
                      />
                      {hoveredMarkerId === village.id && (
                        <OverlayView
                          position={{ lat: village.lat, lng: village.lng }}
                          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        >
                          <div className="inline-block bg-white rounded-lg shadow-lg px-3 py-2 text-center min-w-max">
                            <div className="font-bold">{village.product}</div>
                            <div>{village.name}</div>
                          </div>
                        </OverlayView>
                      )}
                    </React.Fragment>
                  );
                })}

                {/* "Coming Soon" label outside Cyprus */}
                <OverlayView
                  position={{ lat: 36.0, lng: 31.0 }}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div className="bg-black/60 text-white px-3 py-2 rounded-lg font-bold">
                    Coming Soon 🌍
                  </div>
                </OverlayView>
              </>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Buttons below the map */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        {villages.map((village) => (
          <button
            key={village.id}
            onClick={() => onVillageClick(village)}
            title={village.product}
            className="bg-white/90 hover:bg-white p-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-center"
          >
            <div className="text-lg font-bold mb-1">{village.product}</div>
            <div className="text-sm text-gray-800">{village.name}</div>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="inline-block bg-black/50 text-white text-lg font-medium drop-shadow px-4 py-2 rounded">
          Click on any village to discover authentic Cypriot products! 🏺
        </p>
      </div>
    </div>
  );
};

export default GoogleMapsCyprus;
