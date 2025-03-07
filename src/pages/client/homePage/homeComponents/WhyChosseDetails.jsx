import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../../components/skeleton-loader/SkeletonLoader';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const WhyChosseDetails = () => {
    const axiosPublic = useAxiosPublic()

    window.scrollTo(0,0)

    const { data: whyChooseData = [], refetch, isLoading } = useQuery({
        queryKey: ["whyChooseData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/why-choose");
            return res.data.data[0];
        },
    });
    if (isLoading) {
        return (
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }
    return (
        <div className=" my-10 w-11/12 mx-auto  px-4 md:px-0 md:mx-auto">
            <Helmet>
                <title>Ronjona | Why choose us details</title>
            </Helmet>
            <div className='  mb-10 '>
                <p className="text-2xl md:text-5xl hover:underline font-bold text-black">
                    {
                        whyChooseData?.title
                    }
                </p>

            </div>
            <div className="flex flex-col lg:flex-row  lg:gap-20">
                <div className="lg:w-1/2">

                    <div className="relative ">
                        <img
                            className="w-full md:w-3/4 h-[70lvh] md:h-[80lvh] rounded-[20px]"
                            src={whyChooseData?.backgroundImg}
                            alt="Main Image"
                        />
                        <img
                            className="absolute right-0 top-36 w-96 h-64  border-4 rounded-[20px] border-white hidden md:block"
                            src={whyChooseData?.img}
                            alt="Overlay Image"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:mt-10 mr-0 lg:mr-8">
                    <p className="text-xl lg:text-6xl font-semibold mb-4 text-center text-black">WHY YOU WITH RONJONA</p>
                    <p className="text-sm lg:text-lg text-justify">
                        {
                            whyChooseData?.des
                        }
                    </p>
                </div>
            </div>
        </div>


    );
};

export default WhyChosseDetails;