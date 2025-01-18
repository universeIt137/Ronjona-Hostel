import React, { useState } from "react";
import { uploadImg } from "../../../hooks/UploadImage";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { createAlert } from "../../../helper/createAlert";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { updateAlert } from "../../../helper/updateAlert";

const PhotoUpdate = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();

    const { data: singleOfferData = {}, refetch } = useQuery({
        queryKey: ["singleOfferData", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getPhotoById/${id}`);
            return res.data.data;
        },
    });

    const { img: upcommingImg } = singleOfferData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const img = e.target.img.files[0];

        let imgUrl = upcommingImg;
        

        if (img) {
            imgUrl = await uploadImg(img); // Upload the new image
        }


        const payload = { img: imgUrl };

        console.log(payload)

        const resp = await updateAlert();

        try {
            if (resp.isConfirmed) {
                setLoading(true);
                const res = await axiosPublic.put(`/updatePhoto/${id}`, payload);
                setLoading(false);

                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Image updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                    refetch();
                }
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Image update failed",
                showConfirmButton: false,
                timer: 1500,
            });
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center my-32">
            <Helmet>
                <title>Dashboard | Photo Update Page</title>
            </Helmet>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-semibold text-center mb-6">Image Upload Form</h2>

                {/* Avatar */}
                <div className="avatar mb-4 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border">
                        <img
                            src={upcommingImg || "https://via.placeholder.com/150"}
                            alt="Current"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="image"
                    >
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="img"
                        accept="image/*"
                        className="block w-full text-sm text-gray-600 border-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-400"
                        }`}
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default PhotoUpdate;
