import React from 'react';
import { useState } from 'react';
import { bookingAlert } from '../../../helper/bookingAlert';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';

const FooterBookingFrom = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0)
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;
        const payload = {
            name, email, phoneNumber
        };

        try {
            let resp = await bookingAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                const res = await axiosPublic.post(`/booking-upload`, payload);
                setLoading(false);
                if (res) {
                    toast.success('Booking successfully!');
                    e.target.reset();
                    return;
                }
            }
        } catch (error) {
            setLoading(false);
            toast.error('Something went wrong!');
        }

    }
    return (
        <div>
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg mt-32 p-6 mb-10">
                <h2 className="text-2xl font-bold text-center mb-4">Booking Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Mobile Number Field */}
                    <div>
                        <label className="block font-semibold mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center items-center bg-[#853493] text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? (
                            <svg className="w-5 h-5 mr-2 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default FooterBookingFrom;