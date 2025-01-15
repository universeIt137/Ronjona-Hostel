import React from 'react';
import Marquee from 'react-fast-marquee';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

const AllBranch = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0,0)

    const { data: locationData = [], isLoading } = useQuery({
        queryKey: ['locationData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllLocations');
            return res.data?.data;
        }
    });

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="lg:mt-28 lg:mb-12 mt-20 w-11/12 mx-auto">
            <h1 className="text-center font-bold lg:text-4xl">Our Branch</h1>
            {/* Wrapper with overflow hidden */}
            <div className="overflow-hidden relative">
                <div className="grid lg:grid-cols-5 grid-cols-2 gap-20 px-1 py-10">
                    {/* Cards */}
                    {locationData.map((location, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 md:h-60 h-48 md:w-56 w-32 text-center p-4 bg-gray-200 rounded-2xl transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={location.img} // Assuming the location data includes an image URL
                                alt={location.location} // Assuming the location data includes a name
                                className="md:h-40 h-32 w-full object-cover rounded-lg"
                            />
                            <p className="p-4 text-sm md:text-base">{location.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBranch;
