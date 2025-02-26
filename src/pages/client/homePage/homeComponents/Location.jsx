import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Marquee from 'react-fast-marquee';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Location = () => {
    const axiosPublic = useAxiosPublic();

    const { data: locationData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['locationData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllLocations');
            return res.data?.data;
        }
    });
    if (isLoading) {
        return (<SkeletonLoader></SkeletonLoader>)
    }
    return (
        <div className="container px-4 md:px-0 md:mx-auto">
            
            {/* Title */}
            <p className="hover:underline text-2xl md:text-4xl lg:mb-6 font-bold text-[#853493] ">Locations</p>

            {/* Wrapper with overflow hidden */}
            <div className="overflow-hidden relative">
                {/* Absolute element for larger screens */}
                <div className="absolute z-10 h-80 w-80 p-8 bg-[#f1edec] rounded-lg bg-opacity-80  hidden lg:block">
                    <img
                        className="rounded-lg h-60 w-full"
                        src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/imagecon-group.jpg"
                        alt="Highlight Location"
                    />
                </div>

                <Marquee speed={60} gradient={false}>
                    <div className="flex md:gap-4 gap-2 px-1  py-10">
                        {/* Cards */}
                        {locationData.map((location, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 md:h-60 h-48 md:w-56 w-40 text-center p-4 bg-gray-200 rounded-2xl"
                            >
                                <Link to={"/our-branch"} ><img
                                    src={location.img}  // Assuming the location data includes an image URL
                                    alt={location.location}       // Assuming the location data includes a name
                                    className="md:h-40 h-32 w-full object-cover rounded-lg"
                                />
                                    <p className="p-4 text-sm md:text-base">{location.location}</p></Link>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Location;
