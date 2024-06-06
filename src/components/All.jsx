import React, { useState, useContext } from 'react';
import { WeatherContext } from '../hooks/useConnection';
import Modal from './Modal';
import Detalles from './Detalles';
import SearchModal from './SearchModal';


const All = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');
  const { weatherData } = useContext(WeatherContext);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    
      <div className="min-h-screen flex flex-col md:flex-row bg-customDark text-white w-full">
        <div className="md:w-34 relative">
          
          <Modal 
          toggleSidebar={toggleModal} weatherData={weatherData} />
          <SearchModal 
           isModalOpen={isModalOpen}
           toggleModal={toggleModal}
           location={location}
           setLocation={setLocation} />
        </div>
        <div className="md:w-full " style={{margin: 'auto'}}>
          <Detalles />
        </div>
      </div>
    
  );
};

export default All;
