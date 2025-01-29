import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { createAlert } from "../../../helper/createAlert";
import { deleteAlert } from "../../../helper/deleteAlert";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManagePayment = () => {
  window.scrollTo(0, 0);
  const axiosPublic = useAxiosPublic();
  // Team data


  const { data: paymentData = [], refetch, isLoading } = useQuery({
    queryKey: ['paymentData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/payment');
      return res.data.data;
    }
  })


  const handleDelete = async (id) => {
    let resp = await deleteAlert();
    try {
      if (resp.isConfirmed) {
        let res = await axiosPublic.delete(`/payment/${id}`);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data delete successfully",
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
        title: "Data delete fail",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/dashboard/payment-update/${id}`)
  }

  if (isLoading) {
    return (
      <div>
        <SkeletonLoader></SkeletonLoader>
      </div>
    )
  }




  return (
    <div className=" mt-20 mx-auto p-6 bg-white shadow-md rounded-md">
      <Helmet>
        <title>Dashboard | Payment Details Page</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-4">Payment Details</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border border-gray-300">Account Name</th>
              <th className="px-4 py-2 border border-gray-300">Account Number</th>
              <th className="px-4 py-2 border border-gray-300">Bank Name</th>
              <th className="px-4 py-2 border border-gray-300">Branch Name</th>
              <th className="px-4 py-2 border border-gray-300">Created Date</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">
                  {
                    item?.accountName
                  }
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.accountNumber}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.bankName}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.branchName}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-4">
                    <button
                      onClick={()=>handleUpdate(item?._id)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Update"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="text-red-600 hover:text-red-800"
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

export default ManagePayment;
