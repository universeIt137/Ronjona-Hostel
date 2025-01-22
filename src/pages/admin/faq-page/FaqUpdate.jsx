import Swal from "sweetalert2";
import { updateAlert } from "../../../helper/updateAlert";
import { uploadImg } from "../../../hooks/UploadImage";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";

const FaqUpdate = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0);
    const { id } = useParams();

    const { data: singleFaqData = [], refetch, isLoading } = useQuery({
        queryKey: ['singleFaqData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/faq/${id}`);
            return res.data.data;
        }
    });

    const { logo: upcommingUrl } = singleFaqData;

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const logo = e.target.logo.files[0]; // The uploaded image
        const questions = e.target.questions.value;
        const answer = e.target.answer.value;

        // If no new logo is uploaded, keep the existing logo URL
        let imgUrl = upcommingUrl;

        // Upload the image if there's a new logo
        if (logo) {
            imgUrl = await uploadImg(logo);
        }

        const payload = {
            questions,
            answer,
            logo: imgUrl
        };

        console.log(payload);

        const resp = await updateAlert();
        try {
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.put(`/faq/${id}`, payload);
                setLoading(false);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                    e.target.reset(); // Reset form after submission
                }
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Data update failed",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    refetch()

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader />
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
                <h1 className="text-3xl font-bold text-center mb-6">FAQ Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="avatar mb-4">
                        <div className="w-12 border-2 border-red-200">
                            <img className="rounded-full" src={singleFaqData?.logo} alt="Current Logo" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="logo" className="block text-lg font-semibold mb-2">
                            Logo URL
                        </label>
                        <input
                            type="file"
                            id="logo"
                            name="logo"
                            className="w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="questions" className="block text-lg font-semibold mb-2">
                            Question
                        </label>
                        <input
                            type="text"
                            id="questions"
                            name="questions"
                            defaultValue={singleFaqData?.questions}
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="answer" className="block text-lg font-semibold mb-2">
                            Answer
                        </label>
                        <textarea
                            id="answer"
                            name="answer"
                            defaultValue={singleFaqData?.answer}
                            rows="8"
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#3F83F8] text-white py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    >
                        {loading ? "Submitting...." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FaqUpdate;
