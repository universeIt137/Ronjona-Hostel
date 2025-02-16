import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const PackagesDetailsImage = ({ packagesDetailsData }) => {
    if (!packagesDetailsData || !packagesDetailsData.img || packagesDetailsData.img.length === 0) {
        return <p className="text-center text-gray-500">No images available</p>;
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to change image manually
    const goToNextSlide = () => {
        setCurrentIndex((prev) => (prev === packagesDetailsData.img.length - 1 ? 0 : prev + 1));
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? packagesDetailsData.img.length - 1 : prev - 1));
    };

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Carousel */}
            <div className="relative">
                <img
                    src={packagesDetailsData.img[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white px-2 py-1 rounded"
                    onClick={goToPrevSlide}
                >
                    <MdOutlineKeyboardArrowLeft className="text-[#853493] text-4xl font-bold " />
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white px-2 py-1 rounded"
                    onClick={goToNextSlide}
                >
                    <MdOutlineKeyboardArrowRight className="text-[#853493] text-4xl font-bold " />
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-4 mt-4">
                {packagesDetailsData.img.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={` ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${index === currentIndex ? "border-[#853493]" : "border-transparent"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PackagesDetailsImage;
