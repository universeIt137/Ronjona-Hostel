import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

// Set up Cloudinary credentials
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/your-cloud-name/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "your-upload-preset";

const UploadKeyFeatures = () => {
    const [images, setImages] = useState([null]); // Initially one image input field
    const [uploadedImages, setUploadedImages] = useState([]); // Store uploaded image URLs
    const [features, setFeatures] = useState(""); // To store features text
    const [facility, setFacility] = useState(""); // To store facility text
    const [loading, setLoading] = useState(false); // To track form submission status

    // Function to upload image to Cloudinary
    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        try {
            const response = await axios.post(CLOUDINARY_URL, formData);
            return response.data.secure_url; // Return the image URL
        } catch (error) {
            console.error("Error uploading image:", error);
            return null;
        }
    };

    // Handle file input change (add images)
    const handleImageChange = (e, index) => {
        const newImages = [...images];
        newImages[index] = e.target.files[0];
        setImages(newImages);
    };

    // Add new image input field
    const addImageField = () => {
        setImages([...images, null]); // Add a new null entry to the images array
    };

    // Remove image input field
    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    // Function to remove uploaded images
    const removeUploadedImage = (index) => {
        const updatedUploadedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedUploadedImages);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Upload the images to Cloudinary
        const uploadedImageUrls = [];
        for (let i = 0; i < images.length; i++) {
            if (images[i]) {
                const uploadedImageUrl = await uploadImageToCloudinary(images[i]);
                if (uploadedImageUrl) {
                    uploadedImageUrls.push(uploadedImageUrl);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Image upload failed. Please try again.",
                    });
                    setLoading(false);
                    return;
                }
            }
        }

        setUploadedImages(uploadedImageUrls);

        // Prepare the data to send to the backend
        const formData = {
            images: uploadedImageUrls.map((url) => ({ img: url })), // Wrap URLs in an object for the API
            features,
            facility,
        };

        // Replace with your API URL for handling the form submission
        const API_URL = "https://your-backend-api.com/updatePackage";

        try {
            const response = await axios.post(API_URL, formData);
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Package updated successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setFeatures("");
                setFacility("");
                setImages([null]); // Reset to one image input field after submission
                setUploadedImages([]); // Clear uploaded images state
            }
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Error submitting the form.",
                showConfirmButton: false,
                timer: 1500,
            });
        }

        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Update Package</h2>

            <form onSubmit={handleSubmit}>
                {/* Multiple Image Upload */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Upload Images</label>
                    {images.map((image, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="file"
                                onChange={(e) => handleImageChange(e, index)}
                                className="w-full mt-2 border border-gray-300 p-2 rounded-md"
                            />
                            {image && (
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addImageField}
                        className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                    >
                        Add Image
                    </button>
                </div>

                {/* Display uploaded image URLs */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Uploaded Images</label>
                    {uploadedImages.length > 0 && (
                        <div className="flex flex-wrap gap-4 mt-2">
                            {uploadedImages.map((img, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={img}
                                        alt={`preview-${index}`}
                                        className="h-32 w-32 object-cover rounded-md"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeUploadedImage(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Features */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Features</label>
                    <textarea
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        className="w-full mt-2 border border-gray-300 p-2 rounded-md"
                        placeholder="Enter features"
                        rows="4"
                    ></textarea>
                </div>

                {/* Facility */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Facility</label>
                    <textarea
                        value={facility}
                        onChange={(e) => setFacility(e.target.value)}
                        className="w-full mt-2 border border-gray-300 p-2 rounded-md"
                        placeholder="Enter facility"
                        rows="4"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className={`px-6 py-2 mt-4 bg-blue-500 text-white rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update Package"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadKeyFeatures;
