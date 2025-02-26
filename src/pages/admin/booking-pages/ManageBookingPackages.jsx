import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa"; // Import delete icon from react-icons
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { updateAlert } from "../../../helper/updateAlert";
import Swal from "sweetalert2";
import { deleteAlert } from "../../../helper/deleteAlert";
import { useNavigate } from "react-router-dom";

const ManageBookingPackages = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    // Team data


    const { data: bookingData = [], refetch, isLoading } = useQuery({
        queryKey: ['bookingData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/manage-booking');
            return res.data.data;
            
        }
    });
    console.log(bookingData)
    const statusUpdate = async (id) => {
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.put(`/manage-booking/${id}`);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status update",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        } catch (error) {
            navigate("/admin-login")
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Status update fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    const handleDelete = async (id) => {
        try {
            const resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/manage-booking/${id}`);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Delete successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        } catch (error) {
            navigate("/admin-login")
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Delete fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }
    return (
        <div className="overflow-x-auto mt-20 ">
            <Helmet>
                <title>Dashboard | Manage booking from page</title>
            </Helmet>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-300">Name</th>
                        <th className="px-4 py-2 border border-gray-300"> Number</th>
                        <th className="px-4 py-2 border border-gray-300">Transaction ID</th>
                        <th className="px-4 py-2 border border-gray-300">Packages Name</th>
                        <th className="px-4 py-2 border border-gray-300">Price</th>
                        <th className="px-4 py-2 border border-gray-300">Branch</th>
                        <th className="px-4 py-2 border border-gray-300">amount</th>
                        <th className="px-4 py-2 border border-gray-300">Status</th>
                        <th className="px-4 py-2 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingData.map((row) => (
                        <tr key={row.tran_id} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border border-gray-300">{row.name}</td>
                            <td className="px-4 py-2 border border-gray-300">{row.phoneNumber}</td>
                            <td className="px-4 py-2 border border-gray-300">{row.tran_id}</td>
                            <td className="px-4 py-2 border border-gray-300">{row.packageDetails?.title}</td>
                            <td className="px-4 py-2 border border-gray-300">{row.packageDetails?.price}</td>
                            <td className="px-4 py-2 border border-gray-300">{row.branchDetails?.branch}</td>
                            <td className="px-4 py-2 border border-gray-300">{row.amount}</td>
                            <td onClick={() => statusUpdate(row?._id)} className="px-4 py-2 border  cursor-pointer border-gray-300">{
                                row?.status ? "Confirm" : "Not confirm"
                            }</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button onClick={() => handleDelete(row?._id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBookingPackages;
