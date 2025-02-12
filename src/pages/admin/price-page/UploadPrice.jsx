import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { createAlert } from "../../../helper/createAlert";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const UploadPrice = () => {
    const axiosPublic = useAxiosPublic();
    const [price, setPrice] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await createAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.post(`/price-upload`, price);
                setLoading(false);
                if (res) {
                    setPrice("");
                    toast.success("Price upload successfully");
                    return;
                }
            }
        } catch (error) {

            setLoading(false)
            toast.error("Price upload fail")

        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-40 ">
            <Helmet>
                <title>Dashboard | Price Upload </title>
            </Helmet>
            <h2 className="text-xl font-semibold mb-4">Enter Price</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {
                        loading ? "Loading..." : "Submit"
                    }
                </button>
            </form>
            <Toaster position="top-center"></Toaster>
        </div>
    );
};

export default UploadPrice;