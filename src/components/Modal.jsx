import React from 'react';
import Location from './Location';

function Modal({ weatherData, toggleSidebar }) {
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    if (!weatherData.list || weatherData.list.length === 0) {
        return <div>No weather data available</div>;
    }

    const currentWeather = weatherData.list[0];

    if (!currentWeather.main || !currentWeather.weather || currentWeather.weather.length === 0) {
        return <div>No weather data available</div>;
    }

    const temperature = currentWeather.main.temp;
    const weatherDescription = currentWeather.weather[0].description;

    const kelvinToCelsius = (temp) => temp - 273.15;
    const temperatureInCelsius = kelvinToCelsius(temperature);

    return (
        <div className="flex flex-col items-center h-screen w-full bg-customSecondaryDark">
            <div className="flex justify-between w-full p-6">
                <button className="bg-customButton text-customtext rounded px-4 py-2 " style={{height: '35px'}} onClick={toggleSidebar}>Search for places</button>
                <a href="#"><Location /></a>
            </div>
            <div className="w-full h-2/6 relative">
                <figure className="w-full h-full opacity-20">
                    <img src={"/Cloud-background.png"} alt="Cloud Background" className="w-full h-full object-cover" />
                </figure>
                <figure className="w-28 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50">
                    <img src={`/${currentWeather.weather[0].icon}.png`} alt="" />
                </figure>
            </div>
            <div className="text-center mb-12">
                <div className="text-[144px] font-light leading-none">
                    {temperatureInCelsius.toFixed(2)}<span className="text-5xl font-normal text-[#A09FB1] align-top ml-2">°C</span>
                </div>
                <div className="text-[#A09FB1] text-4xl mt-6">{weatherDescription}</div>
            </div>
            <div className="text-[#88869D] text-center">
                <div className="mb-4">Today • Mon, 3 Jun</div>
                <div className="flex items-center justify-center">
                    <span className="material-icons mr-2"></span>
                    {weatherData.city.name || 'Select a location'}
                </div>
            </div>
        </div>
    );
}

export default Modal;
