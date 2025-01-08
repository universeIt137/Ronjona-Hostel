import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImg } from "../../../hooks/UploadImage";




const AddBranch = () => {
    const axiosPublic = useAxiosPublic();

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };




    const [loading, setLoading] = useState(false);

    const { data: locations = [] } = useQuery({
        queryKey: ['locations'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllLocations', config);
            return res.data.data;
        }
    })


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const location = form.location.value;
        const branch = form.branch.value;

        try {
            const payload = { location, branch };
            console.log(payload);

            const res = await axiosPublic.post(`/createBranch`, payload, config);

            if (res.data.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Location has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset(); // Clear the form after successful submission
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
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Add Branch</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Add Branch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid w-1/2 mx-auto border p-5 rounded-lg gap-4">
                    <div className="">
                        <label htmlFor="name">Branch's Name</label>
                        <input type="text" name="branch" className="w-full px-4 py-2 border rounded-md" />
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

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>


        </div>
    );
};

export default AddBranch;
