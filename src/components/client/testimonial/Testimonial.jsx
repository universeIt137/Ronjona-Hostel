import Marquee from 'react-fast-marquee';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader';

const Testemonial = () => {
    const axiosPublic = useAxiosPublic();

    const { data: reviewsData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['reviewsData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllReview');
            return res.data?.data;
        }
    });

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }

    return (
        <div className="w-11/12 my-32 mx-auto px-4 md:px-0">
            {/* Title Section */}
            <div>
                <p className="text-2xl md:text-4xl hover:underline font-bold text-black">Border Review</p>
            </div>

            {/* Card Container */}
            <Marquee pauseOnHover gradient={false} speed={50}>
                <div className="flex z-0 gap-6 mt-6">
                    {reviewsData.map((review, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center w-[320px] md:w-[590px] bg-white shadow-lg rounded-lg p-4 gap-4"
                        >
                            <div className="flex-shrink-0">
                                <img
                                    className="object-cover w-24 h-24 md:w-40 md:h-40 rounded-full"
                                    src={review?.img}
                                    alt={review?.name}
                                />
                            </div>
                            <div className="text-center md:text-left flex-grow">
                                <p className="text-lg md:text-2xl font-bold">{review?.name}</p>
                                <p className="text-black text-md md:text-lg">{review?.location}</p>
                                <p className="text-sm md:text-base mt-2 text-gray-600 text-justify">
                                    {review?.review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Testemonial;
