import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';
import { Helmet } from 'react-helmet-async';

const Refund = () => {
  const axiosPublic = useAxiosPublic();
  // Team data


  const { data: refundData = [], refetch, isLoading } = useQuery({
    queryKey: ['refundData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/refund');
      return res?.data?.data?.[0];
    }
  })
  window.scrollTo(0,0)
  if (isLoading) {
    return (
      <div>
        <SkeletonLoader></SkeletonLoader>
      </div>
    )
  }
  return (
    <div className='w-11/12 mx-auto my-28 ' >
      <Helmet>
        <title>Dashboard | Ronjona Refund Page </title>
      </Helmet>
      <div
        className="text-lg text-justify text-black py-10"
        dangerouslySetInnerHTML={{ __html: refundData?.desc }}
      />
    </div>
  )
}

export default Refund
