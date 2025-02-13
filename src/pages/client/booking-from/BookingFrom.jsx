import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { bookingAlert } from '../../../helper/bookingAlert';
import Swal from 'sweetalert2';
import { useState } from 'react';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';
import PaymentCard from '../../../components/payment-card/PaymentCard';

const BookingFrom = () => {
    window.scrollTo(0, 0)
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    // Fetch package data by ID
    const { data: singlePacagesData = {}, isLoading } = useQuery({
        queryKey: ['singlePacagesData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getPackageById/${id}`);
            console.log(res?.data?.data);
            return res.data.data;
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phoneNumber = e.target.phoneNumber.value;
        const packagesId = e.target.packagesId.value;
        const tran_id = e.target.tran_id.value;

        const payload = {
            name,
            phoneNumber,
            packagesId,
            tran_id
        };


        let resp = await bookingAlert();

        try {
            if (resp.isConfirmed) {
                setLoading(true); // Set loading to true
                const res = await axiosPublic.post('/booking', payload);
                setLoading(false); // Set loading back to false after submission

                if (res) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Package booking successful',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                }
            }
        } catch (error) {
            setLoading(false); // Ensure loading is set back to false on error
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Package booking failed',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    if (isLoading) {
        return (
            <div className='' >
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }

    return (
        <>
            <div className="flex justify-center mt-40 lg:mt-24 w-11/12 mx-auto   items-center  p-4">
                <Helmet>
                    <title>Ronjona | Booking Form</title>
                </Helmet>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border p-2 rounded-lg shadow-lg w-full  space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center text-[#853493] ">Booking Form</h2>

                    <div className='grid lg:grid-cols-2 gap-3 ' >
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phoneNumber" className="block text-gray-600 font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                id="phoneNumber"
                                type="tel"
                                name="phoneNumber"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        {/* tranzisiton id */}
                        <div>
                            <label htmlFor="tran_id" className="block text-gray-600 font-semibold mb-2">
                            Transition Number
                            </label>
                            <input
                                id="tran_id"
                                type="text"
                                name="tran_id"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your transition number "

                            />
                        </div>

                        {/* Package Selection Field */}
                        <div>
                            <label htmlFor="package" className="block text-gray-600 font-semibold mb-2">
                                Select Package
                            </label>
                            <select
                                id="package"
                                name="packagesId"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option disabled selected value={singlePacagesData._id}>
                                    {singlePacagesData?.title}
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading} // Disable button when loading
                            className={`flex items-center justify-center bg-[#853493] text-white font-semibold px-6 py-3 rounded-lg focus:outline-none  ${loading ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                        >
                            {loading ? (
                                <svg
                                    className="w-5 h-5 mr-2 text-white animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <div className='my-10' >
                <PaymentCard></PaymentCard>
            </div>
        </>
    );
};

export default BookingFrom;
