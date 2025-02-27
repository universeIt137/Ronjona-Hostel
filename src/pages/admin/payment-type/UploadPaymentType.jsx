import { useState } from "react";
import { createAlert } from "../../../helper/createAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UploadPaymentType = () => {
    const axiosPublic = useAxiosPublic();
    const [paymentName, setPaymentName] = useState("");
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted Payment Name:", paymentName);
        const payload = {
            paymentName: paymentName
        };
        console.log(payload)
        try {
            const resp = await createAlert();
            if (resp.isConfirmed) {
                setLoading(true)
                let res = await axiosPublic.post("/payment-type", payload);
                setLoading(false)
                if (res) {
                    toast.success("Payment type upload successfully");
                    setPaymentName("")
                }
            }
        } catch (error) {
            setLoading(false);
            toast.error("Payment upload fail")
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Add Payment Type</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Payment Name</label>
                    <input
                        type="text"
                        value={paymentName}
                        onChange={(e) => setPaymentName(e.target.value)}
                        placeholder="Enter payment name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    {
                        loading ? "Submiting..." : "Submit"
                    }
                </button>
            </form>
            <Toaster position="top-center"></Toaster>
        </div>
    );
};

export default UploadPaymentType;
