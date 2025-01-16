import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { deleteAlert } from '../../../helper/deleteAlert';
import { config } from 'localforage';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const ManageOffer = () => {
  const axiosPublic = useAxiosPublic();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };


  const { data: offersData = [], refetch } = useQuery({
    queryKey: ['offersData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/all-offer',);
      return res.data.data;
    }
  });

  const navigate = useNavigate()




  const handleDelete = async (id) => {
    const resp = await deleteAlert();
    try {
      if (resp.isConfirmed) {
        let res = await axiosPublic.delete(`/offer-delete/${id}`, config);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Offer delete successfully",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
          return;
        }
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Offer delete fail",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };



  return (
    <div className="overflow-x-auto py-8 text-center ">
      <Helmet>
        <title>Dashboard | Offer Manage Page </title>
      </Helmet>
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 py-4 px-6 border-b">Manage Offers</h2>
        <table className="min-w-full table-auto border-collapse text-left">
          <thead className="bg-blue-100 text-gray-700 text-center ">
            <tr>
              <th className="px-6 py-3 text-sm font-medium border-b">Image</th>
              <th className="px-6 py-3 text-sm font-medium border-b">Link</th>
              <th className="px-6 py-3 text-sm font-medium border-b">Upload Date</th>
              <th className="px-6 py-3 text-sm font-medium border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {offersData.length > 0 ? (
              offersData.map((offer, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  {/* Image */}
                  <td className="px-6 py-4 border-b">
                    <img
                      src={offer.img}
                      alt="Offer"
                      className="w-16 h-16 block mx-auto object-cover rounded-md border"
                    />
                  </td>
                  {/* Link */}
                  <td className="px-6 py-4 text-center border-b">
                    <a
                      href={offer.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {offer.link}
                    </a>
                  </td>
                  {/* Upload Date */}
                  <td className="px-6 py-4 text-sm text-gray-600 border-b text-center ">
                    {new Date(offer.createdAt).toLocaleDateString()}
                  </td>
                  {/* Actions */}
                  <td className="px-6 py-4 text-center border-b">
                    <div className="flex justify-center items-center space-x-4">
                      <Link to={`/dashboard/update-offer/${offer?._id}`}>
                        <button
                          className="text-yellow-500 hover:text-yellow-700 p-2 rounded-full transition-colors"
                        >
                          <FaEdit size={18} />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(offer?._id)}
                        className="text-red-500 hover:text-red-700 p-2 rounded-full transition-colors"
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500 border-b">
                  No offers available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOffer;
