import React, { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../hooks/useConnection';
import Location from './Location';

function Modal({ weatherData, toggleSidebar }) {
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentWeatherDescription, setCurrentWeatherDescription] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const { city, setLocation } = useContext(WeatherContext);

  useEffect(() => {
    const updateWeather = () => {
      if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
        return;
      }

      const currentWeather = weatherData.list[0];

      if (!currentWeather.main || !currentWeather.weather || currentWeather.weather.length === 0) {
        return;
      }

      const temperature = currentWeather.main.temp;
      const weatherDescription = currentWeather.weather[0].description;
      const temperatureInCelsius = kelvinToCelsius(temperature);
      setCurrentTemperature(temperatureInCelsius.toFixed(2));
      setCurrentWeatherDescription(weatherDescription);

      setCurrentDate(getCurrentDate());
      setUserLocation(city);
    };

    const kelvinToCelsius = (temp) => {
      return temp - 273.15;
    };

    const getCurrentDate = () => {
      const date = new Date();
      const options = { weekday: 'long', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };

    updateWeather();
  }, [weatherData, city]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=537f062506c5be127447c17ac2332472`)
          .then(response => response.json())
          .then(data => {
            const city = data.name;
            const country = data.sys.country;
            setUserLocation(`${city}, ${country}`);
          })
          .catch(error => {
            console.error('Error getting user location:', error);
            setUserLocation('Unable to retrieve user location');
          });
      }, (error) => {
        console.error('Error getting user location:', error);
        setUserLocation('Unable to retrieve user location');
      });
    } else {
      setUserLocation('Geolocation is not supported by this browser');
    }
  };

  return (
    <div className="flex flex-col items-center h-screen w-full bg-customSecondaryDark">
      <div className="flex justify-between w-full p-6">
        <button className="bg-customButton text-customtext rounded px-4 py-2 " style={{ height: '35px' }} onClick={toggleSidebar}>Search for places</button>
        <a href="#" onClick={getLocation}><Location /></a>
      </div>
      <div className="w-full h-2/6 relative">
        <figure className="w-full h-full opacity-20">
          <img src={"/Cloud-background.png"} alt="Cloud Background" className="w-full h-full object-cover" />
        </figure>
        <figure className="w-28 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-0">
          <img src={`https://openweathermap.org/img/wn/${weatherData.list[0]?.weather[0]?.icon}@2x.png`} alt="" />
        </figure>
      </div>
      <div className="text-center mb-12">
        <div className="text-[144px] font-light leading-none">
          {currentTemperature}<span className="text-5xl font-normal text-[#A09FB1] align-top ml-2">°C</span>
        </div>
        <div className="text-[#A09FB1] text-4xl mt-6">{currentWeatherDescription}</div>
      </div>
      <div className="text-[#88869D] text-center">
        <div className="mb-4">{currentDate}</div>
        <div className="flex items-center justify-center">
          <span className="material-icons mr-2"></span>
          {userLocation || weatherData.city.name || 'Select a location'}
        </div>
      </div>
    </div>
  );
}

export default Modal;
