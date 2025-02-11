import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { deleteAlert } from "../../../helper/deleteAlert";
import { useNavigate } from "react-router-dom";

const ManageAddress = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch hotline data
    const { data: hotlineData = [], refetch, isLoading } = useQuery({
        queryKey: ["getAllHotlines"],
        queryFn: async () => {
            const res = await axiosPublic.get("/all-hotline");
            return res.data.data;
        },
    });

    // Delete hotline function
    const handleDelete = async (id) => {
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/hotline-delete/${id}`);
                if (res) {
                    toast.success("Hotline deleted successfully");
                    refetch(); // Refresh data
                }
            }

        } catch (error) {
            toast.error("Failed to delete hotline");
        }
    };

    const navigate = useNavigate();


    const handleUpdate = (id) => {
        navigate(`/dashboard/hotline-update/${id}`)
    }

    return (
        <div className="max-w-4xl mx-auto my-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Manage Address</h2>

            {isLoading ? (
                <p className="text-center text-gray-600">Loading hotlines...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Hotline Number</th>
                                <th className="border border-gray-300 px-4 py-2">Created At</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotlineData.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-4 text-gray-500">
                                        No hotlines found
                                    </td>
                                </tr>
                            ) : (
                                hotlineData.map((item, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">{item.hotlineNumber}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 mr-2"
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                Delete
                                            </button>
                                            <button onClick={()=>{handleUpdate(item?._id)}}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
            <Toaster position="top-center"></Toaster>
        </div>
    );
};

export default ManageAddress;
