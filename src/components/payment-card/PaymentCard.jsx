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
                                <div className="card bg-base-100 border h-60 p-6 shadow-xl">
                                    <p className=""><span className='font-bold' >Account Name :</span> {item?.accountName}</p>
                                    <p> <span className='font-bold' >Account Number :</span> {item?.accountNumber}</p>
                                    {
                                        item?.phoneNumber ? <>
                                            <p> <span className='font-bold' >Bank Name :</span>  {item?.bankName}</p>
                                            <p> <span className='font-bold' >Phone Number :</span>  {item?.phoneNumber}</p>
                                            <p > <span className='font-bold' >Branch Name :</span> {item?.branchName}</p>
                                        </> : <></>
                                    }

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
