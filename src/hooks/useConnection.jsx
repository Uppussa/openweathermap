import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: '44.34', lon: '10.99' });
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=537f062506c5be127447c17ac2332472`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCityName = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=537f062506c5be127447c17ac2332472`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCity(data.name);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeather(location.lat, location.lon);
    fetchCityName(location.lat, location.lon);
  }, [location]);

  return (
    <WeatherContext.Provider value={{ weatherData, location, city, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
