import React, { useState } from 'react';

function SearchModal({ isModalOpen, toggleModal, setLocation }) {
    const [inputLocation, setInputLocation] = useState('');

    const handleSearch = () => {
        if (inputLocation.trim() !== '') {
            setLocation(inputLocation.trim());
            toggleModal();
        }
    };

    const handleLocationInputChange = (e) => {
        setInputLocation(e.target.value);
    };

    return (
        <div className={`fixed top-0 left-0 h-full w-[435px] bg-[#1E213A] text-white transition-transform duration-300 ease-in-out transform ${isModalOpen ? 'translate-x-0' : '-translate-x-full'} `}>
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
                <div className="space-y-4">
                    <button onClick={() => { setLocation('London'); toggleModal(); }} className="w-full py-4 px-6 bg-[#2D3748] hover:bg-gray-700 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">London</button>
                    <button onClick={() => { setLocation('Barcelona'); toggleModal(); }} className="w-full py-4 px-6 bg-[#2D3748] hover:bg-gray-700 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Barcelona</button>
                    <button onClick={() => { setLocation('Long Beach'); toggleModal(); }} className="w-full py-4 px-6 bg-[#2D3748] hover:bg-gray-700 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Long Beach</button>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;
