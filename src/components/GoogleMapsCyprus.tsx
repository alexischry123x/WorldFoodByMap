import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, OverlayView } from "@react-google-maps/api";
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

// Grey-out style for world except Cyprus
const mapStyles: google.maps.MapTypeStyle[] = [
  { featureType: "all", elementType: "geometry", stylers: [{ color: "#d3d3d3" }] },
  { featureType: "administrative.country", elementType: "geometry.fill", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#a0c4ff" }] } // blue water
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

  const handleMapLoad = (map: google.maps.Map) => {
    setMapLoaded(true);
    const styledMap = new google.maps.StyledMapType(mapStyles, { name: "Styled Map" });
    map.mapTypes.set("styled_map", styledMap);
    map.setMapTypeId("styled_map");
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg flex items-center justify-center space-x-2">
        <img src={cyFlag} alt="Cyprus Flag" className="h-8 w-8 rounded-sm" />
        <span>Cyprus Food Map</span>
      </h1>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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

                {/* Coming Soon overlay outside Cyprus */}
                <OverlayView
                  position={{ lat: 35.0, lng: 30.0 }} // approximate center of greyed area
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div className="text-4xl font-bold text-gray-400 select-none pointer-events-none">
                    Coming Soon 🌍
                  </div>
                </OverlayView>
              </>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default GoogleMapsCyprus;
