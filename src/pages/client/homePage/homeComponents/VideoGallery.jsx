import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import ReactPlayer from 'react-player';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';

const VideoGallery = () => {
    const axiosPublic = useAxiosPublic();
    const { data: videos = [],isLoading,isError,refetch } = useQuery({
        queryKey: ["vidoeGalleryData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllVideo`);
            console.log(res)
            return res.data?.data || [];
        }
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [showAllVideos, setShowAllVideos] = useState(false);

    const handleVideoClick = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    const handleModalClick = (e) => {
        if (e.target.id === "modalBackground") {
            closeModal();
        }
    };

    // Show all videos if "See More" is clicked, otherwise show up to 12 videos
    const displayedVideos = showAllVideos ? videos : videos.slice(0, 12);

    if (isLoading) {
        return (
            <div >
                <div>
                    <SkeletonLoader></SkeletonLoader>
                </div>
            </div>
        )
    }

    return (
        <div className="px-4 md:px-0 w-11/12 mx-auto my-20">
            <div className="mb-10">
                <p className="text-2xl md:text-4xl hover:underline font-bold ">Video Gallery</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {displayedVideos.map((video, index) => (
                    <div key={index} className="cursor-pointer">
                        <ReactPlayer
                            url={video.video_link ? video.video_link : video?.video_link} // Assuming each video object has a `url` property
                            width="100%"
                            height="150px"
                            controls
                            onClick={() => handleVideoClick(video.video_link ? video.video_link : video?.video_link)}
                        />
                    </div>
                ))}
            </div>

            {/* See More / See Less Button */}
            {videos.length > 12 && (
                <div className="mt-6 text-center">
                    {!showAllVideos ? (
                        <button
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
                            onClick={() => setShowAllVideos(true)}
                        >
                            See More
                        </button>
                    ) : (
                        <button
                            className="px-6 py-2 bg-red-500 text-white rounded-lg"
                            onClick={() => setShowAllVideos(false)}
                        >
                            See Less
                        </button>
                    )}
                </div>
            )}

            {/* Modal */}
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
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Horizontal Scrollable Thumbnail List */}
                    <Marquee pauseOnHover gradient={false} speed={100} className="w-full bg-black bg-opacity-50 py-4">
                        <div className="flex space-x-4 px-3">
                            {videos.map((video, index) => (
                                <ReactPlayer
                                    key={index}
                                    url={video.video_link ? video.video_link : video?.video_link}
                                    width="100px"
                                    height="60px"
                                    className={`rounded-lg cursor-pointer ${currentVideo === video.video_link ? video.video_link : video?.video_link ? "ring-4 ring-white" : ""
                                        }`}
                                    onClick={() => setCurrentVideo(video.video_link ? video.video_link : video?.video_link)}
                                />
                            ))}
                        </div>
                    </Marquee>
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
