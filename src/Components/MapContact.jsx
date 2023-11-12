import React from "react";
import "./MapContact.css";
import Mail from "../Img/Email.svg";
import Phone from "../Img/Phone.svg";
import Gps from "../Img/gps.svg";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapContact = () => {
  const center = [47.030456, 28.82282];

  return (
    <div className="MainMap">
      <div className="mapcontainer">
        <MapContainer className="react-leaflet" center={center} zoom={20}>
          <TileLayer
            className="react-leaflet"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>Aici poate fi conținutul marker-ului.</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="contactblock">
        <img className="mapimg" src={Mail} alt="mailicon" />
        <h1 className="Maptext">Email</h1>
        <p className="partext"> droneassistance@gmail.com</p>

        <img className="mapimg" src={Phone} alt="phoneicon" />
        <h1 className="Maptext">Phone</h1>
        <p className="partext">
          MD: +37369104386 +37361140354 UA: +380973874027
        </p>

        <img className="mapimg" src={Gps} alt="gpsicon" />
        <h1 className="Maptext">Adresa</h1>
        <p className="partext">
          Republica Moldova, mun. Chișinău,MD-2004, bd. Ștefan cel Mare și
          Sfânt, 133
        </p>
      </div>
      <div className="mapcontainermobile">
        <MapContainer className="react-leaflet" center={center} zoom={20}>
          <TileLayer
            className="react-leaflet"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>Aici poate fi conținutul marker-ului.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapContact;
