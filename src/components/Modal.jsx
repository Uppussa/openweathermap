import React, { useState } from 'react';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  

  return (
    <div className="flex h-screen w-[450px] bg-customSecondaryDark">
    {/* Sidebar */}
    <div className={`fixed top-0 left-0 h-full w-[450px] bg-customSecondaryDark text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleSidebar}>×</button>
      <div className="p-4">
        <input type="text" placeholder="search location" className="w-full p-2 mb-4 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"/>
        <button className="w-full p-2 mb-4 bg-blue-600 rounded hover:bg-blue-700">Search</button>
        <a href="#" className="block p-2 mb-2 hover:bg-gray-700 rounded">London</a>
        <a href="#" className="block p-2 mb-2 hover:bg-gray-700 rounded">Barcelona</a>
        <a href="#" className="block p-2 mb-2 hover:bg-gray-700 rounded">Long Beach</a>
      </div>
    </div>
    
    {/* Main Content */}
    <div className="flex-grow bg-customSecondaryDark">
      <button className="m-4 p-2 bg-customButton text-customtext rounded" onClick={toggleSidebar}>Seach for places</button> 
      <div className="flex justify-between items-center mb-4">
    <h1 className='text-black'>hola aqui va la imagen </h1>
      
    </div>
    </div>
  </div>
  );
}

export default Modal;