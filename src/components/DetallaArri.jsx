import React from 'react';

const DetallaArri = () => {
  return (
    <div className="grid lg:grid-cols-5 w-full max-w-4xl mx-auto">
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1">Tomorrow</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1">Sun, 7 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1">Mon, 8 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1">Tue, 9 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
      <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
        <p className="text-xs mb-1">Wed, 10 Jun</p>
        <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
        <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
      </div>
      <button className="absolute bg-white text-black p-2 rounded-full md:top-12 md:right-36" style={{ width: '40px', height: '40px', borderRadius: '50%' }}>°C</button>
      <button className="absolute bg-gray-700 text-white p-2 rounded-full md:top-12 md:right-24" style={{ width: '40px', height: '40px', borderRadius: '50%' }}>°F</button>
    </div>
  );
};

export default DetallaArri;
