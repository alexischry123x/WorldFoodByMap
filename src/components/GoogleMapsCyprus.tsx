import React, { useState, useRef, useCallback, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, OverlayView } from "@react-google-maps/api";
import { debounce } from "lodash";
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
  position: "relative" as const,
  overflow: "hidden" as const,
};

const fullWorldCenter = { lat: 20, lng: 0 };
const cyprusCenter = { lat: 35.0, lng: 33.0 };
const cyprusZoomDefault = 10;
const zoomThreshold = 8;

const grayMapStyle = [
  {
    featureType: "all",
    stylers: [{ saturation: -100 }, { lightness: 50 }],
  },
];

// Approximate Cyprus polygon clip-path points (percentages relative to container)
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
const clipPathPolygon = `polygon(${cyprusPolygonPointsCSS.map(p => `${p[0]}% ${p[1]}%`).join(", ")})`;

const GoogleMapsCyprus: React.FC<Props> = ({ onVillageClick }) => {
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(cyprusZoomDefault);
  const [center, setCenter] = useState<{ lat: number; lng: number }>(cyprusCenter);

  const topMapRef = useRef<google.maps.Map | null>(null);
  const bottomMapRef = useRef<google.maps.Map | null>(null);

  // Debounced state setters to avoid React render flood (200ms delay)
  const debouncedSetZoom = useRef(
    debounce((newZoom: number) => {
      setZoom(newZoom);
    }, 200)
  ).current;

  const debouncedSetCenter = useRef(
    debounce((lat: number, lng: number) => {
      setCenter((prev) => {
        if (Math.abs(prev.lat - lat) < 1e-6 && Math.abs(prev.lng - lng) < 1e-6) return prev;
        return { lat, lng };
      });
    }, 200)
  ).current;

  // Zoom changed handler on top map
  const onZoomChangedTop = useCallback(() => {
    if (topMapRef.current) {
      const currentZoom = topMapRef.current.getZoom();
      if (typeof currentZoom === "number") {
        debouncedSetZoom(currentZoom);
      }
    }
  }, [debouncedSetZoom]);

  // Center changed handler on top map
  const onCenterChangedTop = useCallback(() => {
    if (topMapRef.current) {
      const newCenter = topMapRef.current.getCenter();
      if (newCenter) {
        const lat = newCenter.lat();
        const lng = newCenter.lng();
        debouncedSetCenter(lat, lng);
      }
    }
  }, [debouncedSetCenter]);

  useEffect(() => {
    return () => {
      // On unmount cancel debounced calls to avoid state updates on unmounted
      debouncedSetCenter.cancel();
      debouncedSetZoom.cancel();
    };
  }, [debouncedSetCenter, debouncedSetZoom]);

  const isZoomedOut = zoom < zoomThreshold;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg flex items-center justify-center space-x-2">
        <img src={cyFlag} alt="Cyprus Flag" className="h-8 w-8 rounded-sm" />
        <span>Cyprus Food Map</span>
      </h1>

      <div style={containerStyle}>
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          {/* Bottom grey map always rendered */}
          <GoogleMap
            onLoad={(map) => (bottomMapRef.current = map)}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              transition: "opacity 0.3s ease",
              opacity: isZoomedOut ? 1 : 0,
              pointerEvents: isZoomedOut ? "auto" : "none",
              zIndex: 1,
            }}
            center={fullWorldCenter}
            zoom={2}
            options={{
              styles: grayMapStyle,
              fullscreenControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              clickableIcons: false,
              gestureHandling: isZoomedOut ? "auto" : "none",
            }}
          />

          {/* Top colored Cyprus map always rendered with clip-path on zoom out */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transition: "opacity 0.3s ease",
              opacity: 1,
              pointerEvents: "auto",
              clipPath: isZoomedOut ? clipPathPolygon : "none",
              WebkitClipPath: isZoomedOut ? clipPathPolygon : "none",
              zIndex: 2,
            }}
          >
            <GoogleMap
              onLoad={(map) => (topMapRef.current = map)}
              onZoomChanged={onZoomChangedTop}
              onCenterChanged={onCenterChangedTop}
              mapContainerStyle={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
              }}
              center={center}
              zoom={zoom}
              options={{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: true,
                gestureHandling: "greedy",
                restriction: isZoomedOut
                  ? {
                      latLngBounds: {
                        north: 35.6,
                        south: 34.4,
                        west: 32.5,
                        east: 34.5,
                      },
                      strictBounds: false,
                    }
                  : undefined,
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
          </div>
        </LoadScript>

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
