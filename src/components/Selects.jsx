import React from 'react'
import Panglao from '../assets/assets/Panglao.jpg'
import Boracay2 from '../assets/assets/boracay2.jpg'
import Coron1 from '../assets/assets/coron1.jpg'
import IsladeGigantes from '../assets/assets/IsladeGigantes.jpg'
import Elnido1 from '../assets/assets/elnido1.jpg'
import Baclayon from '../assets/assets/baclayon.jpg'
import SelectsCard from './SelectsCard'

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={Panglao} text='Panglao' />
    <SelectsCard bg={Boracay2} text='Boracay' />
    <SelectsCard bg={Coron1} text='Coron1' />
    <SelectsCard bg={IsladeGigantes} text='IsladeGigantes' />
    <SelectsCard bg={Elnido1} text='Elnido' />
    <SelectsCard bg={Baclayon} text='Baclayon' />
    
    </div>
  )
}

export default Select
