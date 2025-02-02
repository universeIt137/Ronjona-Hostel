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
    if (isLoading) {
        return (
            <div className='py-10' >
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }
    const peopleData = [
        {
            name: "Juthi Sharmin",
            description:
                "ronjona women's Hostel is a modern hostel for women. It is the only Hostel available in Uttara which provides 'Quality Living' in a 'Homely Atmosphere'. Our hostel will be the perfect solution for accommodation for ladies students and working women who are away from home for their studies and job.",
            image: "https://www.ronjonabd.co/wp-content/uploads/2021/05/IMG-20210519-WA0000.jpg", // Replace with actual image URL
        },
        {
            name: "Taskiat Rahman",
            description:
                "Our place is an only women hostel, quiet, cosy and well-located. Very quiet hostel, the staffs are so friendly, kind and helpful and close enough to walk to many College and University of Uttara.",
            image: "https://www.ronjonabd.co/wp-content/uploads/2021/05/IMG-20210519-WA0000.jpg", // Replace with actual image URL
        },
    ];
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
            </div>
        </div>
    );
};

export default ManagementInfoPage;