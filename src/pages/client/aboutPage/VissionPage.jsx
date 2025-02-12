import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Marquee from 'react-fast-marquee';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';
import { Helmet } from 'react-helmet-async';

const VissionPage = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0);
    const { data: vissionData = [], refetch, isLoading } = useQuery({
        queryKey: ['vissionData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/vission-mission');
            return res.data.data[0];
        }
    })
    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }
    return (
        <div className="bg-gray-100 mb-10 ">
            <Helmet>
                <title>Ronjona | Mission&Vission Page </title>
            </Helmet>
            {/* Mission Section */}
            <section className="py-10 bg-gradient-to-r from-[#7F2B90] to-[#9B56A1] p-6 rounded-lg shadow-lg mt-32 mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
                <div className="max-w-6xl mx-auto px-6 lg:px-4 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">Our Mission & Vission</h1>
                    <p className="text-white mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-center">
                        {
                            vissionData?.missionVissionTitle
                        }
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-10 bg-gradient-to-r from-[#7F2B90] to-[#9B56A1] p-6 rounded-lg shadow-lg mt-8 mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
                <div className="max-w-6xl mx-auto px-6 lg:px-4 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">Our Mission</h1>
                    <p className="text-white mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                        {
                            vissionData?.missionTitle
                        }
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-10 bg-gradient-to-r from-[#7F2B90] to-[#9B56A1] p-6 rounded-lg shadow-lg mt-8 mx-4 lg:mx-8 transition-transform duration-300 hover:scale-105">
                <div className="max-w-6xl mx-auto px-6 lg:px-4 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">Our Vission</h1>
                    <p className="text-white mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                        {
                            vissionData?.vissionTitle
                        }
                    </p>
                </div>
            </section>

            
        </div>
    );
};

export default VissionPage;