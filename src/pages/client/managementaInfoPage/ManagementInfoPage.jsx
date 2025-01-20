import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

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
    return (
        <div>
            <div className="container mx-auto mt-32 p-4">
                <h1 className="lg:text-4xl text-xl font-bold text-start p-4">Management Information</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
                    {
                        teamDatas.map((item, i) => {
                            return (
                                <div key={i} >
                                    {/* card */}
                                    <div className="border-8 border-[#97509F] rounded-lg">
                                        <div className="lg:text-3xl text-xl text-center font-bold p-4"><p className="">Ronjona Hostel</p></div>
                                        <div className="">
                                            <img src={item?.img} alt="" className='flex justify-self-center lg:w-40 w-20 aspect-square rounded-[300px]' />
                                        </div>
                                        {/* about section */}
                                        <div className="text-center mt-4">
                                            <p className="font-semibold text-lg">{  item?.name }</p>
                                            <p className="font-semibold text-md"> { item?.role }</p>
                                            <p className="font-semibold text-md">{ item?.phoneNumber } </p>
                                            <p className="font-semibold text-md"> { item?.emai } </p>
                                        </div>
                                        {/* experience data */}
                                        <div className="flex justify-end w-full my-4">
                                            <div className="bg-[#97509F] text-white w-1/2 px-4">
                                                <p className="">Experience:</p>
                                                <p className=""> {item?.experience } Years </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    );
};

export default ManagementInfoPage;