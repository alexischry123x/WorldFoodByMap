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
  { id: "1", name: "Lefkara",     lat: 34.8667, lng: 33.3167, product: "Traditional Lace",   url: "/products/lefkara" },
  { id: "2", name: "Omodos",      lat: 34.8417, lng: 32.7333, product: "Wine & Zivania",     url: "/products/omodos" },
  { id: "3", name: "Kakopetria",  lat: 34.9833, lng: 32.9000, product: "Honey & Preserves",  url: "/products/kakopetria" },
  { id: "4", name: "Platres",     lat: 34.9167, lng: 32.8667, product: "Rose Products",      url: "/products/platres" },
  { id: "5", name: "Lania",       lat: 34.8833, lng: 32.8000, product: "Olive Oil",          url: "/products/lania" },
];

interface Props {
  onVillageClick: (village: Village) => void;
}

const containerStyle = { width: "100%", height: "600px", borderRadius: "1rem" };
const webCenter    = { lat: 35.0,  lng: 33.0  };
const mobileCenter = { lat: 34.95, lng: 32.95 };

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

  // World bounding box
  const worldCoords = [
    { lat: 85, lng: -179.999 },
    { lat: 85, lng: 179.999 },
    { lat: -85, lng: 179.999 },
    { lat: -85, lng: -179.999 },
  ];

  // Approximate polygon of Cyprus island (simplified outline)
  const cyprusCoords = [
    { lat: 35.1731, lng: 32.7312 },
    { lat: 35.1900, lng: 32.8500 },
    { lat: 35.2400, lng: 33.0500 },
    { lat: 35.2100, lng: 33.2500 },
    { lat: 35.1700, lng: 33.4500 },
    { lat: 35.1000, lng: 33.6500 },
    { lat: 35.0500, lng: 33.8500 },
    { lat: 35.0200, lng: 34.0049 },
    { lat: 34.9000, lng: 34.0000 },
    { lat: 34.7500, lng: 33.8500 },
    { lat: 34.6500, lng: 33.6000 },
    { lat: 34.6000, lng: 33.3000 },
    { lat: 34.5634, lng: 32.7312 },
    { lat: 35.1731, lng: 32.7312 },
  ];

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
            {mapLoaded && (window as any).google && (
              <>
                {/* Grey overlay for rest of the world, with a HOLE over Cyprus */}
                <Polygon
                  paths={[worldCoords, cyprusCoords]} // CY acts as a hole
                  options={{
                    fillColor: "#808080",
                    fillOpacity: 0.6,
                    strokeOpacity: 0,
                    clickable: false,
                    zIndex: 1,
                  }}
                />

                {/* Village markers */}
                {villages.map((village) => {
                  const foodPin = {
                    url: "/logo.png",
                    scaledSize: new (window as any).google.maps.Size(40, 40),
                    anchor: new (window as any).google.maps.Point(20, 40),
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

        {/* "Coming soon" badge */}
        <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1.5 rounded-md text-sm z-10">
          🌍 Other countries coming soon…
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsCyprus;
