import React from 'react';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const RelatedPackages = () => {
    const axiosPublic = useAxiosPublic();

    const { data: packagesData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['packagesData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPackages');
            console.log(res?.data?.data[0]?.img)
            return res.data?.data;
        }
    });
    return (
        <div className="h-auto p-5 rounded-[30px] mt-10 bg-gray-200 shadow-lg">
            <h2 className="text-xl font-semibold mb-5 text-center">Related Packages</h2>
            <div className="h-[100lvh] overflow-y-auto">
                <div className="flex bg-white p-4 rounded-[15px] shadow-md hover:shadow-lg transition-shadow w-full my-4">
                    {
                        packagesData.map((item, i) => {
                            return (
                                <div key={i} >
                                    <img
                                        className="h-48 w-64 rounded-[15px] object-cover"
                                        src={
                                            item?.img
                                        }
                                        alt="Package"
                                    />
                                    <div className="flex flex-col justify-between ml-4 w-full">
                                        <div>
                                            <h3 className="text-lg font-semibold">Package Title</h3>
                                            <p className="text-gray-600">Destination Ranch</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <p className="text-green-600 font-bold">$199</p>
                                            <button className="px-4 py-2 bg-main-color text-white rounded-lg hover:bg-blue-600 transition-colors">
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
