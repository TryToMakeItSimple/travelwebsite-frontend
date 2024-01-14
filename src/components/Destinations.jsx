import React from 'react'
import Boracay1 from '../assets/assets/boracay1.jpg'
import Boracay2 from '../assets/assets/boracay2.jpg'
import Coron1 from '../assets/assets/coron1.jpg'
import IsladeGigantes from '../assets/assets/IsladeGigantes.jpg'
import Elnido1 from '../assets/assets/elnido1.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
      <h1>All Inclusive Resorts</h1>
      <p className='py-4'>Philippines Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Boracay1} alt="/" />
        <img className='w-full h-full object-cover' src={Boracay2} alt="/" />
        <img className='w-full h-full object-cover' src={Coron1} alt="/" />
        <img className='w-full h-full object-cover' src={IsladeGigantes} alt="/" />
        <img className='w-full h-full object-cover' src={Elnido1} alt="/" />

      </div>
    </div>
  )
}

export default Destinations
