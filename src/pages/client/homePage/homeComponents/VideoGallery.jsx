import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const VideoGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

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

    const images = [
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452836/samples/coffee.jpg",
        "https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452838/cld-sample-2.jpg",
    ];

    return (
        <div className="px-4 md:px-0 container mx-auto my-20">
            <div className="mb-10">
                <p className="text-2xl md:text-4xl hover:underline font-bold text-main-color">Video Gallery</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                {images.map((imageSrc, index) => (
                    <div key={index}>
                        <img
                            className="h-24 md:h-48 rounded-xl w-full cursor-pointer"
                            src={imageSrc}
                            alt={`Gallery Item ${index + 1}`}
                            onClick={() => handleImageClick(imageSrc)}
                        />
                    </div>
                ))}
            </div>

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
                                    src={imageSrc}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`h-24 w-24 rounded-lg cursor-pointer ${
                                        currentImage === imageSrc ? "ring-4 ring-white" : ""
                                    }`}
                                    onClick={() => setCurrentImage(imageSrc)}
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
