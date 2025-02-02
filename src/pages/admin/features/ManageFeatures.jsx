import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import formatDateTime from '../../../hooks/useDateTime';
import { uploadImg } from '../../../hooks/UploadImage';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';


const ManageFeatures = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedLocation, setSelectedLocation] = useState(null); // Track selected user

    const [location, setLocation] = useState(selectedLocation?.location || "");
    const [image, setimage] = useState(null);


    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };


    const { data: features = [], refetch ,isLoading} = useQuery({
        queryKey: ['features'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllFeatures');
            return res.data.data;
        }
    })

    const navigate = useNavigate();

    // console.log(locations)

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPublic.delete(`/deleteFeature/${id}`, config);
                    if (res.data.success) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Feature has been deleted",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    } else {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: res.data.message || "Failed to save location",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                } catch (error) {
                    navigate("/admin-login")
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: error.response?.data?.message || "An error occurred. Please try again.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });


    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.files[0];

        let logo = '';
        if (image) {
            logo = await uploadImg(image);  // Assume uploadImg is an async function returning the image URL
        } else {
            logo = selectedLocation.img;
        }




        const payload = { title, logo };
        console.log(payload);
        try {
            const res = await axiosPublic.put(`/updateFeature/${selectedLocation._id}`, payload, config);
            if (res) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            refetch(); // Refetch users after update
            document.getElementById('my_modal_1').close();
            form.reset();
        } catch (error) {
            navigate("/admin-login")
            console.error('Error updating user role:', error);
            alert('Failed to update user role');
        }
    };

    const handleUpdateClick = (item) => {
        setSelectedLocation(item);
        // setRole(user.role); // Set initial role value
        document.getElementById('my_modal_1').showModal();
    };

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }

    return (
        <div>

            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-4">Manage Location</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Feature</th>
                                <th className="px-4 py-2 border">Logo</th>
                                <th className="px-4 py-2 border">Created Date</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-xs text-center font-bold'>
                            {features?.map((item, index) => {
                                const { date } = formatDateTime(item?.createdAt);
                                return (
                                    <tr key={item._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border text-center">{index + 1}</td>
                                        <td className="px-4 py-2 border">{item.title}</td>
                                        <td className="px-4 py-2 border">
                                            <div className="avatar">
                                                <div className="w-12 rounded">
                                                    <img src={item.logo} className='w-12 ' />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 border">{date}</td>
                                        <td className="px-4 py-2 border text-center">
                                            <button
                                                onClick={() => handleUpdateClick(item)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for updating user role */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Updating Features</h3>
                    <p className="py-2">Updating Banner for: <strong>{selectedLocation?.title}</strong></p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">

                            <div className="">
                                <label htmlFor="name">Feature's Name</label>
                                <input
                                    type="text"
                                    defaultValue={selectedLocation?.title}
                                    name="title"
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md" />
                            </div>

                            <div className=" w-full">
                                <div className="relative">
                                    <p>Banner Picture</p>
                                    <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload location image" />
                                </div>

                                <div className="avatar">
                                    <div className="w-32 rounded">
                                        <p>Already uploaded:</p>
                                        <img className='w-12' src={selectedLocation?.logo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn btn-primary">Update</button>
                            <button
                                type="button"
                                className="btn"
                                onClick={() => document.getElementById('my_modal_1').close()}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>

        </div>
    );
};

export default ManageFeatures;