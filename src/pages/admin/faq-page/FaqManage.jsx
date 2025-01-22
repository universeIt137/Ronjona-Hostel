import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

const FaqManage = () => {
  

  const axiosPublic = useAxiosPublic()

  const { data: faqData = [], refetch, isLoading } = useQuery({
    queryKey: ['faqData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/faq',);
      return res.data.data;
    }
  });

  const handleUpdate = (index) => {
    const updatedData = [...faqData];
    updatedData[index].questions = prompt('Update the question:', updatedData[index].questions);
    updatedData[index].answer = prompt('Update the answer:', updatedData[index].answer);
  };

  const handleDelete = (index) => {
    const updatedData = faqData.filter((_, i) => i !== index);
  };

  if (isLoading) {
    return (
      <div>
        <SkeletonLoader></SkeletonLoader>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-md">
      <Helmet>
        <title>Dashboard | Faq Manage Page </title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6">FAQ Table</h1>

      {/* Table */}
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-lg font-semibold">Logo</th>
            <th className="px-4 py-2 border-b text-lg font-semibold">Question</th>
            <th className="px-4 py-2 border-b text-lg font-semibold">Answer</th>
            <th className="px-4 py-2 border-b text-lg font-semibold">Uplod Date</th>
            <th className="px-4 py-2 border-b text-lg font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqData.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">
                <img src={item.logo} alt="Logo" className="w-16 h-16 object-cover rounded-md" />
              </td>
              <td className="px-4 py-2 border-b">{item.questions}</td>
              <td className="px-4 py-2 border-b">{item.answer.slice(0,30)}....</td>
              <td className="px-4 py-2 border-b"> {new Date(item.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border-b flex items-center gap-4">
                <button
                  onClick={() => handleUpdate(index)}
                  className="text-blue-600 hover:text-blue-800 transition duration-200"
                >
                  <FaEdit className="text-xl" />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800 transition duration-200"
                >
                  <FaTrash className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FaqManage;
