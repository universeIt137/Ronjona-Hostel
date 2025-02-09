import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';

const Facility = () => {
    const axiosPublic = useAxiosPublic();
    const [showAll, setShowAll] = useState(false);

    const { data: featuresData = [], isError, isLoading } = useQuery({
        queryKey: ['featuresData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllFeatures');
            return res.data?.data || [];
        }
    });

    if (isLoading) {
        return <SkeletonLoader />;
    }

    if (isError) {
        return <p className="text-center text-red-500">Failed to load facilities. Please try again later.</p>;
    }

    if (featuresData.length === 0) {
        return <p className="text-center text-gray-600">No facilities available at the moment.</p>;
    }

    const displayedFeatures = showAll ? featuresData : featuresData.slice(0, 4);

    return (
        <div className="mt-16 w-11/12 mx-auto px-4 md:px-0">
            <div className="mb-10 text-center">
                <p className="text-2xl md:text-4xl font-bold hover:underline">BELOW ALL FACILITIES ARE ABSOLUTELY FREE</p>
                <p className="text-gray-600">We offer modern (5-star) hotel facilities for your comfort.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {displayedFeatures.map((item, index) => (
                    <div key={index} className="text-center transform transition-transform duration-300 hover:scale-105">
                        <div className="bg-red-700 p-3 rounded-2xl">
                            <img
                                className="w-32 h-32 md:w-44 md:h-44 object-cover border-2 border-[#853493] rounded-2xl"
                                src={item?.logo}
                                alt={item?.title}
                            />
                        </div>
                        <p className="mt-2 text-white font-semibold">{item?.title}</p>
                    </div>
                ))}
            </div>

            {/* Show More / Show Less Button */}
            <div className="flex justify-center mt-6">
                {featuresData.length > 4 && (
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className={`px-6 py-2 rounded-lg transition 
                        ${showAll ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Facility;
