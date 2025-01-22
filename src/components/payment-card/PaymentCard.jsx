import React from 'react'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const PaymentCard = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    // Team data


    const { data: paymentData = [], refetch, isLoading } = useQuery({
        queryKey: ['paymentData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payment');
            return res.data.data;
        }
    })
    return (
        <div className='w-11/12 mx-auto ' >
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 ' >
                {
                    paymentData?.map((item, i) => {
                        return (
                            <div key={i} >
                                <div className="card bg-base-100  shadow-xl">
                                    <figure>
                                        <img
                                            className='w-32 h-32  '
                                            src= {item?.logo}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{ item?.paymentName}</h2>
                                        <p>Number : { item?.phoneNumber}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PaymentCard
