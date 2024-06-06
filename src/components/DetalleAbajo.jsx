import React, { useContext } from 'react';
import { WeatherContext } from '../hooks/useConnection';

const DetalleAbajo = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    return <div>No weather data available</div>;
  }

  const currentWeather = weatherData.list[0];

  return (
    <div className="w-full md:w-3/4 mx-auto">
      <h2 className="text-xl mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-customSecondaryDark p-2 rounded text-center md:w-full md:h-52">
          <p>Wind status</p>
          <p className="text-3xl" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '45px', padding: '43px' }}>{currentWeather.wind.speed} m/s</p>
          <p>WSW</p>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center md:w-full md:h-52">
          <p>Humidity</p>
          <p className="text-3xl" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '45px', padding: '29px' }}>{currentWeather.main.humidity}%</p>
          <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-zinc-700 ">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${currentWeather.main.humidity}%` }}></div>
            <div className="flex justify-between w-full mb-2">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center md:w-full md:h-40 ">
          <p>Visibility</p>
          <p className="text-3xl" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '45px', padding: '29px' }}>{(currentWeather.visibility / 1000).toFixed(1)} Miles</p>
        </div>
        <div className="bg-customSecondaryDark p-4 rounded text-center md:w-full md:h-40">
          <p>Air Pressure</p>
          <p className="text-3xl" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '45px', padding: '29px' }}>{currentWeather.main.pressure} Mb</p>
        </div>
      </div>
      <p className="text-center mt-8">
        created by <span className="text-blue-500">username</span> - devChallenges.io
      </p>
    </div>
  );
};

export default DetalleAbajo;
