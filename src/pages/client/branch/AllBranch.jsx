import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AllBranch = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0);

    const { data: branchData = [], isLoading } = useQuery({
        queryKey: ['branchData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllBranches');
            console.log(res);
            return res.data?.data;
        }
    });

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="lg:mt-28 lg:mb-12 mt-20 w-11/12 mx-auto">
            <Helmet>
                <title>Ronjona | Branch List</title>
            </Helmet>
            <h1 className="text-center font-bold lg:text-4xl">Our Branch</h1>
            {/* Wrapper with overflow hidden */}
            <div className="overflow-hidden relative">
                <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 px-1 py-10">
                    {/* Cards */}
                    {branchData.map((location, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 md:h-60 h-48 md:w-56 w-32 text-center p-4 bg-gray-200 rounded-2xl transform transition-transform duration-300 hover:scale-105"
                        >
                            <Link
                                to={`/branch-by-packages/${location?._id}`}
                                className="focus:outline-none focus:ring-4 focus:ring-gray-300"
                            >
                                <img
                                    src={location.img} // Assuming the location data includes an image URL
                                    alt={location.location?.name || 'Branch image'} // Assuming location has a name property
                                    className="w-full h-full object-cover rounded-lg aspect-[4/3]"
                                />
                                <p className="mt-2 text-sm md:text-base font-medium">
                                    {location?.branch || 'Unknown Location'}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBranch;
