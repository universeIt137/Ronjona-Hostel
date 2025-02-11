import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';
import { FaRegDotCircle } from 'react-icons/fa';

const NavFacility = () => {
    const axiosPublic = useAxiosPublic();


    const { data: featuresData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['featuresData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllFeatures');
            return res.data?.data;
        }
    });

    console.log(featuresData)

    const { data: keyFeaturesData = {} } = useQuery({
        queryKey: ["keyFeaturesData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/key-features");
            return res.data.data[0] || {};
        },
    });

    console.log(keyFeaturesData)



    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        );
    }

    window.scrollTo(0, 0)

    return (
        <div className="mt-28 w-11/12 mx-auto  px-4 md:px-0 md:mx-auto">
            <div className="mb-10">
                <p className="text-2xl md:text-4xl hover:underline font-bold text-[#A020BA] ">BELOW ALL FACILITIES ARE ABSILUTELY FREE</p>
                <p className='text-[#A020BA]' >We offer modern (5 star) hotel facilities for your comfort.</p>
            </div>
            <div>
                <div className="flex justify-center my-8">
                    <button className="bg-[#A020BA] px-4 py-2 lg:px-8 lg:py-4 text-xl lg:text-4xl text-white rounded-md hover:bg-purple-700 transition duration-300">
                        Features and Key Facilities
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-6 ">
                    {featuresData.map((item, i) => (
                        <div className='' key={i}>
                            <div className="justify-items-center   text-white my-2  transform transition-transform duration-300 hover:scale-105">
                                <div className="bg-red-700  rounded-2xl ">
                                    <img className=" w-44   h-44 border-2 border-[#853493] rounded-2xl " src={item?.logo} alt={item?.title} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="gap-8 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {keyFeaturesData?.images?.map((item, i) => (
                            <div key={i}>
                                <img
                                    src={item?.img}
                                    alt={`Feature ${i + 1}`}
                                    className="w-full h-40 sm:h-48 lg:h-60 object-cover rounded-md shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Features and Facilities Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 lg:p-8 bg-[#A020BA] text-white ">
                {/* Features Section */}
                <div>
                    <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-[#A020BA]">Features</h1>
                    <ul className="space-y-4 lg:space-y-6 text-base lg:text-lg">
                        {keyFeaturesData?.features?.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div><FaRegDotCircle className="text-[#A020BA] mt-1 text-xl" /></div>
                                <span>{item?.title}</span>
                            </li>
                        ))}
                    </ul>


                </div>

                {/* Facilities Section */}
                <div>
                    <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-[#A020BA]">Facilities</h1>
                    <ul className="space-y-4 lg:space-y-6 text-base lg:text-lg">
                        {keyFeaturesData.facilities?.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div><FaRegDotCircle className="text-[#A020BA] mt-1 text-xl" /></div>
                                <span>{item?.title}</span>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default NavFacility;
