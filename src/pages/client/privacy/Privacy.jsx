import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Privacy = () => {
    const axiosPublic = useAxiosPublic();
    // Team data


    const { data: privacyData = [], refetch, isLoading } = useQuery({
        queryKey: ['privacyData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/team');
            return res.data.data;
        }
    })
    return (
        <div className='w-11/12 mx-auto my-28 ' >
            <h1>privacy</h1>
        </div>
    )
}

export default Privacy
