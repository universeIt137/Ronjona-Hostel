import React from 'react';
import { FaDumbbell, FaParking, FaWifi } from 'react-icons/fa';
import { GiWashingMachine } from 'react-icons/gi';
import { HiLightBulb } from 'react-icons/hi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { IoFastFoodOutline } from 'react-icons/io5';
import { PiPersonSimpleSwimDuotone } from 'react-icons/pi';

const Facility = () => {
    return (
        <div className='mt-20 container px-4 md:px-0 md:mx-auto'>
            <div className='  mb-10 '>
                <p className="text-2xl md:text-4xl hover:underline font-bold ">Our Facilities</p>
                <p>We offer modern (5 star) hotel facilities for your comfort.</p>
                
            </div>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <PiPersonSimpleSwimDuotone className='text-4xl m-4'></PiPersonSimpleSwimDuotone>
                        <p>Swimming Pool</p>  
                    </div>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <FaWifi className='text-4xl m-4'></FaWifi>
                        <p>Wifi</p>  
                    </div>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <IoFastFoodOutline className='text-4xl m-4'></IoFastFoodOutline>
                        <p>Breakfast</p>  
                    </div>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <FaDumbbell className='text-4xl m-4'></FaDumbbell>
                        <p>Gym</p>  
                    </div>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <IoLogoGameControllerB className='text-4xl m-4'></IoLogoGameControllerB>
                        <p>Game Center</p>  
                    </div>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <HiLightBulb className='text-4xl m-4'></HiLightBulb>
                        <p>24/7 Light</p>  
                    </div>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <GiWashingMachine className='text-4xl m-4'></GiWashingMachine>
                        <p>Laundry</p>  
                    </div>
                    <div className=' justify-items-center bg-[#5a514f] text-white py-12 lg:py-16  '>
                        <FaParking className='text-4xl m-4'></FaParking>
                        <p>Parking Space</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;