import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash, FaInfoCircle } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { updateAlert } from "../../../helper/updateAlert";
import Swal from "sweetalert2";

const ManageContact = () => {
    const axiosPublic = useAxiosPublic();

    const { data: tableData = [], refetch } = useQuery({
        queryKey: ["tableDatas"],
        queryFn: async () => {
            const res = await axiosPublic.get("/all-data");
            return res.data.data;
        },
    });

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            alert(`Delete row with ID: ${id}`);
        }
    };

    const handleDetails = (item) => {
        alert(
            `Details:\nName: ${item.name}\nEmail: ${item.email}\nMessage: ${item.message}\nStatus: ${item.status}`
        );
    };

    const updateStatus = async (id) => {
        const resp = await updateAlert()
        try {
            if (resp.isConfirmed) {
                let res = await axiosPublic.put(`/update-status/${id}`, {});
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Status update fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    refetch()

    return (
        <div className="p-6">
            <div className="overflow-x-auto sm:overflow-visible bg-white rounded-lg shadow-md">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-700 font-medium">Se. No</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-medium">Name</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-medium">Email</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-medium">Message</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-medium">Status</th>
                            <th className="px-6 py-3 text-center text-gray-700 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr
                                key={item.id}
                                className="border-b hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">{item.email}</td>
                                <td className="px-6 py-4">{item.message?.slice(0, 20) || "No message"}...</td>
                                <td className="px-6 py-4">
                                    <span onClick={() => updateStatus(item?._id)}
                                        className={`px-3 cursor-pointer border-2 border-red-500 py-1 font-semibold text-sm rounded-full ${item.status === true
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.status ? "Confirmed" : "Not Confirmed"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center space-x-4">
                                    <button
                                        onClick={() => handleDetails(item)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <FaInfoCircle size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <FaTrash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {tableData.length === 0 && (
                    <p className="text-center text-gray-500 py-4">No data available</p>
                )}
            </div>
        </div>
    );
};

export default ManageContact;
