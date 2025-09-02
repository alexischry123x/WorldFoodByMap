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
  { id: "1", name: "Lefkara", lat: 34.8674, lng: 33.3053, product: "Traditional Lace", url: "/products/lefkara" },
  { id: "2", name: "Omodos", lat: 34.8489, lng: 32.8078, product: "Wine & Zivania", url: "/products/omodos" },
  { id: "3", name: "Kakopetria", lat: 34.9900, lng: 32.9037, product: "Honey & Preserves", url: "/products/kakopetria" },
  { id: "4", name: "Platres", lat: 34.8880, lng: 32.8643, product: "Rose Products", url: "/products/platres" },
  { id: "5", name: "Lania", lat: 34.8242, lng: 32.9208, product: "Olive Oil", url: "/products/lania" },
];

interface Props {
  onVillageClick: (village: Village) => void;
}

const containerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "1rem",
};

const center = { lat: 35.0, lng: 33.0 };
const zoom = 10;

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg flex items-center justify-center space-x-2">
        <img src={cyFlag} alt="Cyprus Flag" className="h-8 w-8 rounded-sm" />
        <span>Cyprus Food Map</span>
      </h1>

      <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}
          >
            {villages.map((village) => (
              <React.Fragment key={village.id}>
                <Marker
                  position={{ lat: village.lat, lng: village.lng }}
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
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default GoogleMapsCyprus;
