import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

const TermCondiction = () => {
  const axiosPublic = useAxiosPublic();
  // Team data


  const { data: termCondiction = [], refetch, isLoading } = useQuery({
    queryKey: ['termCondiction'],
    queryFn: async () => {
      const res = await axiosPublic.get('/get-term');
      return res?.data?.data?.[0];
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
    <div className='w-11/12 mx-auto my-28 ' >
      <div
        className="text-lg text-black py-10"
        dangerouslySetInnerHTML={{ __html: termCondiction?.desc }}
      />
    </div>
  )
}

export default TermCondiction
