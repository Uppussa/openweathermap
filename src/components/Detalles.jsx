import React from 'react';
import DetallaArri from './DetallaArri';
import DetalleAbajo from './DetalleAbajo';

const Detalles = () => {
  return (
    <div className="flex, grid, w-full, md:w-1/2, lg:w-1/3, sm:flex-col, md:flex-row " style={{fontFamily: 'raleway'}}>
      <DetallaArri />
      <DetalleAbajo />
    </div>
  );
};

export default Detalles;
