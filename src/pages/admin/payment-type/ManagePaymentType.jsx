import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { deleteAlert } from "../../../helper/deleteAlert";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ManagePaymentType = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch payment data
    const { data: paymentData = [], isLoading,refetch } = useQuery({
        queryKey: ["paymentData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payment-type`);
            return res.data.data;
        },
    });

    const handleDelete = async (id) => {
        try {
            const resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/payment-types/${id}`);
                if (res) {
                    toast.success("Payment type delete successfully");
                    refetch();
                }
            }
        } catch (error) {
            toast.error("Payment type delete fail.")
        }
    };
    const navigate = useNavigate();

    const handleUpdate = async (id) => {
        navigate(`/dashboard/payment-type-update/${id}`)
    }

    return (
        <div className="w-11/12 mx-auto mt-6">
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="px-4 py-3 text-left border">#</th>
                            <th className="px-4 py-3 text-left border">Payment Name</th>
                            <th className="px-4 py-3 text-left border">Upload Date</th>
                            <th className="px-4 py-3 text-left border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.length > 0 ? (
                            paymentData.map((item, index) => (
                                <tr key={index} className="border hover:bg-gray-100">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.paymentName}</td>
                                    <td className="px-4 py-2 border">
                                        {item.createdAt
                                            ? new Date(item.createdAt).toLocaleDateString()
                                            : "N/A"}
                                    </td>
                                    <td className="px-4 py-2 border flex gap-2">
                                        <button
                                            onClick={()=>handleUpdate(item?._id)}
                                            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item?._id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4 text-gray-500">
                                    No payment records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Toaster position="top-center" ></Toaster>
        </div>
    );
};

export default ManagePaymentType;
