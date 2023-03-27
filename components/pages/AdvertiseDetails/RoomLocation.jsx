import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function RoomLocation() {
  return (
    <div>
      <div className="my-6 text-2xl">موقعیت خانه</div>
      <div className="h-96">
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
      <div className="mt-4 space-y-3">
        <div className="text-lg">رامسر</div>
        <div className="font-light">
          شهر بسیار آرام، شهرهای کوچک در فاصله چند قدمی، شهرهای بزرگتر در 10
          دقیقه .
        </div>
      </div>
    </div>
  );
}

export default RoomLocation;
