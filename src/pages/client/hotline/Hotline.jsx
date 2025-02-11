import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

const Hotline = () => {
  const axiosPublic = useAxiosPublic();
  const { data: hotlineData = [], isLoading } = useQuery({
    queryKey: ["hotlineData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/all-hotline");
      return res.data.data;
    },
  });
  if (isLoading) {
    return (
      <div>
        <SkeletonLoader></SkeletonLoader>
      </div>
    )
  }
  return (
    <div className='mt-32 mb-12' >
      <div className='w-11/12 mx-auto'>
        <div className='grid lg:grid-cols-4 gap-4 grid-cols-2 ' >
          {
            hotlineData.map((item, i) => {
              return (
                <div className='border p-4 shadow-md rounded-md  ' key={i} >
                  <h1>Number : {item?.hotlineNumber} </h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Hotline
