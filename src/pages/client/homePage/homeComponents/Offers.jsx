import React, { useState, useEffect } from 'react';
import { IoArrowBackOutline, IoArrowForward } from 'react-icons/io5';

const Offers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const offers = [
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/man-on-a-street.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/man-on-a-street.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/man-on-a-street.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/man-on-a-street.jpg",
    ];

    const totalSlides = Math.ceil(offers.length / 2); // Total slide groups

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className='mt-10 container px-4 md:px-0 md:mx-auto'>
            {/* Top Section start */}
            <div className='mb-6 font-bold flex justify-between items-center'>
                <p className="text-2xl md:text-4xl hover:underline text-main-color">Offers For You</p>
                <div className='flex items-center gap-8 me-8 text-xl'>
                    <IoArrowBackOutline onClick={handlePrev} className="cursor-pointer" />
                    <IoArrowForward onClick={handleNext} className="cursor-pointer" />
                </div>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 50}%)` }}
                >
                    {offers.map((offer, index) => (
                        <div key={index} className="w-1/2 flex-shrink-0 px-2">
                            <img
                                className="w-full h-72 rounded-xl"
                                src={offer}
                                alt={`Offer ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;
