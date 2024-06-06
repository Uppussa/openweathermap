import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../hooks/useConnection";

const Location = () => {
  const { setLocation } = useContext(WeatherContext);
  const [locationg, setLocationg] = useState({});

  const success = (position) => {
    setLocationg({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };

  const error = () => {
    console.log('Unable to retrieve your location');
  };

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
      <button className="text-white" onClick={() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 p-1 rounded-full bg-customgray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0 .379-.214.725-.553.894A.997.997 0 0111 12a1 1 0 01-.447-.106 1.004 1.004 0 01-.553-.894V8a1 1 0 011-1h3c.379 0 .725.214.894.553A1.004 1.004 0 0115 8a1 1 0 01-.553.894A.997.997 0 0114 9h-2v2zm0 0c0 .379-.214.725-.553.894A.997.997 0 0111 12a1 1 0 01-.447-.106 1.004 1.004 0 01-.553-.894V8a1 1 0 011-1h3c.379 0 .725.214.894.553A1.004 1.004 0 0115 8a1 1 0 01-.553.894A.997.997 0 0114 9h-2v2zM12 4a8 8 0 000 16 8 8 0 000-16z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Location;
