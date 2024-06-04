import React, { useContext } from 'react';
import { WeatherContext } from '../hooks/useConnection';

const DetalleAbajo = () => {
    const { weatherData, loading, error } = useContext(WeatherContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const currentWeather = weatherData.list[1];

  return (
    <div className="w-full md:w-3/4 mx-auto">
      <h2 className="text-xl mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-customSecondaryDark p-2 rounded text-center md:w-full md:h-52">
          <p>Wind status</p>
          <p className="text-3xl">{currentWeather.wind.speed} m/s</p>
          <p>WSW</p>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center md:w-full md:h-52">
          <p>Humidity</p>
          <p className="text-3xl">{currentWeather.main.humidity}%</p>
          <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-zinc-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${currentWeather.main.humidity}%` }}></div>
          </div>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center md:w-full md:h-40">
          <p>Visibility</p>
          <p className="text-3xl">{(currentWeather.visibility / 1000).toFixed(1)} km</p>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center md:w-full md:h-40">
          <p>Air Pressure</p>
          <p className="text-3xl">{currentWeather.main.pressure} hPa</p>
        </div>
      </div>
      <p className="text-center mt-8">
        created by <span className="text-blue-500">username</span> - devChallenges.io
      </p>
    </div>
  );
};

export default DetalleAbajo;
