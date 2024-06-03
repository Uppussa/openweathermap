import React from 'react'
import Modal from './Modal'
import Detalles from './Detalles'

const All = () => {

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-customDark text-white w-full">

  
  <div className="md:w-34">
    <Modal />
  </div>

 
  <div className="md:w-full">
    <Detalles />
  </div>
  
</div>

    )
}

export default All
