import React, { useState, useContext } from 'react';
import { WeatherContext } from '../hooks/useConnection';

function SearchModal({ isModalOpen, toggleModal }) {
    const { searchCity } = useContext(WeatherContext);
    const [location, setLocation] = useState('');

    const handleSearchButtonClick = (e) => {
        e.preventDefault();
        searchCity(location);
        toggleModal();
        setLocation('');
    };

    const handleLocationButtonClick = (city) => {
        searchCity(city);
        toggleModal();
        setLocation('');
    };

    const handleLocationInputChange = (e) => {
        setLocation(e.target.value);
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchCity(location);
            toggleModal();
            setLocation('');
        }
    };
    

    return (
        <div className={`fixed top-0 left-0 h-screen w-[435px] bg-[#1E213A] text-white transition-transform duration-300 ease-in-out transform ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button className="absolute right-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full" onClick={toggleModal}>×</button>
            <div className="p-6 pt-12">
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="search location"
                        className="w-full py-3 px-12 rounded-md bg-[#2D3748] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={location}
                        onChange={handleLocationInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3C47F5] text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        onClick={handleSearchButtonClick}
                    >
                        Search
                    </button>
                </div>
                <div className="space-y-4">
                    <button onClick={() => handleLocationButtonClick('London')} className="w-full py-4 px-6 bg-customSecondaryDark border border-customgraytwo rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-raleway">London</button>
                    <button onClick={() => handleLocationButtonClick('Barcelona')} className="w-full py-4 px-6 bg-customSecondaryDark border border-customgraytwo rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-raleway">Barcelona</button>
                    <button onClick={() => handleLocationButtonClick('Long Beach')} className="w-full py-4 px-6 bg-customSecondaryDark border border-customgraytwo rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-raleway">Long Beach</button>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;
