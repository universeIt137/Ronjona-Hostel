import React from 'react';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const RelatedPackages = () => {
    const axiosPublic = useAxiosPublic();

    const { data: packagesData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['packagesData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPackages');
            return res.data?.data;
        }
    });
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/packages-booking-from/${id}`)
    }
    return (
        <div className="h-auto p-5 rounded-[30px] mt-10 bg-gray-200 shadow-lg">
            <h2 className="text-xl font-semibold mb-5 text-center">Related Packages</h2>
            <div className="h-[100lvh] overflow-y-auto">
                <div className="flex flex-col  rounded-lg p-4  shadow-md hover:shadow-lg transition-shadow w-full my-4">
                    {
                        packagesData.slice(0,5).map((item, i) => {
                            return (
                                <div key={i} className='my-4 border-2 border-[#853493] py-3 shadow-xl rounded-lg  ' >
                                    <img
                                        className="h-48 w-64 rounded-[15px] object-cover"
                                        src={
                                            item?.img[0]
                                        }
                                        alt="Package"
                                    />
                                    <div className="flex flex-col justify-between ml-4 w-full">
                                        <div>
                                            {/* <h3 className="text-lg font-semibold">Package Title</h3> */}
                                            <p className="text-black my-2 font-semibold text-xl  "> { item?.title } </p>
                                        </div>
                                        <div className="flex gap-6  items-center mt-2">
                                            <p className="text-black font-bold">Price : { item?.price } টাকা </p>
                                            <button onClick={()=>handleNavigate(item?._id)} className="px-4 py-2 bg-[#853493] text-white rounded-lg  transition-colors">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Add more package cards here if needed */}
            </div>
        </div>
    );
};

export default RelatedPackages;
