import React, { useState } from 'react';
import { FaSwimmingPool } from 'react-icons/fa';

const Banner2 = ({ packagesDetailsData = { img: [] } }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % packagesDetailsData.img.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? packagesDetailsData.img.length - 1 : prevIndex - 1
        );
    };

    if (!packagesDetailsData.img || packagesDetailsData.img.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='m-10 relative overflow-hidden'>
            {/* Image Display */}
            <div className='h-[90vh] w-[90vh] mx-auto '>
                <img
                    className=' lg:w-full lg:h-full object-cover transition-all duration-500'
                    src={packagesDetailsData.img[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>

            {/* Navigation Buttons */}
            <button
                aria-label="Previous Slide"
                className='absolute lg:top-[28%] left-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full'
                onClick={handlePrev}
            >
                ❮
            </button>
            <button
                aria-label="Next Slide"
                className='absolute lg:top-[28%] right-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full'
                onClick={handleNext}
            >
                ❯
            </button>

            {/* Dots Navigation */}
            <div className='flex justify-center mt-10 space-x-2'>
                {packagesDetailsData.img.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
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
    );
};

export default Banner2;



