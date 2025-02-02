import React, { useState, useEffect } from "react";
import axios from "axios";
import { createAlert } from "../../../helper/createAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { uploadImg } from "../../../hooks/UploadImage";

const UploadAboutData = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        shortDes: "",
        img: "",
    });

    // 🔹 Fetch Default Data from Backend on Component Mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://ronjona-hostel-server.vercel.app/api/v1/aboutDataById");
                if (response.data?.data?.length) {
                    setFormData(response.data.data[0]); // Set default values
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // 🔹 Handle Input Change
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 🔹 Handle Image Upload
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const uploadedImageUrl = await uploadImg(file); // Upload image via `uploadImg`
        setFormData((prevState) => ({
            ...prevState,
            img: uploadedImageUrl, // ✅ Save uploaded image URL
        }));
    };

    // 🔹 Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        let resp = await createAlert();

        try {
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.put(`/about-data`, formData);
                setLoading(false);

                if (res.data.success) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    console.error("Error: Response data not successful", res.data);
                }
            }
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error);
            alert("Failed to submit data.");
        }
    };

    return (
        <div className="p-6 min-h-screen">
            <Helmet>
                <title>Dashboard | About Data Upload Page</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4">About Section</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* 🔹 Short Description */}
                <div className="mb-4">
                    <label htmlFor="shortDes" className="block font-bold mb-2">
                        Short Description
                    </label>
                    <textarea
                        id="shortDes"
                        name="shortDes"
                        value={formData.shortDes || ""}
                        onChange={handleInputChange}
                        rows={9}
                        placeholder="Write a short description"
                        className="w-full p-2 border rounded-lg"
                    ></textarea>
                </div>

                {/* 🔹 Show Uploaded Image */}
                {formData.img && (
                    <div className="mb-4">
                        <img src={formData.img} alt="Uploaded" className="w-24 h-24 object-cover rounded-lg mb-2" />
                    </div>
                )}

                {/* 🔹 Image Upload */}
                <div className="mb-4">
                    <label htmlFor="img" className="block font-bold mb-2">
                        Upload Image
                    </label>
                    <input id="img" type="file" onChange={handleUpload} className="w-full border rounded-lg" />
                </div>

                {/* 🔹 Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`flex items-center justify-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg focus:outline-none hover:bg-blue-600 ${loading ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? (
                            <svg
                                className="w-5 h-5 mr-2 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadAboutData;
