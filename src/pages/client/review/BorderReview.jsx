import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SkeletonLoader from "../../../components/skeleton-loader/SkeletonLoader";
import { Helmet } from "react-helmet-async";

const BorderReview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const axiosPublic = useAxiosPublic();

    const { data: borderReviewData = [], isLoading } = useQuery({
        queryKey: ['borderReviewData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllReview`);
            return res.data.data;
        }
    });

    // Ensure we have groups of three cards per slide
    const paddedOffers = [...borderReviewData];
    while (paddedOffers.length % 3 !== 0) {
        paddedOffers.push({ img: '', placeholder: true });
    }

    const totalSlides = Math.ceil(paddedOffers.length / 3);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    if (isLoading) {
        return <SkeletonLoader />;
    }

    if (!borderReviewData.length) {
        return <div>No reviews available at the moment. Please check back later!</div>;
    }

    return (
        <div className='mt-10 w-11/12 mx-auto py-20 lg:py-28 px-4 md:px-0'>
            <Helmet>
                <title>Ronjona | Border Review Page</title>
            </Helmet>
            {/* Top Section */}
            <div className='mb-6 font-bold flex justify-between items-center'>
                <p className="text-2xl md:text-4xl hover:underline text-[#A020BA] ">Border Review</p>
                <div className='flex items-center gap-8 text-xl'>
                    <IoArrowBackOutline onClick={handlePrev} className="cursor-pointer" />
                    <IoArrowForward onClick={handleNext} className="cursor-pointer" />
                </div>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="flex justify-center gap-4 w-full"
                        >
                            {paddedOffers.slice(slideIndex * 3, slideIndex * 3 + 3).map((review, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center w-[320px] bg-white shadow-lg rounded-lg p-4 gap-4"
                                >
                                    {!review.placeholder ? (
                                        <>
                                            <img
                                                className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                                src={review?.img}
                                                alt={review?.name}
                                            />
                                            <div className="text-center">
                                                <p className="text-lg md:text-2xl font-bold">{review?.name}</p>
                                                <p className="text-black text-md md:text-lg">{review?.location}</p>
                                                <p className="text-sm md:text-base mt-2 text-gray-600 text-justify">
                                                    {review?.review}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="w-40 h-40 bg-gray-200 rounded-full"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${currentSlide === index ? 'bg-black' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BorderReview;
