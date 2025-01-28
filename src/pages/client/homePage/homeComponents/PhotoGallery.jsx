import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';

const PhotoGallery = () => {
    window.scrollTo(0,0)
    const axiosPublic = useAxiosPublic();

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { data: imgList = [], refetch, isLoading } = useQuery({
        queryKey: ['imgList'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPhoto');
            return res.data?.data; // Ensure the response is an array
        },
    });

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imgList.length) % imgList.length);
    };

    // Close modal on outside click
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    // Close modal with Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrevious();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <div className="w-11/12 mx-auto lg:mt-28  ">
                <Helmet>
                    <title>Ronjona | Img Gallery Page</title>
                </Helmet>
                <h1 className='text-center text-black lg:text-4xl font-bold  ' >Our Photo Gallery</h1>
                <div className="gallery-container  mt-4 flex flex-col lg:grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {imgList.map((item, index) => (
                        <img
                            key={index}
                            src={item?.img}
                            alt={`Gallery Image ${index + 1}`}
                            className="cursor-pointer lg:w-[400px] lg:h-[300px] rounded-lg shadow-md transition-transform transform hover:scale-105"
                            onClick={() => openModal(index)}
                        />
                    ))}

                    {/* Modal */}
                    {isOpen && (
                        <div
                            className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                            onClick={handleOutsideClick}
                        >
                            <div className="relative max-w-3xl w-full p-4">
                                <img
                                    src={imgList[currentIndex]?.img} // Access the imgUrl property
                                    alt={`Zoomed Image ${currentIndex + 1}`}
                                    className="w-full h-auto rounded-lg"
                                />
                                {/* Navigation buttons */}
                                <div className="absolute inset-y-0 left-2 flex items-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goToPrevious();
                                        }}
                                        className="text-white text-3xl p-2 mx-4 bg-opacity-75 rounded-full"
                                    >
                                        &#10094;
                                    </button>
                                </div>
                                <div className="absolute inset-y-0 right-2 flex items-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goToNext();
                                        }}
                                        className="text-white text-3xl p-2 mx-4 bg-opacity-75 rounded-full"
                                    >
                                        &#10095;
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
