import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Select } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';

const Banner = () => {
    const axiosPublic = useAxiosPublic();
    const [bannerData, setBannerData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Fetching banner data
    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const res = await axiosPublic.get('/getAllBanner'); // Update endpoint if necessary
                setBannerData(res.data.data || []);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching banner data:', error);
                setIsLoading(false);
            }
        };
        fetchBannerData();
    }, [axiosPublic]);

    // Automatic slide transition
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slides every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [bannerData]);

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
        );
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader />
            </div>
        );
    }

    return (
        <div className="relative h-56 md:h-[100vh] mt-16 md:mt-12 rounded-none">
            {/* Banner Text */}
            <p className="absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-30 text-main-color text-3xl md:text-6xl text-center font-bold px-4 w-full">
                You don’t just Stay with us, you <br /> Live with us!
            </p>

            {/* Responsive Form */}
            <div className="absolute z-30 p-4 top-[105%] md:top-[65%] left-[50%] transform -translate-x-[50%] md:-translate-y-[50%] border-2 md:border-8 bg-white border-black border-opacity-10 flex flex-col md:flex-row gap-3 items-center w-[90%] md:w-auto rounded-md shadow-lg">
                <div className="w-full md:w-auto">
                    <Select
                        id="destination"
                        required
                        className="w-full md:w-auto p-2 rounded-md border border-gray-300"
                    >
                        <option value="">Select Destination</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </Select>
                </div>
                <div className="w-full md:w-auto">
                    <Select
                        id="guests"
                        required
                        className="w-full md:w-auto p-2 rounded-md border border-gray-300"
                    >
                        <option value="">Select Guests</option>
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4+ Guests</option>
                    </Select>
                </div>
                <button className="w-full md:w-auto flex gap-2 items-center justify-center bg-main-color rounded-lg px-6 py-2 text-white text-sm md:text-base hover:bg-yellow-600">
                    <FaSearch />
                    <p>Search</p>
                </button>
            </div>

            {/* Custom Slider */}
            <div className="relative w-full h-56 md:h-[100vh] overflow-hidden">
                {bannerData.map((item, index) => (
                    <img
                        key={index}
                        src={item.img} // Assuming `img` is the URL field in the API response
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        style={{
                            transform: `translateX(${(index - currentIndex) * 100}%)`,
                        }}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute top-[50%] left-4 transform -translate-y-[50%] text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
                onClick={handlePrevSlide}
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                className="absolute top-[50%] right-4 transform -translate-y-[50%] text-white bg-black bg-opacity-50 rounded-full p-2 focus:outline-none"
                onClick={handleNextSlide}
            >
                <FaChevronRight size={24} />
            </button>
        </div>
    );
};

export default Banner;
