import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UploadHotline = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    

    const token = localStorage.getItem("token");

    const config = token
        ? { headers: { Authorization: `${token}` } }
        : {}; // Handle missing token gracefully

    const [formData, setFormData] = useState({
        hotlineNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        try {
            let resp = await createAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                const res = await axiosPublic.post(`/upload`, formData, config);
                setLoading(false);

                if (res.status === 200) {
                    toast.success("Upload successful");
                    setFormData({ branchName: "", hotlineNumber: "" }); // Reset form
                    return;
                }
            }
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 my-32 rounded-lg shadow-lg">
            <Helmet>
                <title>Dashboard | Upload Hotline</title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-center mb-4">Hotline upload from</h2>

            
                <form onSubmit={handleSubmit} className="space-y-4">
                    

                    {/* Hotline Number Input */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Hotline Number
                        </label>
                        <input
                            type="tel"
                            name="hotlineNumber"
                            value={formData.hotlineNumber}
                            onChange={handleChange}
                            placeholder="Enter hotline number"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#853493]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#853493] text-white py-2 rounded-lg hover:bg-[#6d2a77] transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            <Toaster position="top-center" />
        </div>
    );
};

export default UploadHotline;
