import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import "../styles/MapView.scss";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


// Fix marker icon issues with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Routing = ({ from, waypoints, transportModes }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !from || !waypoints || !transportModes) return;

    // Clear previous routing control if exists
    map.eachLayer(layer => {
      if (layer.getWaypoints) {
        map.removeControl(layer);
      }
    });

    // Define different icons based on transport mode with inline colors
    const icons = {
      train: L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
      bus: L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
      walk: L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    };

    // Create waypoints array for routing control
    const waypointsArray = [L.latLng(from.lat, from.lng)];

    waypoints.forEach((waypoint, index) => {
      waypointsArray.push(L.latLng(waypoint.lat, waypoint.lng));
      if (index < transportModes.length) {
        // Add marker for each waypoint with corresponding transport mode icon and color
        L.marker([waypoint.lat, waypoint.lng], { icon: icons[transportModes[index]] })
          .addTo(map)
          .bindPopup(waypoint.name);
      }
    });

    // Create new routing control with custom icons and colors
    L.Routing.control({
      waypoints: waypointsArray,
      routeWhileDragging: true,
      lineOptions: {
        styles: [
          { color: '#0078FF', opacity: 0.8, weight: 6 }
        ]
      }
    }).addTo(map);

  }, [map, from, waypoints, transportModes]);

  return null;
};

const MapComponent = () => {
  // Mock data for starting point and waypoints
  const mockStartingPoint = {
    name: 'Munich Main Train Station',
    lat: 48.1402,
    lng: 11.5601
  };

  const mockWaypoints = [
    {
      name: 'Unterschleissheim Train Station',
      lat: 48.2737,
      lng: 11.5565
    },
    {
      name: 'Garching-Hochbrück Train Station',
      lat: 48.2503,
      lng: 11.6479
    },
    {
      name: 'TUM Garching',
      lat: 48.2668,
      lng: 11.6685
    }
  ];

  const mockTransportModes = ['train', 'bus', 'train']; // Corresponding to each waypoint

  const [from, setFrom] = useState(null);
  const [waypoints, setWaypoints] = useState([]);
  const [transportModes, setTransportModes] = useState([]);

  useEffect(() => {
    // Load initial coordinates
    const loadInitialCoordinates = async () => {
      try {
        // Simulated geocoding (replace with actual geocoding)
        setFrom(mockStartingPoint);
        setWaypoints(mockWaypoints);
        setTransportModes(mockTransportModes);
      } catch (error) {
        alert('Initial coordinates could not be loaded.');
      }
    };

    loadInitialCoordinates();
  }, []);

  return (
    
    <div className="container">
        <div className="breadcrumb">
        <a href="/SuggestedOptions">
        <ArrowBackIosIcon /> Go back to list of Options</a>
      </div>
      <div className="map-container">
        <MapContainer center={[48.137154, 11.586599]} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {from && (
            <Marker position={[from.lat, from.lng]} icon={L.icon({
              iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}>
              <Popup>{from.name}</Popup>
            </Marker>
          )}
          {waypoints.map((waypoint, index) => (
            <Marker key={index} position={[waypoint.lat, waypoint.lng]} icon={L.icon({
              iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}>
              <Popup>{waypoint.name}</Popup>
            </Marker>
          ))}
          {from && waypoints.length > 0 && <Routing from={from} waypoints={waypoints} transportModes={transportModes} />}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
