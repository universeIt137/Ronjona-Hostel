import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { uploadImg } from "../../../hooks/UploadImage";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";

const AddTeam = () => {
    const [loading, setLoading] = useState(false);

    const axiosPublic = useAxiosPublic();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const role = e.target.role.value;
        const des = e.target.des.value;
        const img = e.target.img.files[0];

        let imgUrl = "";

        if (img?.name) {
            imgUrl = await uploadImg(img);
        }

        const payload = {
            name,
            role,
            des,
            img: imgUrl,
        };

        let resp = await createAlert();

        try {
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.post(`/team`, payload);
                setLoading(false);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                }
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Data upload failed",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <Helmet>
                <title>Dashboard | Management Member Upload Page</title>
            </Helmet>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Add Management Member
                </h2>

                <div className="grid grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label htmlFor="img" className="block text-gray-600 font-semibold mb-2">
                            Image
                        </label>
                        <input
                            id="img"
                            type="file"
                            name="img"
                            className="w-full border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* Role Input */}
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-gray-600 font-semibold mb-2">
                            Role
                        </label>
                        <input
                            id="role"
                            type="text"
                            name="role"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Enter your role"
                            required
                        />
                    </div>

                    {/* des */}
                    <div className="mb-4">
                        <label
                            htmlFor="Description"
                            className="block text-gray-600 font-semibold mb-2"
                        >
                            Description
                        </label>
                        <textarea name="des" className="w-full p-3 border border-gray-300 rounded-lg"  id="" rows="10"></textarea>
                    </div>
                </div>

                
                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none ${loading ? "cursor-not-allowed opacity-70" : ""
                            }`}
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"
                                    ></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTeam;
