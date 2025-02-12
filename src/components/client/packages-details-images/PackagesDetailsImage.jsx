

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


const PackagesDetailsImage = () => {
    const axiosPublic = useAxiosPublic()
    // Fetch data using useQuery
    const { data: images = [], isLoading } = useQuery({
        queryKey: ['packageImages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPackages');
            return res.data.data; // Adjust based on API response structure
        },
    });
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Carousel */}
            <div className="relative">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2  text-white px-2 py-1 rounded"
                    onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                >
                    <MdOutlineKeyboardArrowLeft className="text-black text-3xl " />
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2  text-white px-2 py-1 rounded"
                    onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                >
                     <MdOutlineKeyboardArrowRight className="text-black text-3xl " />
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-4 mt-4">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${index === currentIndex ? "border-[#853493] " : "border-transparent"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PackagesDetailsImage;