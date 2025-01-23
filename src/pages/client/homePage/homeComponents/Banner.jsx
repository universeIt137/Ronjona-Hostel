import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';
import { useQuery } from '@tanstack/react-query';

const Banner = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate(); // Create navigate function to programmatically navigate
    const [bannerData, setBannerData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const { data: locations = [] } = useQuery({
        queryKey: ['locationsData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllLocations');
            return res.data?.data;
        }
    });
    const { data: branchName = [] } = useQuery({
        queryKey: ['branchName'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllBranches');
            return res.data?.data;
        }
    });

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const res = await axiosPublic.get('/getAllBanner');
                setBannerData(res.data.data || []);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching banner data:', error);
                setIsLoading(false);
            }
        };
        fetchBannerData();
    }, [axiosPublic]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
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

    const handleLocationChange = (location) => {
        navigate(`/branch/${location}`); // Navigate to the location page with the selected location
    };

    const handleBranchChange = (location) => {
        navigate(`/packages/${location}`); // Navigate to the branch page with the selected location and branch
    };

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="relative h-56 md:h-[100vh] mt-16 md:mt-12 rounded-none">
            {/* Banner Text */}
            <p className="absolute top-[30%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-30 text-main-color text-lg md:text-5xl lg:text-6xl text-center font-bold px-4 w-full">
                You don’t just Stay with us, you <br className="hidden md:block" /> Live with us!
            </p>

            {/* Responsive Form */}
            <div className="absolute lg:-mt-24 z-30 p-4 top-[105%] md:top-[65%] left-[50%] transform -translate-x-[50%] md:-translate-y-[50%] border-2 md:border-8 bg-white border-black border-opacity-10 flex flex-col md:flex-row gap-3 items-center w-[90%] md:w-auto rounded-md shadow-lg">
                <div className="w-full   md:w-auto">
                    <label className='block font-semibold'>Location</label>
                    <select
                        className='mt-2 p-2 border rounded'
                        onChange={(e) => handleLocationChange(e.target.value)} // Trigger the navigation when location is selected
                    >
                        <option>Select Location</option>
                        {locations.map((location) => (
                            <option key={location._id} value={location._id}>
                                {location.location}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-auto">
                    <label className='block font-semibold'>Branch</label>
                    <select
                        className='mt-2 p-2 border rounded'
                        onChange={(e) => handleBranchChange(e.target.value)} // Trigger the navigation when branch is selected
                    >
                        <option >Select Branch</option>
                        {branchName.map((branch) => (
                            <option key={branch._id} value={branch._id}>
                                {branch.branch}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="w-full md:w-auto flex gap-2 items-center justify-center mt-8 bg-[#853493] rounded-lg px-6 py-2 text-white text-sm md:text-base ">
                    <FaSearch />
                    <p>Search</p>
                </button>
            </div>

            {/* Custom Slider */}
            <div className="relative w-full h-56 md:h-[100vh] overflow-hidden">
                {bannerData.map((item, index) => (
                    <img
                        key={index}
                        src={item.img}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
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
