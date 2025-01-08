import React, { useState } from 'react';
import formatDateTime from '../../../hooks/useDateTime';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../hooks/UploadImage';

const ManageBranch = () => {
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


    const { data: branches = [], refetch } = useQuery({
        queryKey: ['branches'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllBranches', config);
            return res.data.data;
        }
    })


    const { data: locations = [] } = useQuery({
        queryKey: ['locations'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllLocations', config);
            return res.data.data;
        }
    })

    console.log(branches)

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
                    const res = await axiosPublic.delete(`/deleteLocation/${id}`, config);
                    if (res.data.success) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Location has been deleted",
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
        const image = form.image.files[0];

        let img = '';
        if (image) {
            img = await uploadImg(image);  // Assume uploadImg is an async function returning the image URL
        } else {
            img = selectedLocation.img;
        }


        let updatedLocation = "";
        if (location) {
            updatedLocation = location;
        } else {
            updatedLocation = selectedLocation.location;
        }

        const payload = { location: updatedLocation, img };
        console.log(payload);
        try {
            const res = await axiosPublic.put(`/updateLocation/${selectedLocation._id}`, payload, config);
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
        } catch (error) {
            console.error('Error updating user role:', error);
            alert('Failed to update user role');
        }
    };

    const handleUpdateClick = (item) => {
        setSelectedLocation(item);
        // setRole(user.role); // Set initial role value
        document.getElementById('my_modal_1').showModal();
    };

    return (
        <div>

            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-4">Manage Branch</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Location</th>
                                <th className="px-4 py-2 border">Branch</th>
                                <th className="px-4 py-2 border">Created Date</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-xs text-center font-bold'>
                            {branches?.map((item, index) => {
                                const { date } = formatDateTime(item?.createdAt);
                                return (
                                    <tr key={item._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border text-center">{index + 1}</td>
                                        <td className="px-4 py-2 border">{item.location.location}</td>
                                        <td className="px-4 py-2 border">{item.branch}</td>

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
                    <h3 className="font-bold text-lg">Updating Branch</h3>
                    <p className="py-2">Updating role for: <strong>{selectedLocation?.location.location}</strong></p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">

                            <div className="">
                                <label htmlFor="name">Branch's Name</label>
                                <input type="text" name="branch" defaultValue={selectedLocation?.branch} className="w-full px-4 py-2 border rounded-md" />
                            </div>

                            <div className="">
                                <label htmlFor="name">Select location</label>
                                <select name="location" className="select select-bordered w-full">
                                    <option disabled selected>Select Location</option>
                                    {
                                        locations?.map(item =>
                                            <option value={item._id} key={item._id}>{item?.location}</option>
                                        )
                                    }

                                </select>
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

export default ManageBranch;