import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const PhotoGallery = () => {
    const axiosPublic = useAxiosPublic();

    // const { data: locationData = [], refetch, isError, isLoading } = useQuery({
    //     queryKey: ['locationData'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/getAllLocations');
    //         return res.data?.data;
    //     }
    // });

    const { data: images = [],isLoading,isError,refetch } = useQuery({
        queryKey: ["photoGalleryData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllPhoto`);
            return res.data?.data
        }
    })

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [showAllImages, setShowAllImages] = useState(false);

    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };

    const handleModalClick = (e) => {
        if (e.target.id === "modalBackground") {
            closeModal();
        }
    };

    // const images = [
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-3.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-3.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-3.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-3.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-3.jpg",
    //     "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    // ];

    // Show only 10 images initially
    const visibleImages = showAllImages ? images : images.slice(0, 12);

    if (isLoading) {
        return (
            <div className='flex flex-col justify-center items-center h-screen' >
                <h1>Loading Data</h1>
            </div>
        )
    }

    return (
        <div className="px-4 md:px-0 w-11/12 mx-auto lg:my-7 ">
            <div className="mb-10">
                <p className="text-2xl md:text-4xl hover:underline font-bold text-black">Photo Gallery</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                {visibleImages.map((imageSrc, index) => (
                    <div key={index}>
                        <img
                            className="h-24 md:h-48 rounded-xl w-full cursor-pointer"
                            src={imageSrc?.img}
                            alt={`Gallery Item ${index + 1}`}
                            onClick={() => handleImageClick(imageSrc?.img)}
                        />
                    </div>
                ))}
            </div>

            {/* Show button only if images length > 12 */}
            {images.length > 12 && (
                <div className="mt-6 text-center">
                    <button
                        onClick={() => setShowAllImages(!showAllImages)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        {showAllImages ? "See Less" : "See More"}
                    </button>
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
                        <img
                            src={currentImage}
                            alt="Enlarged View"
                            className="rounded-lg max-w-full max-h-[70vh]"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Horizontal Scrollable Thumbnail List */}
                    <Marquee pauseOnHover gradient={false} speed={100} className="w-full overflow-hidedn bg-black bg-opacity-50 py-4">
                        <div className="flex space-x-4 px-3">
                            {images.map((imageSrc, index) => (
                                <img
                                    key={index}
                                    src={imageSrc?.img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`h-24 w-24 rounded-lg cursor-pointer ${currentImage === imageSrc ? "ring-4 ring-white" : ""
                                        }`}
                                    onClick={() => setCurrentImage(imageSrc?.img)}
                                />
                            ))}
                        </div>
                    </Marquee>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
