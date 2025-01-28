import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa"; // Import delete icon from react-icons
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";

const ManageBookingPackages = () => {
    const [data, setData] = useState([
        {
            name: "John Doe",
            phoneNumber: "123-456-7890",
            tran_id: "001",
            title: "Product 1",
            price: "$100",
            branch: "Branch 1",
            location: "Location 1",
        },
        {
            name: "Jane Smith",
            phoneNumber: "987-654-3210",
            tran_id: "002",
            title: "Product 2",
            price: "$200",
            branch: "Branch 2",
            location: "Location 2",
        },
    ]);
    const axiosPublic = useAxiosPublic();
    // Team data


    const { data: bookingData = [], refetch, isLoading } = useQuery({
        queryKey: ['bookingData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/manage-booking');
            return res.data.data;
        }
    })
    if(isLoading){
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
                        <th className="px-4 py-2 border border-gray-300">Location</th>
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
                            <td className="px-4 py-2 border border-gray-300">{row.locationDetails?.location}</td>
                            <td className="px-4 py-2 border border-gray-300">{
                                row?.status ? "Confirm" : "Not confirm"
                            }</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button
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
