import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, OverlayView } from "@react-google-maps/api";
import cyFlag from "../assets/cy.png";
import { villageData } from "../data/villageData";
import { useNavigate } from "react-router-dom";

interface VillageMapEntry {
  id: string;
  name: string;
  lat: number;
  lng: number;
  product: string;
  url: string;
}

const coordsAndUrls: Record<string, { lat: number; lng: number; url: string }> = {
  "Lefkara": { lat: 34.8667, lng: 33.3167, url: "/village/1" },
  "Omodos": { lat: 34.8417, lng: 32.7333, url: "/village/2" },
  "Kakopetria": { lat: 34.9833, lng: 32.9, url: "/village/3" },
  "Platres": { lat: 34.9167, lng: 32.8667, url: "/village/4" },
  "Lania": { lat: 34.8833, lng: 32.8, url: "/village/5" },
};

const containerStyle = { width: "100%", height: "600px", borderRadius: "1rem" };
const webCenter = { lat: 35.0, lng: 33.0 };
const mobileCenter = { lat: 34.95, lng: 32.95 };

const GoogleMapsCyprus: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMapLoad = () => setMapLoaded(true);

  // Compose villages array with lat/lng/url from coordsAndUrls and product/name/id from villageData
  const villages: VillageMapEntry[] = Object.values(villageData)
    .map((v) => {
      const coord = coordsAndUrls[v.name];
      if (!coord) return null;
      return {
        id: v.id.toString(),
        name: v.name,
        lat: coord.lat,
        lng: coord.lng,
        product: v.product,
        url: coord.url,
      };
    })
    .filter(Boolean) as VillageMapEntry[]; // filter out nulls

  const onVillageClick = (village: VillageMapEntry) => {
    // Navigate to village detail page using id param
    navigate(`/village/${village.id}`);
  };

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
              </>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

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
