// StamenMapComponent.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StamenMapComponent = () => {
  return (
    <MapContainer center={[37.5665, 126.9780]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
        attribution='Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
      />
    </MapContainer>
  );
};

export default StamenMapComponent;

