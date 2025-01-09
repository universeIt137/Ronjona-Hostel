import React from 'react';
import { FaSwimmingPool } from 'react-icons/fa';

const Banner2 = () => {
    return (
        <div>
            <div>
                <div className='m-10'>
                    <img className='h-[80lvh] w-full rounded-[40px] ' src="https://res.cloudinary.com/da43e0ikj/image/upload/v1735624181/samples/bike.jpg" alt="" />
                </div>
                <div className='bg-gray-200 m-8 rounded-[30px] '>
                    <p className='text-5xl font-bold text-main-color pt-8 pl-8'>Facilities</p>
                    <div className='grid grid-cols-3 md:grid-cols-6'>

                        <div className=' flex-row justify-items-center p-8'>
                            <FaSwimmingPool className='text-8xl'></FaSwimmingPool>
                            <p className='text-xl'>Sswimming Pool</p>
                        </div>
                        <div className=' flex-row justify-items-center p-8'>
                            <FaSwimmingPool className='text-8xl'></FaSwimmingPool>
                            <p className='text-xl'>Sswimming Pool</p>
                        </div>
                        <div className=' flex-row justify-items-center p-8'>
                            <FaSwimmingPool className='text-8xl'></FaSwimmingPool>
                            <p className='text-xl'>Sswimming Pool</p>
                        </div>
                        <div className=' flex-row justify-items-center p-8'>
                            <FaSwimmingPool className='text-8xl'></FaSwimmingPool>
                            <p className='text-xl'>Sswimming Pool</p>
                        </div>
                        <div className=' flex-row justify-items-center p-8'>
                            <FaSwimmingPool className='text-8xl'></FaSwimmingPool>
                            <p className='text-xl'>Sswimming Pool</p>
                        </div>

                        <div className=' flex-row justify-items-center p-8'>
                            <FaSwimmingPool className='text-8xl'></FaSwimmingPool>
                            <p className='text-xl'>Sswimming Pool</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;