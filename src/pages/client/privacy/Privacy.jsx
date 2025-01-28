import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

const Privacy = () => {
    const axiosPublic = useAxiosPublic();
    // Team data


    const { data: privacyData = [], refetch, isLoading } = useQuery({
        queryKey: ['privacyData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getPrivacyById');
            return res.data.data[0];
        }
    })
    window.scrollTo(0, 0);
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
                <title>Ronjona | Privacy Page </title>
            </Helmet>
            <div
                className="text-lg text-black py-10  "
                dangerouslySetInnerHTML={{ __html: privacyData?.desc }}
            />
        </div>
    )
}

export default Privacy
