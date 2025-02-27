import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const PaymentCard = ({ paymentValue }) => {
    const axiosPublic = useAxiosPublic();


    const { data: paymentData = [], isLoading } = useQuery({
        queryKey: ['paymentData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payment');
            return res.data.data;
        }
    });

    if (isLoading) {
        return <p className="text-center">Loading...</p>;
    }

    const filteredData = paymentData?.find(item => item?.accountName.toLowerCase() === paymentValue);

    return (
        <div className='w-11/12 mx-auto'>
            {filteredData ? (
                <div className="card bg-base-100 border h-60 p-6 shadow-xl">
                    <div className="text-center">
                        <img className='w-12 h-12 rounded-full mx-auto' src={filteredData.logo} alt={filteredData.accountName} />
                    </div>
                    <p><span className='font-bold'>Account Name:</span> {filteredData.accountName}</p>
                    <p><span className='font-bold'>Account Number:</span> {filteredData.accountNumber}</p>
                    {filteredData.phoneNumber && (
                        <>
                            <p><span className='font-bold'>Bank Name:</span> {filteredData.bankName}</p>
                            <p><span className='font-bold'>Phone Number:</span> {filteredData.phoneNumber}</p>
                            <p><span className='font-bold'>Branch Name:</span> {filteredData.branchName}</p>
                        </>
                    )}
                </div>
            ) : (
                    // <p className="text-center text-gray-500">No payment details found.</p>
                    <></>
            )}
        </div>
    );
}

export default PaymentCard;
