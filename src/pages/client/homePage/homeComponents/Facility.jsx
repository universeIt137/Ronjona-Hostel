import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const Facility = () => {
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
            <div className="flex flex-col justify-center items-center h-screen">
                <h1>Loading Data....</h1>
            </div>
        );
    }

    return (
        <div className="mt-16 w-11/12 mx-auto  px-4 md:px-0 md:mx-auto">
            <div className="mb-10">
                <p className="text-2xl md:text-4xl hover:underline font-bold text-main-color">Our Facilities</p>
                <p>We offer modern (5 star) hotel facilities for your comfort.</p>
            </div>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {featuresData.map((item, i) => (
                        <div key={i}>
                            <div className="justify-items-center bg-[#5a514f] text-white py-7 lg:py-16 transform transition-transform duration-300 hover:scale-105">
                                <div className="h-8">
                                    <img className="w-12" src={item?.logo} alt={item?.title} />
                                </div>
                                <div className="lg:mt-8 mt-6 ">
                                    <p>{item?.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facility;
