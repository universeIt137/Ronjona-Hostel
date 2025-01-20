import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Marquee from 'react-fast-marquee';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

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
        <div className="bg-gray-100">
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

            {/* Project Features Section */}
            <section className="py-8 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-6">Key Features</h2>
                    <Marquee gradient={false} className="space-x-8">
                        {
                            vissionData?.keyFeatures.map((item, i) => {
                                return (
                                    <div key={i} >
                                        <div
                                            className="max-w-lg flex-shrink-0  w-full h-[400px] text-justify p-6 bg-[#7F2B90] border border-gray-200 rounded-lg shadow-lg text-white dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <p className="mb-3 font-normal text-sm sm:text-base lg:text-lg">
                                                {
                                                    item?.des
                                                }
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Marquee>

                </div>
            </section>
        </div>
    );
};

export default VissionPage;