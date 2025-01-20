import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";

const UploadWhyChoose = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setIsLoading] = useState(false)

    const { data: chooseData = {}, refetch, isLoading} = useQuery({
        queryKey: ["chooseData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/why-choose");
            return res.data.data[0];
        },
    });

    const [formData, setFormData] = useState({
        img: "",
        backgroundImg: "",
        title: "",
        des: "",
    });
    const [imageUploading, setImageUploading] = useState(false);

    // Populate form data with default values when `chooseData` is fetched
    useEffect(() => {
        if (chooseData) {
            setFormData({
                img: chooseData.img || "",
                backgroundImg: chooseData.backgroundImg || "",
                title: chooseData.title || "",
                des: chooseData.des || "",
            });
        }
    }, [chooseData]);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle image upload
    const handleImageUpload = async (e, field) => {
        const file = e.target.files[0];
        if (!file) return;

        setImageUploading(true);

        const uploadFormData = new FormData();
        uploadFormData.append("file", file);
        uploadFormData.append("upload_preset", "ronjonaImg"); // Replace with your Cloudinary upload preset

        try {
            const response = await fetch(
                "https://api.cloudinary.com/v1_1/dxvacpgrv/image/upload", // Replace with your Cloudinary URL
                {
                    method: "POST",
                    body: uploadFormData,
                }
            );
            const data = await response.json();
            setFormData((prev) => ({ ...prev, [field]: data.secure_url }));
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setImageUploading(false);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        let resp = await createAlert()

        try {
            if (resp.isConfirmed) {
                setIsLoading(true);
                let res = await axiosPublic.put(`/why-choose`, formData);
                setIsLoading(false);
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
            setIsLoading(false);
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    {chooseData?._id ? "Update Why Choose Us" : "Upload Why Choose Us"}
                </h2>

                {/* Image Field */}
                <div>
                    <label htmlFor="img" className="block text-gray-600 font-semibold mb-2">
                        Image
                    </label>
                    <input
                        id="img"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "img")}
                        className="w-full border border-gray-300 rounded-lg"
                    />
                    {formData.img && (
                        <img
                            src={formData.img}
                            alt="Uploaded"
                            className="mt-2 w-28 h-28 rounded-full object-cover "
                        />
                    )}
                    {imageUploading && <p className="text-blue-500 text-sm">Uploading...</p>}
                </div>

                {/* Background Image Field */}
                <div>
                    <label
                        htmlFor="backgroundImg"
                        className="block text-gray-600 font-semibold mb-2"
                    >
                        Background Image
                    </label>
                    <input
                        id="backgroundImg"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "backgroundImg")}
                        className="w-full  border border-gray-300 rounded-lg"
                    />
                    {formData.backgroundImg && (
                        <img
                            src={formData.backgroundImg}
                            alt="Background Uploaded"
                            className="mt-2 w-28 h-28 rounded-full object-cover "
                        />
                    )}
                    {imageUploading && <p className="text-blue-500 text-sm">Uploading...</p>}
                </div>

                {/* Title Field */}
                <div>
                    <label htmlFor="title" className="block text-gray-600 font-semibold mb-2">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter title"
                    />
                </div>

                {/* Description Field */}
                <div>
                    <label htmlFor="des" className="block text-gray-600 font-semibold mb-2">
                        Description
                    </label>
                    <textarea
                        id="des"
                        name="des"
                        value={formData.des}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter description"
                        rows="10"
                    ></textarea>
                </div>

                {/* submit button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading} // Disable button when loading
                        className={`flex items-center justify-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg focus:outline-none hover:bg-blue-600 ${loading ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                    >
                        {loading ? (
                            <svg
                                className="w-5 h-5 mr-2 text-white animate-spin"
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
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadWhyChoose;
