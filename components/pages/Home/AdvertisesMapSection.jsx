import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function AdvertisesMapSection() {
  return (
    <div className=" h-[calc(100vh-224px)]">
      <MapContainer
        style={{ height: "100%" }}
        center={[35.7219, 51.3347]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default AdvertisesMapSection;
