import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { deleteAlert } from "../../../helper/deleteAlert";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ManageTeam = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    // Team data


    const { data: teamData = [], refetch, isLoading } = useQuery({
        queryKey: ['teamData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/team');
            return res.data.data;
        }
    })

    // Handle delete action
    const handleDelete = async (id) => {
        console.log(id);
        let resp = await deleteAlert();
        try {
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/team/${id}`);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data delete successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data delete fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const navigate = useNavigate()

    // Handle update action
    const handleUpdate = (id) => {
        navigate(`/dashboard/team-update/${id}`)
        // Swal.fire("Feature in Progress!", "Update functionality is not yet implemented.", "info");
    };

    if (isLoading) {
        return (
            <div className="py-8" >
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center  p-4">
            <Helmet>
                <title>Dashboard | Manage team page </title>
            </Helmet>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full ">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center ">Team Members</h2>
                <table className="table-auto w-full text-left border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-3 border border-gray-300">Image</th>
                            <th className="p-3 border border-gray-300">Name</th>
                            <th className="p-3 border border-gray-300">Role</th>
                            <th className="p-3 border border-gray-300">Phone</th>
                            <th className="p-3 border border-gray-300">Email</th>
                            <th className="p-3 border border-gray-300">Experience</th>
                            <th className="p-3 border border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamData.map((member) => (
                            <tr key={member.id} className="border-b">
                                <td className="p-3 border border-gray-300">
                                    {member.img ? (
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                                            N/A
                                        </div>
                                    )}
                                </td>
                                <td className="p-3 border border-gray-300">{member.name}</td>
                                <td className="p-3 border border-gray-300">{member.role}</td>
                                <td className="p-3 border border-gray-300">{member.phoneNumber}</td>
                                <td className="p-3 border border-gray-300">{member.email}</td>
                                <td className="p-3 border border-gray-300">{member.experience} Years</td>
                                <td className="p-3 border border-gray-300">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            onClick={() => handleUpdate(member._id)}
                                            className="text-blue-500 hover:text-blue-700"
                                            title="Update"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(member._id)}
                                            className="text-red-500 hover:text-red-700"
                                            title="Delete"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTeam;
