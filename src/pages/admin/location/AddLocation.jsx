import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImg } from "../../../hooks/UploadImage";




const AddLocation = () => {
    const axiosPublic = useAxiosPublic();

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };




    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const location = form.location.value;
        const image = form.image.files[0];

        let img = '';
        if (image) {
            img = await uploadImg(image);  // Assume uploadImg is an async function returning the image URL
        }

        try {
            const payload = { location, img };
            console.log(payload);

            const res = await axiosPublic.post(`/createLocation`, payload, config);

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
                <title>Dashboard | Add Location</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Add Location</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid w-1/2 mx-auto border p-5 rounded-lg gap-4">
                    <div className="">
                        <label htmlFor="name">Location's Name</label>
                        <input type="text" name="location" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Location Picture</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload location image" />
                        </div>
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

export default AddLocation;
