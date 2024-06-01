import React from 'react'
import Modal from './Modal'
import Detalles from './Detalles'

const All = () => {

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-customDark text-white">

            <Modal />

            <Detalles />
        </div>
    )
}

export default All
