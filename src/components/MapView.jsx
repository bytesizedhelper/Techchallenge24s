import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { geocode } from '../utils/geocode';
import "../styles/MapView.scss";

// Fix marker icon issues with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Routing = ({ from, to }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !from || !to) return;

    // Clear previous routing control if exists
    map.eachLayer(layer => {
      if (layer.getWaypoints) {
        map.removeControl(layer);
      }
    });

    // Create new routing control
    L.Routing.control({
      waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1]),
      ],
      routeWhileDragging: true,
    }).addTo(map);

  }, [map, from, to]);

  return null;
};

const MapComponent = () => {
  // Mock data for initial "From" and "To" addresses
  const mockFromAddress = 'Alexanderplatz, Berlin, Germany';
  const mockToAddress = 'Brandenburger Tor, Berlin, Germany';

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [fromInput, setFromInput] = useState(mockFromAddress);
  const [toInput, setToInput] = useState(mockToAddress);

  useEffect(() => {
    // Load initial coordinates based on mock data
    const loadInitialCoordinates = async () => {
      try {
        const fromCoords = await geocode(mockFromAddress);
        const toCoords = await geocode(mockToAddress);
        setFrom(fromCoords);
        setTo(toCoords);
      } catch (error) {
        alert('Initial mock addresses could not be found.');
      }
    };

    loadInitialCoordinates();
  }, []);

  const handleFromChange = (event) => {
    setFromInput(event.target.value);
  };

  const handleToChange = (event) => {
    setToInput(event.target.value);
  };

  const updateRoute = async () => {
    try {
      const fromCoords = await geocode(fromInput);
      const toCoords = await geocode(toInput);
      setFrom(fromCoords);
      setTo(toCoords);
    } catch (error) {
      alert('One of the addresses could not be found.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <label>
          From: 
          <input type="text" value={fromInput} onChange={handleFromChange} placeholder="Enter start address" />
        </label>
        <label>
          To: 
          <input type="text" value={toInput} onChange={handleToChange} placeholder="Enter destination address" />
        </label>
        <button onClick={updateRoute}>Update Route</button>
      </div>
      <div className="map-container">
        <MapContainer center={[52.5200, 13.4050]} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {from && (
            <Marker position={from}>
              <Popup>
                Starting Point
              </Popup>
            </Marker>
          )}
          {to && (
            <Marker position={to}>
              <Popup>
                Destination
              </Popup>
            </Marker>
          )}
          {from && to && <Routing from={from} to={to} />}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
