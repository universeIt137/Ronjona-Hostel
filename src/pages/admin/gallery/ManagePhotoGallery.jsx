import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { deleteAlert } from "../../../helper/deleteAlert";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ManagePhotoGallery = () => {
    const axiosPublic = useAxiosPublic()

    const { data: PhotoData = [], refetch, isLoading } = useQuery({
        queryKey: ['PhotoData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPhoto',);
            return res.data.data;
        }
    });

    const handleDelete = async (id) => {
        let resp = await deleteAlert();
        try {
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/delete-photo/${id}`);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Img delete successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Img delete fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const navigate = useNavigate()

    const handleUpdate = (id) => {
        navigate(`/dashboard/photo-update/${id}`)
    };

    if (isLoading) {
        // return <SkeletonLoader></SkeletonLoader>
        return (
            <div>
                <SkeletonLoader/>
            </div>
        )

    }

    return (
        <div className=" flex justify-center items-center ">
            <Helmet>
                <title>Dashboard | Photo Gallery Manage Page</title>
            </Helmet>
            <div className="w-full ">
                <h2 className="text-2xl font-semibold text-center mb-6">Image Table</h2>
                <table className="table-auto w-full bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left">#</th>
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-left">Upload Date</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PhotoData.map((item, index) => (
                            <tr key={item.id} className="border-b">
                                {/* Index */}
                                <td className="px-4 py-2">{index + 1}</td>
                                {/* Image */}
                                <td className="px-4 py-2">
                                    <img
                                        src={item.img}
                                        alt={`Item ${index + 1}`}
                                        className="h-16 w-16 rounded object-cover"
                                    />
                                </td>
                                {/* Date */}
                                <td className="px-4 py-2">
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </td>
                                {/* Actions */}
                                <td className="px-4 py-2 my-6 text-center flex justify-center space-x-4">
                                    {/* Update */}
                                    <button
                                        onClick={() => handleUpdate(item._id)}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <FaEdit size={20} />
                                    </button>
                                    {/* Delete */}
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FaTrash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePhotoGallery;