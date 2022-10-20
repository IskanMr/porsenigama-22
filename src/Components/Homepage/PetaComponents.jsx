import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import pinpoint from "../../assets/images/homepage/pinpoint.png";
import { dataVenue } from "../../data/dataVenue";

const Map = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width < 768;
  const icon = isMobile
    ? new Leaflet.Icon({
        iconUrl: pinpoint,
        iconSize: [20, 20],
        iconAnchor: [15, 15], // [left/right, top/bottom]
        popupAnchor: [0, 20],
        tooltipAnchor: [0, 0],
      })
    : new Leaflet.Icon({
        iconUrl: pinpoint,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, 34],
        tooltipAnchor: [0, 0],
      });

  const position = [-7.770614660306203, 110.38070545396639];
  return (
    <>
      <MapContainer
        className="rounded-3rem z-0"
        center={position}
        zoom={16}
        scrollWheelZoom
        style={{ height: "75vh", width: "75vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataVenue.map((venue) => {
          return (
            <Marker
              position={venue.coordinate}
              icon={icon}
              key={venue.id}
              riseOnHover
            >
              <Popup className="font-montserrat">
                {" "}
                <p className="p-1">
                  {" "}
                  <span className="font-semibold">
                    {venue.namagedung}{" "}
                  </span>{" "}
                  <br /> <br /> {venue.alamatgedung} <br /> <br />{" "}
                  <a href={venue.gmaps} target="_blank">
                    Google Maps
                  </a>{" "}
                  <br /> <br /> {venue.lomba}{" "}
                </p>
              </Popup>
              <Tooltip
                direction="bottom"
                className="text-md hidden md:block font-montserrat transition-opacity duration-500 ease-in-out"
              >
                <p>{venue.namagedung}</p>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
