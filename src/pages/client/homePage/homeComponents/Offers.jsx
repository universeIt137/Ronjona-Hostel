import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Offers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const axiosPublic = useAxiosPublic();

    const { data: offers = [] } = useQuery({
        queryKey: ['offers'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-offer`);
            return res.data.data;
        }
    });

    const paddedOffers = [...offers];
    if (offers.length % 2 !== 0) paddedOffers.push({ img: '', placeholder: true });

    const totalSlides = Math.ceil(paddedOffers.length / 2);

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

    if (!offers.length) {
        return <div>No offers available at the moment. Please check back later!</div>;
    }

    return (
        <div className='mt-10 container px-4 md:px-0 md:mx-auto'>
            {/* Top Section */}
            <div className='mb-6 font-bold flex justify-between items-center'>
                <p className="text-2xl md:text-4xl hover:underline text-black">Offers For You</p>
                <div className='flex items-center gap-8 me-8 text-xl'>
                    <IoArrowBackOutline onClick={handlePrev} className="cursor-pointer" />
                    <IoArrowForward onClick={handleNext} className="cursor-pointer" />
                </div>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 50}%)` }}
                >
                    {paddedOffers.map((offer, index) => (
                        <div key={index} className="w-1/2 flex-shrink-0 px-2">
                            {offer.img ? (
                                <img
                                    className="w-full h-72 rounded-xl"
                                    src={offer?.img}
                                    alt={offer?.title || `Offer ${index + 1}`}
                                />
                            ) : (
                                <div className="w-full h-72 rounded-xl bg-gray-300"></div>
                            )}
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

export default Offers;
