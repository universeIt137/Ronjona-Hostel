import React, { useState } from 'react';
import { FaSwimmingPool } from 'react-icons/fa';

const Banner2 = ({ packagesDetailsData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = packagesDetailsData?.features;

    console.log("data is ", data)

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
        <div className=' relative overflow-hidden mt-10 '>
            {/* Image Display */}
            <div className=' border rounded-full w-[30vh] mx-auto '>
                <img
                    className=' lg:w-full lg:h-full object-cover transition-all duration-500'
                    src={packagesDetailsData.img[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>

            {/* Navigation Buttons */}
            <button
                aria-label="Previous Slide"
                className='absolute lg:top-[18%] left-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full'
                onClick={handlePrev}
            >
                ❮
            </button>
            <button
                aria-label="Next Slide"
                className='absolute lg:top-[18%] right-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full'
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
            <div className="bg-gray-200 m-8 rounded-[30px]">
                <p className="text-3xl font-bold pt-8 pl-8">Facilities</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
                    {data && data.length > 0 ? (
                        data.map((item, i) => (
                            <div key={i} className="flex flex-col items-center p-4">
                                <img
                                    src={item?.featilityImg}
                                    alt={item?.featilityTitle || "Facility image"}
                                    className="w-16 h-16 object-cover"
                                />
                                <p className="text-center mt-2">{item?.featilityTitle}</p>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No facilities available.</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Banner2;



