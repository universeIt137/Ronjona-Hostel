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
            <div className="container mx-auto mt-14 p-4">
                <Helmet>
                    <title>Ronjon | Management Page </title>
                </Helmet>
                <div className=" my-8 ">
                    <div className=" mx-auto">
                        <div className='  ' >
                            <h1 className='text-center font-bold text-4xl mb-4 text-[#853493] ' >The Management</h1>
                            <div className='w-[25%] h-1 text-[#853493] block mx-auto ' ></div>
                        </div>

                        <div className=' max-w-4xl mx-auto   ' >
                            {teamDatas.map((person, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col lg:flex-row items-center justify-between  lg:gap-32 gap-3 lg:items-center mb-12"
                                >
                                    <div
                                        className={`${index % 2 === 0 ? "lg:order-1      " : "lg:order-2  "
                                            } flex-1  text-center lg:text-justify gap-52 `}
                                    >
                                        <h2 className="text-2xl font-semibold italic mb-2">
                                            {person.name}
                                        </h2>
                                        <p className="text-gray-700 text-justify ">{person.des}</p>
                                    </div>
                                    <div
                                        className={`${index % 2 === 0 ? "lg:order-2 justify-end " : "lg:order-1  "
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
                </div>


            </div>
        </div>
    );
};

export default ManagementInfoPage;