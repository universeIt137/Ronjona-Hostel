import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import ReactPlayer from "react-player";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { deleteAlert } from "../../../helper/deleteAlert";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManageVideoGallery = () => {
    const axiosPublic = useAxiosPublic();

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token,
        },
    };

    // Fetch videos using React Query
    const { data: videos = [], isLoading, refetch } = useQuery({
        queryKey: ["videoGalleryData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllVideo`);
            return res.data?.data || [];
        },
    });

    // State for modal and current video
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const navigate = useNavigate();

    // Handle updating a video
    const handleUpdate = (id) => {
        navigate(`/dashboard/video-update/${id}`)
    };

    // Handle deleting a video
    const handleDelete = async (id) => {
        let resp = await deleteAlert();
        try {
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/deleteVideo/${id}`, config);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Video delete successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Video delete fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    // Open modal and set the current video link
    const openModal = (videoLink) => {
        console.log("Video Link:", videoLink); // Debugging
        setCurrentVideo(videoLink);
        setIsModalOpen(true);
    };

    // Close modal and reset video state
    const closeModal = () => {
        setCurrentVideo(null);
        setIsModalOpen(false);
    };

    // Display a loader while fetching data
    if (isLoading) {
        return (
            <div className="">
                <SkeletonLoader />
            </div>
        );
    }



    return (
        <div className="w-11/12 mx-auto my-20">
            <h2 className="text-2xl font-bold mb-4">Video Gallery Table</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Video</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">YouTube Link</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Upload Time</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos.map((video, index) => (
                            <tr key={video.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <video
                                        src={video.video_link || video?.youtube_link}
                                        controls
                                        className="w-32 h-20 rounded-lg cursor-pointer"
                                        onClick={() => openModal(video.video_link || video?.youtube_link)}
                                    ></video>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <a
                                        href={video.youtube_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline"
                                    >
                                        YouTube Link
                                    </a>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(video.createdAt).toLocaleString()}
                                </td>
                                <td className="px-4 py-2 my-6 flex space-x-3">
                                    <button
                                        onClick={() => handleUpdate(video?._id)}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <FiEdit size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(video._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FiTrash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white p-4 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-black text-2xl font-bold"
                        >
                            &times;
                        </button>
                        <ReactPlayer
                            url={currentVideo}
                            width="100%"
                            height="400px"
                            controls
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageVideoGallery;
