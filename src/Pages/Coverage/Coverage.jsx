import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import AnimateOnScroll from "../../Component/AnimateOnScroll";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const servicesZone = useLoaderData();
  const mapRef = useRef();
  console.log(servicesZone);
  const handleLocation = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = servicesZone.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 10);
    }
  };
  return (
    <div className=" ">
      <AnimateOnScroll>
        <div>
          <h1 className="font-extrabold text-2xl text-secondary">
            We are availabe in 64 Districts
          </h1>
          <div className="mt-4 ">
            <form onSubmit={handleLocation}>
              <label className="input border-2 border-primary">
                <svg
                  className="h-[1em] text-primary  opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  name="location"
                  className="text-secondary"
                  type="search"
                  required
                  placeholder="Search"
                />
              </label>
            </form>
          </div>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div className="mt-10">
          <h1 className="text-secondary font-bold text-xl">
            We deliver almost all over Bangladesh
          </h1>
          <div className="mt-5 border border-primary h-full w-full">
            <MapContainer
              ref={mapRef}
              className="h-[1000px]"
              center={position}
              zoom={8}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {servicesZone.map((center) => (
                <Marker position={[center.latitude, center.longitude]}>
                  <Popup>
                    <strong>{center.district}</strong> <br /> service area :{" "}
                    {center.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Coverage;
