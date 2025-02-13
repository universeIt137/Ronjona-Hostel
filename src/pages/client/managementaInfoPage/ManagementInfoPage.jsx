import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';
import { Helmet } from 'react-helmet-async';
import ManageAbout from './ManageAbout';
import ServiceOffer from './ServiceOffer';

const ManagementInfoPage = () => {

    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    // Team data


    const { data: teamDatas = [], refetch, isLoading } = useQuery({
        queryKey: ['teamDatas'],
        queryFn: async () => {
            const res = await axiosPublic.get('/team');
            return res.data.data;
        }
    });
    const { data: featuresDatas = [], isError, } = useQuery({
        queryKey: ['featuresDatas'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllFeatures');
            return res.data?.data;
        }
    });
    if (isLoading) {
        return (
            <div className='py-10' >
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }

    return (
        <div>
            <div className="container mx-auto mt-32 p-4">
                <Helmet>
                    <title>Ronjon | Management Page </title>
                </Helmet>
                <ManageAbout></ManageAbout>
                <div className=" my-8 ">
                    <div className=" mx-auto">
                        <div className=' my-14 ' >
                            <h1 className='text-center font-bold text-4xl mb-4 ' >The Management</h1>
                            <div className='w-[25%] h-1 bg-black block mx-auto ' ></div>
                        </div>

                        {teamDatas.map((person, index) => (
                            <div
                                key={index}
                                className="flex flex-col lg:flex-row items-center lg:gap-32 gap-3 lg:items-center mb-12"
                            >
                                <div
                                    className={`${index % 2 === 0 ? "lg:order-1     " : "lg:order-2  "
                                        } flex-1  text-center lg:text-justify gap-52 `}
                                >
                                    <h2 className="text-2xl font-semibold italic mb-2">
                                        {person.name}
                                    </h2>
                                    <p className="text-gray-700 text-justify ">{person.des}</p>
                                </div>
                                <div
                                    className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                                        } flex-1 justify-between `}
                                >
                                    <img
                                        src={person.img}
                                        alt={person.name}

                                        className="w-64 h-64 object-cover rounded-lg shadow-lg"
                                    />
                                    <p className='font-semibold italic lg:ml-28 mt-2 ' >{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <ServiceOffer></ServiceOffer>
                </div>
                <div className='my-4' >
                    <h1 className='text-4xl italic mb-4 ' >Oteher Services are</h1>
                    <div className="grid grid-cols-2 md:grid-cols-6 ">
                        {featuresDatas.slice(0,6).map((item, i) => (
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
            </div>
        </div>
    );
};

export default ManagementInfoPage;