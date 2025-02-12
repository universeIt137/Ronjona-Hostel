import { useQuery } from "@tanstack/react-query";
import React, { useState, useMemo } from "react";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import SkeletonLoader from "../../../../components/skeleton-loader/SkeletonLoader";
import { Helmet } from "react-helmet-async";

const VideoGallery = () => {
    const axiosPublic = useAxiosPublic();

    // Fetching videos
    const { data: videos = [], isLoading, isError } = useQuery({
        queryKey: ["videoGalleryData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/getAllVideo");
            return res.data?.data || [];
        },
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [showAllVideos, setShowAllVideos] = useState(false);

    // Memoized filtered videos
    const displayedVideos = useMemo(
        () => (showAllVideos ? videos : videos.slice(0, 12)),
        [showAllVideos, videos]
    );

    // Open modal with selected video
    const handleVideoClick = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    // Click outside modal to close
    const handleModalClick = (e) => {
        if (e.target.id === "modalBackground") {
            closeModal();
        }
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="">
                <SkeletonLoader />
            </div>
        );
    }

    return (
        <div className="px-4 md:px-0 w-11/12 mx-auto my-24">
            <Helmet>
                <title>Ronjona | Video Gallery Page</title>
            </Helmet>
            <div className="mb-10 text-center">
                <p className="text-2xl md:text-4xl hover:underline font-bold text-[#A020BA]">
                    Video Gallery
                </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {displayedVideos.map((video, index) => {
                    const validVideoUrl = video.video_link || video.youtube_link;
                    if (!validVideoUrl) return null;

                    return (
                        <div
                            key={index}
                            className="relative cursor-pointer group"
                        >
                            {/* Video Player */}
                            <ReactPlayer
                                url={validVideoUrl}
                                width="100%"
                                height="150px"
                                controls
                            />

                            {/* Transparent Overlay for Click */}
                            <div
                                className="absolute inset-0 bg-transparent hover:bg-black/30 transition-opacity"
                                onClick={() => handleVideoClick(validVideoUrl)}
                            />
                        </div>
                    );
                })}
            </div>

            {/* See More / See Less Button */}
            {videos.length > 12 && (
                <div className="mt-6 text-center">
                    <button
                        className={`px-6 py-2 rounded-lg text-white ${showAllVideos ? "bg-red-500" : "bg-blue-500"
                            }`}
                        onClick={() => setShowAllVideos(!showAllVideos)}
                    >
                        {showAllVideos ? "See Less" : "See More"}
                    </button>
                </div>
            )}

            {/* Video Modal */}
            {isModalOpen && (
                <div
                    id="modalBackground"
                    className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50"
                    onClick={handleModalClick}
                >
                    <div className="relative mb-4">
                        <ReactPlayer
                            url={currentVideo}
                            width="80vw"
                            height="60vh"
                            controls
                            playing
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
