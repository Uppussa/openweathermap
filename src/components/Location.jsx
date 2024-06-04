import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../hooks/useConnection";

const Location = () => {
  const { setLocation } = useContext(WeatherContext);
  const [locationg, setLocationg] = useState({});

  function success(position) {
    setLocationg({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  function error() {
    console.log('Unable to retrieve your location');
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  useEffect(() => {
    if ("latitude" in locationg) {
      setLocation({
        lat: locationg.latitude,
        lon: locationg.longitude,
      });
    }
  }, [locationg, setLocation]);

  return (
    <div>
      <button className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c5.376 0 9.75 4.374 9.75 9.75s-4.374 9.75-9.75 9.75S2.25 17.376 2.25 12 6.624 2.25 12 2.25zm0 4.5a.75.75 0 100 1.5.75.75 0 000-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Location;
