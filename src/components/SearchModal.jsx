import React, { useState, useContext } from 'react';
import { WeatherContext } from '../hooks/useConnection';

function SearchModal({ isModalOpen, toggleModal }) {
    const { searchCity } = useContext(WeatherContext);
    const [inputLocation, setInputLocation] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [error, setError] = useState(null);
    const [unit, setUnit] = useState('C'); // Definir el estado para la unidad

    const handleSearch = async () => {
        if (inputLocation.trim() !== '') {
            try {
                const data = await searchCity(inputLocation.trim());
                setSearchResults(data);
                setError(null);
            } catch (error) {
                setError('City not found or network error');
                setSearchResults(null);
            }
        }
    };

    const handleLocationInputChange = (e) => {
        setInputLocation(e.target.value);
        setError(null);
    };

    const convertTemperature = (temp) => {
        return unit === 'C' ? Math.round(temp - 273.15) : Math.round((temp - 273.15) * 9 / 5 + 32);
    };

    return (
        <div className={`fixed top-0 left-0 h-full w-[435px] bg-[#1E213A] text-white transition-transform duration-300 ease-in-out transform ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button className="absolute right-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full" onClick={toggleModal}>×</button>
            <div className="p-6 pt-12">
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="search location"
                        className="w-full py-3 px-12 rounded-md bg-[#2D3748] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={inputLocation}
                        onChange={handleLocationInputChange}
                    />
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3C47F5] text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {searchResults && searchResults.list && searchResults.list[0] && (
                    <div className="cardm bg-gray-200 p-4 w-64 rounded-lg shadow-md" style={{color: 'black', margin: 'auto',backgroundColor: 'wheat', textAlign: 'center'}}>
                        <div className="card">
                            <p className="text-lg text-gray-600">{searchResults.city.name}</p>
                        </div>
                        <div className="weather h-12 w-12 mx-auto">
                            <img src={`https://openweathermap.org/img/wn/${searchResults.list[0]?.weather[0]?.icon}@2x.png`} alt="" />
                        </div>
                        <div className="upper">
                            <p className="text-lg">{searchResults.list[0].weather[0]?.description}</p>
                            <p className="text-lg">{convertTemperature(searchResults.list[0].main.temp)} °C</p> {/* Corregir la llamada a la función convertTemperature */}
                        </div>
                        <div className="lower">
                            <p className="text-lg">{searchResults.list[0].dt_txt && new Date(searchResults.list[0].dt_txt).toLocaleDateString()}</p>
                            {/* Agrega aquí la línea para mostrar la Sensación Térmica (RealFeel) */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchModal;
