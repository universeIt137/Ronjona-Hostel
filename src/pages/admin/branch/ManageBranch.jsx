import React, { useState } from 'react';
import formatDateTime from '../../../hooks/useDateTime';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { uploadImg } from '../../../hooks/UploadImage';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { deleteAlert } from '../../../helper/deleteAlert';

const ManageBranch = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedBranch, setSelectedBranch] = useState(null); // Track selected user




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
    });
    const navigate = useNavigate();


    const handleDelete = async (id) => {

        try {
            const resp = await deleteAlert();

            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/deleteBranch/${id}`);
                if (res) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Branch delete successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()

                }
            }
        } catch (error) {
            navigate("/admin-login")
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Branch delete fail",
                showConfirmButton: false,
                timer: 1500
            });
        }


    }


    const handleUpdateClick = (item) => {
        setSelectedBranch(item);
        document.getElementById('my_modal_1').showModal();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const branch = form.branch.value;


        const payload = { location, branch };
        // console.log(payload);
        try {
            const res = await axiosPublic.put(`/updateBranch/${selectedBranch._id}`, payload, config);
            if (res) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your branch has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }
            setSelectedBranch("");

            refetch(); // Refetch users after update
            document.getElementById('my_modal_1').close();
        } catch (error) {
            navigate("/admin-login")
            console.error('Error updating user role:', error);
            document.getElementById('my_modal_1').close();
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to update Branch",
                showConfirmButton: false,
                timer: 1500
            });

        }
    };



    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Branch</title>
            </Helmet>
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
                                        <td className="px-4 py-2 border">{item?.location?.location}</td>
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
                    {
                        console.log(selectedBranch)
                    }
                    <p className="py-2">Updating branch for: <strong>{selectedBranch?.location?.location}</strong></p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">

                            <div className="">
                                <label htmlFor="name">Branch's Name</label>
                                <input type="text" name="branch" defaultValue={selectedBranch?.branch} className="w-full px-4 py-2 border rounded-md" />
                            </div>

                            <div className="">
                                <label htmlFor="name">Select location</label>
                                <select name="location" className="select select-bordered w-full">
                                    <option disabled selected>Select Location</option>
                                    <option value={selectedBranch?.location?._id} selected>{selectedBranch?.location?.location}</option>
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