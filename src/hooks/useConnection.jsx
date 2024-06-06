import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState(null);
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
            setCity(data.city.name);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const searchCity = async (cityName) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=537f062506c5be127447c17ac2332472`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const { coord } = data;
            setLocation({ lat: coord.lat, lon: coord.lon });
            await fetchWeather(coord.lat, coord.lon);
        } catch (error) {
            setError(error.message);
        }  finally{
            setLoading(false);
        }
    };

    const fetchCityName = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=537f062506c5be127447c17ac2332472`);
            const data = await response.json();
            setCity(data.name);
        } catch (error) {
            console.error('Error fetching city name:', error);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        if (location) {
            fetchWeather(location.lat, location.lon);
            fetchCityName(location.lat, location.lon);
        }
    }, [location]);

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                city,
                getLocation,
                setLocation,
                searchCity,
                loading,
                error
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
