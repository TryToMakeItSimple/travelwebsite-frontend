import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'
const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex-col justify-evenly'>
        <div>
            <h2>Lounge on the best Philippines beaches!</h2>
            <p className='py-4'>If you're looking for pristine beaches with crystal clear waters and postcard-worthy views, the Philippines offers you a lot of choices! But which ones should you visit? Read on to learn about the country's top beaches.

The Philippines is an archipelago with over 7,000 islands and has the 5th largest coastline in the world. The geographical features of the Philippines mean there are thousands of tropical white sand beaches in the Philippines to choose from!
Deciding on the best beach tours in the Philippines to add to your itinerary is one of the hardest things to do when planning your vacation to this Southeast Asian country. That's why we’ve come up with this list to help you find the best and most beautiful beaches in the Philippines to escape to.
</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <RiCustomerService2Fill size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICES</h3>
                        <p  className='py-1'>ALL INCLUSIVE COMPANY IN OVER 20 YEARS IN-A-ROW</p>
                    </div>
                    </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <MdOutlineTravelExplore size={50}/>
                    </button>
                    <div>
                        <h3  className='py-2'>LEADING SERVICES</h3>
                        <p  className='py-1'>ALL INCLUSIVE COMPANY IN OVER 20 YEARS IN-A-ROW</p>
                    </div>
                    </div>
                </div>
            </div>

      <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE!!</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label>Destination</label>
                <select className='border rounded-md p-2'>
                    <option>Boracay</option>
                    <option>Coron</option>
                    <option>ELNido</option>
                    <option>Panglao</option>
                    <option>Baclayon</option>
                    <option>Isla de Gigantes</option>
                </select>
            </div>
            <div className='flex flex-col my-4'>
                <label>Check-In</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
           <button className='w-full my-4'>Rates and Availability</button>
        </form>
      </div>
    </div>
  )
}

export default Search
