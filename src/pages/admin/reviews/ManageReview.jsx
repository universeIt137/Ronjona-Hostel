import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { deleteAlert } from '../../../helper/deleteAlert';
import Swal from 'sweetalert2';



const ManageReview = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allReviewData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['allReviewData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllReview');
            return res.data?.data;
        }
    });
    const handleAdd = () => {
        alert('Add action triggered!');
    };

    const handleDelete = async (id) => {
        let resp = await deleteAlert();
        try {
            if(resp.isConfirmed){
                const res = await axiosPublic.delete(`/deleteReview/${id}`);
                if (res.data.success) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Review has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                } else {
                    alert('Failed to delete review');
                }
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleEdit = (id) => {
        alert(`Delete action triggered for ID: ${id}`);
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Reviews</title>
            </Helmet>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold text-center mb-4">User Reviews</h2>
                {/* Add Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleAdd}
                        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                    >
                        <FaPlus />
                        Add Review
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Serial No</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Review</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Location</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Created At</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allReviewData.length > 0 ? (
                                allReviewData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 border-b text-sm text-gray-800">{index + 1}</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-800">{item.name}</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-800">{item.review.slice(0,20)}..</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-800">{item.location}</td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-800">
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 border-b text-sm text-gray-800">
                                            {/* Edit Button */}
                                            <button
                                                onClick={() => handleEdit(index)}
                                                className="text-blue-500 hover:text-blue-700 mr-2"
                                            >
                                                <FaEdit />
                                            </button>
                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handleDelete(item?._id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center px-6 py-4 text-gray-500">
                                        No data available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageReview;
