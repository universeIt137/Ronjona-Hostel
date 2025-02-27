import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Editor } from "@tinymce/tinymce-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { Helmet } from "react-helmet-async";

const PackagesUpdate = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams(); // Get the package ID from the URL
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        video: "",
        img: [""],
        desc: "",
        features: [{ featureTitle: "", featureImg: "" }],
        branch: "",
        location: "",
        seatAvalible: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    console.log(formData)

    const { data: branchNames = [] } = useQuery({
        queryKey: ["branchNames"],
        queryFn: async () => {
            const res = await axiosPublic.get("/getAllBranches");
            return res.data?.data || [];
        },
    });
    const { data: location = [] } = useQuery({
        queryKey: ["location"],
        queryFn: async () => {
            const res = await axiosPublic.get("/getAllLocations");
            return res.data?.data || [];
        },
    });
    const { data: priceData = [] } = useQuery({
        queryKey: ['priceData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-price');
            return res.data.data;
        }
    });

    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dxvacpgrv/image/upload";
    const UPLOAD_PRESET = "ronjonaImg";

    // Fetch package data
    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const response = await axios.get(
                    `https://ronjona-hostel-server.vercel.app/api/v1/getPackageById/${id}`
                );
                setFormData(response?.data?.data || {});
            } catch (error) {
                console.error("Error fetching package data:", error);
                Swal.fire("Error", "Failed to load package data.", "error");
            }
        };
        fetchPackageData();
    }, [id]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle array changes
    const handleArrayChange = (e, index, arrayName, fieldName) => {
        const newValue = e.target.value;
        setFormData((prev) => {
            const updatedArray = [...prev[arrayName]];
            updatedArray[index][fieldName] = newValue;
            return { ...prev, [arrayName]: updatedArray };
        });
    };

    // Add new array item
    const handleAddItem = (arrayName, newItem) => {
        setFormData((prev) => ({
            ...prev,
            [arrayName]: [...prev[arrayName], newItem],
        }));
    };

    // Remove array item
    const handleRemoveItem = (arrayName, index) => {
        setFormData((prev) => ({
            ...prev,
            [arrayName]: prev[arrayName].filter((_, i) => i !== index),
        }));
    };

    const handleAddImage = () => {
        setFormData({ ...formData, img: [...formData.img, ""] });
    };

    // Handle image upload
    const handleUpload = async (e, arrayName, index, fieldName) => {
        const file = e.target.files[0];
        const imageData = new FormData();
        imageData.append("file", file);
        imageData.append("upload_preset", UPLOAD_PRESET);

        try {
            const response = await axios.post(CLOUDINARY_URL, imageData);
            const imageUrl = response.data.secure_url;
            console.log(`upcomming img url is ${imageUrl}`)
            const uploadImgUrl = imageUrl.toString();  // Ensure it's a string

            setFormData((prev) => {
                // Check if arrayName exists and is an array, otherwise initialize as an empty array
                const updatedArray = Array.isArray(prev[arrayName]) ? [...prev[arrayName]] : [];
                updatedArray[index] = updatedArray[index] || []; // Ensure the index exists
                updatedArray[index][fieldName] = uploadImgUrl;

                return { ...prev, [arrayName]: updatedArray };
            });
        } catch (error) {
            console.error("Image upload failed:", error);
            Swal.fire("Error", "Image upload failed. Please try again.", "error");
        }
    };

    // Handle description changes (TinyMCE Editor)
    const handleDescriptionChange = (value) => {
        setFormData((prev) => ({ ...prev, desc: value }));
    };

    const handleImageUpload = async (e) => {
        const files = e.target.files;
        const uploadedImages = [];

        for (let file of files) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", UPLOAD_PRESET);

            try {
                const response = await axios.post(CLOUDINARY_URL, formData);
                uploadedImages.push(response.data.secure_url);
            } catch (error) {
                console.error("Image upload failed:", error);
                Swal.fire("Error", "Image upload failed. Please try again.", "error");
                return;
            }
        }

        setFormData((prev) => ({
            ...prev,
            img: [...prev.img, ...uploadedImages],
        }));
    };

    // Remove an image from the `img` array
    const handleRemoveImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            img: prev.img.filter((_, i) => i !== index),
        }));
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await axios.put(
                `https://ronjona-hostel-server.vercel.app/api/v1/updatePackage/${id}`,
                formData
            );
            Swal.fire("Success", "Package updated successfully!", "success");
        } catch (error) {
            console.error("Error updating package:", error);
            Swal.fire("Error", "Failed to update the package. Please try again.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (formData.length === 0) {
        return (
            <div> <SkeletonLoader></SkeletonLoader> </div>
        )
    }

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <Helmet>
                <title>Dashboard | Packages Update Page</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4">Update Package</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block font-bold mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Price</label>
                    <select
                        name="price"
                        value={formData.price || ""}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="" disabled>Select Price</option>
                        {priceData.map((branch) => (
                            <option key={branch._id} value={branch.price}>
                                {branch.price}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Seat Availability Dropdown */}
                <div>
                    <label className="block text-gray-700 font-medium">Seat Availability</label>
                    <select
                        name="seatAvailable"
                        value={formData.seatAvalible}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">Branch</label>
                    <select
                        name="branch"
                        value={formData.branch || ""}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="" disabled>Select a branch</option>
                        {branchNames.map((branch) => (
                            <option key={branch._id} value={branch._id}>
                                {branch.branch}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Location</label>
                    <select
                        name="location"
                        value={formData.location || ""}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="" disabled>Select a location</option>
                        {location.map((branch) => (
                            <option key={branch._id} value={branch._id}>
                                {branch.location}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Package Description</label>
                    <Editor
                        apiKey="atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm"
                        init={{
                            height: 400,
                            menubar: false,
                            plugins: ["link", "lists", "media"],
                            toolbar:
                                "undo redo | formatselect | bold italic underline | bullist numlist | link media",
                        }}
                        value={formData.desc}
                        onEditorChange={handleDescriptionChange}
                    />
                </div>
                {/* Render Features */}
                <h3 className="text-lg font-bold mt-6 mb-2">Features</h3>
                {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Feature Title"
                            value={feature.featureTitle}
                            onChange={(e) => handleArrayChange(e, index, "features", "featureTitle")}
                            className="flex-1  border rounded-lg"
                        />
                        <input
                            type="file"
                            onChange={(e) => handleUpload(e, "features", index, "featureImg")}
                            className="flex-1 border-2 "
                        />
                        {feature.featureImg && (
                            <img
                                src={feature.featureImg}
                                alt="Feature"
                                className="w-16 h-16 rounded"
                            />
                        )}
                        <button
                            type="button"
                            onClick={() => handleRemoveItem("features", index)}
                            className=" text-blue-500 font-bold rounded"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddItem("features", { featureTitle: "", featureImg: "" })}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Add Feature
                </button>

                <div className="my-8">
                    {formData?.img.map((images, index) => (
                        <div key={index} className="flex gap-4 mb-4">
                            <input
                                type="file"
                                onChange={(e) => handleUpload(e, "img", index, "images")}
                                className="flex-1 border-2"
                            />
                            {images && (
                                <img
                                    src={images}
                                    alt="Feature"
                                    className="w-16 h-16 rounded"
                                />
                            )}
                            <button
                                type="button"
                                onClick={() => handleRemoveItem("img", index)}
                                className="text-blue-500 font-bold rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* <button
                        type="button"
                        onClick={handleAddImage}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add More Images
                    </button> */}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg"
                >
                    {isSubmitting ? "Submitting..." : "Update Package"}
                </button>
            </form>
        </div>
    );
};

export default PackagesUpdate;


