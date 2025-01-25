import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';
import KeyFeatures from '../../key features/KeyFeatures';

const NavFacility = () => {
    const axiosPublic = useAxiosPublic();

    const { data: featuresData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['featuresData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllFeatures');
            return res.data?.data;
        }
    });

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        );
    }

    window.scrollTo(0,0)

    return (
        <div className="mt-28 w-11/12 mx-auto  px-4 md:px-0 md:mx-auto">
            <div className="mb-10">
                <p className="text-2xl md:text-4xl hover:underline font-bold">BELOW ALL FACILITIES ARE ABSILUTELY FREE</p>
                <p>We offer modern (5 star) hotel facilities for your comfort.</p>
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
            <KeyFeatures></KeyFeatures>
        </div>
    );
};

export default NavFacility;
