import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UploadKeyFeatures = () => {
    const axiosPublic = useAxiosPublic();

    const [loading,setLoading] = useState(false)

    const { data: keyFeatureData = [], refetch } = useQuery({
        queryKey: ["keyFeatureData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/key-features");
            return res.data.data[0];
        },
    });

    const [formData, setFormData] = useState({
        images: [{ img: "" }],
        features: [{ title: "" }],
        facilities: [{ title: "" }],
    });

    // Populate formData with default values from keyFeatureData
    useEffect(() => {
        if (keyFeatureData) {
            setFormData({
                images: keyFeatureData.images || [{ img: "" }],
                features: keyFeatureData.features || [{ title: "" }],
                facilities: keyFeatureData.facilities || [{ title: "" }],
            });
        }
    }, [keyFeatureData]);

    // Add new field dynamically
    const handleAddField = (section) => {
        setFormData((prev) => ({
            ...prev,
            [section]: [...prev[section], section === "images" ? { img: "" } : { title: "" }],
        }));
    };

    // Remove field dynamically
    const handleRemoveField = (section, index) => {
        setFormData((prev) => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index),
        }));
    };

    // Handle input change
    const handleChange = (section, index, value) => {
        const updatedSection = formData[section].map((item, i) =>
            i === index ? { ...item, [section === "images" ? "img" : "title"]: value } : item
        );
        setFormData({ ...formData, [section]: updatedSection });
    };

    // Handle image upload to Cloudinary
    const handleImageUpload = async (file, index) => {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("upload_preset", "ronjona"); // Replace with your Cloudinary preset

        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dlb4cik9q/image/upload", // Replace with your Cloudinary API endpoint
                uploadData
            );
            handleChange("images", index, res.data.secure_url); // Update the image URL in the form data
        } catch (err) {
            console.error("Image upload failed:", err);
        }
    };

    // Handle form submission
    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        let resp = await createAlert()
        try {
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.put(`/key-features`, formData)
                setLoading(false)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data upload successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data upload fail",
                showConfirmButton: false,
                timer: 1500
              });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg space-y-6">
            <h1 className="text-2xl font-bold text-center">Upload Form</h1>
            <Helmet>
                <title>Dashboard | Faq Upload Page </title>
            </Helmet>

            {/* Images Section */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Images</h2>
                {formData.images.map((image, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4">
                        <input
                            type="file"
                            onChange={(e) => handleImageUpload(e.target.files[0], index)}
                            className="block w-1/2 text-sm text-gray-500 border border-gray-300 rounded"
                        />
                        {image.img && (
                            <img
                                src={image.img}
                                alt="Uploaded"
                                className="w-16 h-16 object-cover rounded-full border border-gray-300"
                            />
                        )}
                        {formData.images.length > 1 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveField("images", index)}
                                className="bg-[#1C64F2] py-2 rounded-2xl shadow-2xl text-white px-4 "
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddField("images")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Image
                </button>
            </div>

            {/* Features Section */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                {formData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4">
                        <input
                            type="text"
                            value={feature.title}
                            onChange={(e) => handleChange("features", index, e.target.value)}
                            placeholder="Feature Title"
                            className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
                        />
                        {formData.features.length > 1 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveField("features", index)}
                                className="bg-[#1C64F2] py-2 rounded-2xl shadow-2xl text-white px-4"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddField("features")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Feature
                </button>
            </div>

            {/* Facilities Section */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Facilities</h2>
                {formData.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4">
                        <input
                            type="text"
                            value={facility.title}
                            onChange={(e) => handleChange("facilities", index, e.target.value)}
                            placeholder="Facility Title"
                            className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
                        />
                        {formData.facilities.length > 1 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveField("facilities", index)}
                                className="bg-[#1C64F2] py-2 rounded-2xl shadow-2xl text-white px-4"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddField("facilities")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Facility
                </button>
            </div>

            <button type="submit" className="bg-[#1C64F2] py-2 rounded-2xl shadow-2xl text-white px-4">
                {
                    loading ? "Submiting..." : "Submit"
                }
            </button>
        </form>
    );
};

export default UploadKeyFeatures;
