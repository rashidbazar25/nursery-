// SchoolMap.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// إصلاح أيقونات Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// إحداثيات الروضة
const schoolPosition = [15.842045765533495, 48.45724142766657];

// طيران للتمركز حول المستخدم
const FlyToUser = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 14);
    }
  }, [position, map]);
  return null;
};

const UserLocationMap = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const [locationError, setLocationError] = useState(false);

  const ORS_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImRkN2NhMzI4MDBhNzQxMjZiZGY0MWEzYjFjMjk1ZWM3IiwiaCI6Im11cm11cjY0In0=";

  // تحديد موقع المستخدم
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([
          position.coords.latitude,
          position.coords.longitude
        ]);
      },
      (err) => {
        console.warn("فشل تحديد الموقع:", err.message);
        setLocationError(true);
        setUserPosition([15.847, 48.456]); // موقع افتراضي تقريبي
      }
    );
  }, []);

  // جلب مسار السيارة
  const fetchRoute = async () => {
    if (!userPosition) return;

    try {
      const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car/geojson", {
        method: "POST",
        headers: {
          "Authorization": ORS_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coordinates: [
            [userPosition[1], userPosition[0]],  // lng, lat
            [schoolPosition[1], schoolPosition[0]],
          ],
        }),
      });

      const data = await response.json();

      const coordinates = data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]); // lat, lng
      const distanceKm = data.features[0].properties.summary.distance / 1000;

      setRoute(coordinates);
      setDistance(distanceKm.toFixed(2));
    } catch (error) {
      console.error("فشل في جلب المسار:", error);
    }
  };

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
      <MapContainer center={schoolPosition} zoom={14} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* Marker الروضة */}
        <Marker position={schoolPosition} eventHandlers={{ click: fetchRoute }}>
          <Popup>
            🏫 <strong>روضة أنامل الغد </strong><br />
            حضرموت - القطن - ساحة الحضارم - عمارة 25<br />
            {distance && <span> المسافة من موقعك: {distance} كم</span>}<br />
           
          </Popup>
        </Marker>

        {/* Marker المستخدم */}
        {userPosition && (
          <Marker position={userPosition}>
            <Popup>📍 {locationError ? "موقع تقريبي" : "موقعك الحالي"}</Popup>
          </Marker>
        )}

        {/* خط المسار */}
        {route && (
          <Polyline
            positions={route}
            color="blue"
            weight={6}
            opacity={0.8}
            lineJoin="round"
          />
        )}

        {/* تركيز الكاميرا */}
        {userPosition && <FlyToUser position={userPosition} />}
      </MapContainer>
    </div>
  );
};

export default UserLocationMap;
