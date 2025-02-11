import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import toast, { Toaster } from 'react-hot-toast'
import { updateAlert } from '../../../helper/updateAlert';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';

const HotlineUpdate = () => {
    const {id} = useParams()
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(false);
    const { data: singleNumber = [], refetch, isLoading } = useQuery({
        queryKey: ["singleNumber",id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/hotline-by-id/${id}`);
            return res.data.data;
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hotlineNumber = e.target.hotlineNumber.value;
        const payload = {
            hotlineNumber
        };

        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                setLoading(true)
                let res = await axiosPublic.put(`/hotline-update/${id}`, payload);
                setLoading(false);
                if (res) {
                    toast.success("Update successfully");
                    refetch();
                    return;
                }

            }
        } catch (error) {
            setLoading(false);
            return toast.error("Something went wrong")
        }
    }
    return (
        <div>
            <div className="max-w-md mx-auto bg-white p-6 my-32 rounded-lg shadow-lg">
                <Helmet>
                    <title>Dashboard | Update Hotline</title>
                </Helmet>
                <h2 className="text-2xl font-semibold text-center mb-4">Update Form</h2>

                <form onSubmit={handleSubmit} className="space-y-4">


                    {/* Hotline Number Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Hotline Number
                        </label>
                        <input
                            type="tel"
                            name="hotlineNumber"
                            placeholder="Enter hotline number"
                            defaultValue={singleNumber?.hotlineNumber}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#853493]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#853493] text-white py-2 rounded-lg hover:bg-[#6d2a77] transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
                <Toaster position="top-center" />
            </div>
        </div>
    )
}

export default HotlineUpdate
