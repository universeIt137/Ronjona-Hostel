import { useState } from "react";
import { createAlert } from "../../../helper/createAlert";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { updateAlert } from "../../../helper/updateAlert";

const PaymentTypeUpdate = () => {
    const axiosPublic = useAxiosPublic();
    
    const [loading, setLoading] = useState(false);


    const { id } = useParams();

    const { data: singlePaymentType = [], isLoading, refetch } = useQuery({
        queryKey: ["singlePaymentType"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payment-type/${id}`);
            return res.data.data;
        },
    });



    const handleSubmit = async(e) => {
        e.preventDefault();
        const paymentName = e.target.paymentName.value;
        const payload = {
            paymentName: paymentName
        };
        try {
            const resp = await updateAlert();
            if (resp.isConfirmed) {
                setLoading(true)
                let res = await axiosPublic.put(`/payment-type/${id}`, payload);
                setLoading(false)
                if (res) {
                    toast.success("Payment type update successfully");
                }
            }
        } catch (error) {
            setLoading(false);
            toast.error("Payment type update fail")
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Update Payment Type</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Payment Name</label>
                    <input
                        type="text"
                        name="paymentName"
                        placeholder="Enter payment name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue={singlePaymentType?.paymentName}
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

export default PaymentTypeUpdate;
