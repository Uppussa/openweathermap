import React from 'react';
import DetallaArri from './DetallaArri';
import DetalleAbajo from './DetalleAbajo';

const Detalles = () => {
  return (
    <div className="flex flex-col p-20 h-screen justify-around">
      <DetallaArri />
      <DetalleAbajo />
    </div>
  );
};

export default Detalles;
