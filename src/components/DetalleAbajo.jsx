import React from 'react'

const DetalleAbajo = () => {
    return (
        <div className='flex flex-col w-ful'>
            <h2 className="text-xl mb-4">Today's Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-customSecondaryDark p-4 rounded text-center">
                    <p>Wind status</p>
                    <p className="text-3xl">7 mph</p>
                    <p>WSW</p>
                </div>
                <div className="bg-customSecondaryDark p-4 w- rounded text-center">
                    <p>Humidity</p>
                    <p className="text-3xl">84%</p>
                    <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-zinc-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "84%" }}></div>
                    </div>
                </div>
                <div className="bg-customSecondaryDark p-4 rounded text-center">
                    <p>Visibility</p>
                    <p className="text-3xl">6.4 miles</p>
                </div>
                <div className="bg-customSecondaryDark p-4 rounded text-center">
                    <p>Air Pressure</p>
                    <p className="text-3xl">998 mb</p>
                </div>
            </div>
            <p className="text-center mt-8">
                created by <span className="text-blue-500">username</span> - devChallenges.io
            </p>
        </div>
    )
}

export default DetalleAbajo
