import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import formatDateTime from '../../../hooks/useDateTime';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedUser, setSelectedUser] = useState(null); // Track selected user
    const [role, setRole] = useState(''); // Track role update input

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllUsers', config);
            return res.data.result;
        }
    });

    const handleUpdateClick = (user) => {
        setSelectedUser(user);
        setRole(user.role); // Set initial role value
        document.getElementById('my_modal_1').showModal();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { userId: selectedUser._id, role };
        console.log(payload);
        try {
            const res = await axiosPublic.post(`/updateUserRole`, payload, config);
            if (res) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
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

    const onDelete = async (id) => {



        try {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                const res = await axiosPublic.delete(`/deleteUser/${id}`, config);
                if (res) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            });




        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user');
        }
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">Email</th>
                                <th className="px-4 py-2 border">Phone</th>
                                <th className="px-4 py-2 border">Joining Date</th>
                                <th className="px-4 py-2 border">Role</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-xs text-center font-bold'>
                            {users.map((user, index) => {
                                const { date } = formatDateTime(user?.createdAt);
                                return (
                                    <tr key={user._id} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border text-center">{index + 1}</td>
                                        <td className="px-4 py-2 border">{user.name}</td>
                                        <td className="px-4 py-2 border">{user.email}</td>
                                        <td className="px-4 py-2 border">{user.phone}</td>
                                        <td className="px-4 py-2 border">{date}</td>
                                        <td className="px-4 py-2 border text-center capitalize">{user.role}</td>
                                        <td className="px-4 py-2 border text-center">
                                            <button
                                                onClick={() => handleUpdateClick(user)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => onDelete(user._id)}
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
                    <h3 className="font-bold text-lg">Update User Role</h3>
                    <p className="py-2">Updating role for: <strong>{selectedUser?.name}</strong></p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label htmlFor="role" className="label">
                                <span className="label-text">User Role</span>
                            </label>
                            <select
                                id="role"
                                className="select select-bordered w-full"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
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

export default ManageUser;
