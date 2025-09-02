import React, { useState, useEffect, useRef } from "react";
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
  { id: "3", name: "Kakopetria", lat: 34.9833, lng: 32.9000, product: "Honey & Preserves", url: "/products/kakopetria" },
  { id: "4", name: "Platres", lat: 34.9167, lng: 32.8667, product: "Rose Products", url: "/products/platres" },
  { id: "5", name: "Lania", lat: 34.8833, lng: 32.8000, product: "Olive Oil", url: "/products/lania" },
];

interface Props {
  onVillageClick: (village: Village) => void;
}

const containerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "1rem",
  position: "relative",
  overflow: "hidden",
};

const fullWorldCenter = { lat: 20, lng: 0 }; // wide/global view

const cyprusCenter = { lat: 35.0, lng: 33.0 };
const cyprusZoom = 10;

// Desaturated map style (grey out)
const grayMapStyle = [
  {
    featureType: "all",
    stylers: [{ saturation: -100 }, { lightness: 50 }],
  },
];

// Simplified polygon outline of Cyprus (converted to CSS clip path POLYGON points)
// We'll convert lat,lng to relative percentages for the container (approximate)
const cyprusPolygonPointsCSS = [
  [50, 20],
  [52, 25],
  [55, 33],
  [53, 40],
  [50, 48],
  [45, 55],
  [42, 60],
  [40, 65],
  [35, 65],
  [30, 60],
  [28, 50],
  [27, 35],
  [25, 20],
];

// Build CSS polygon string "x% y%, x% y%, ..."
const clipPathPolygon = `polygon(${cyprusPolygonPointsCSS
  .map((point) => `${point[0]}% ${point[1]}%`)
  .join(", ")})`;

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);

  // Ref to colored map div for clip path
  const topMapRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg flex items-center justify-center space-x-2">
        <img src={cyFlag} alt="Cyprus Flag" className="h-8 w-8 rounded-sm" />
        <span>Cyprus Food Map</span>
      </h1>

      <div style={containerStyle}>
        {/* Bottom greyed-out world map */}
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            center={fullWorldCenter}
            zoom={2}
            options={{
              styles: grayMapStyle,
              fullscreenControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              clickableIcons: false,
              gestureHandling: "none", // disable pan/zoom on grey map
            }}
          />
        </LoadScript>

        {/* Top colored map clipped to Cyprus shape */}
        <div
          ref={topMapRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            clipPath: clipPathPolygon,
            WebkitClipPath: clipPathPolygon,
            pointerEvents: "auto", // enable interaction inside Cyprus
            zIndex: 2,
          }}
        >
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
              }}
              center={cyprusCenter}
              zoom={cyprusZoom}
              options={{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: true,
                gestureHandling: "greedy", // allow zoom & pan inside Cyprus
                restriction: {
                  latLngBounds: {
                    north: 35.6,
                    south: 34.4,
                    west: 32.5,
                    east: 34.5,
                  },
                  strictBounds: false,
                },
              }}
            >
              {/* Markers */}
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

        {/* Coming soon message */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            zIndex: 5,
          }}
        >
          🌍 Other countries coming soon…
        </div>
      </div>
    </div>
  );
};

export default GoogleMapsCyprus;
