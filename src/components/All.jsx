import React, { useState, useContext } from 'react';
import { WeatherProvider, WeatherContext } from '../hooks/useConnection';
import Modal from './Modal';
import Detalles from './Detalles';
import SearchModal from './SearchModal';

const All = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { weatherData, loading, error } = useContext(WeatherContext);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col md:flex-row bg-customDark text-white w-full">
        <div className="md:w-34 relative">
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {!loading && !error && (
            <>
              <Modal weatherData={weatherData} toggleSidebar={toggleModal} />
              <SearchModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
            </>
          )}
        </div>
        <div className="md:w-full">
          <Detalles />
        </div>
      </div>
    </WeatherProvider>
  );
};

export default All;
