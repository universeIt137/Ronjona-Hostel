import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';  // Import social media icons

const PackageDetailsDescription = () => {
    window.scrollTo(0, 0)

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { data: packagesDetailsDescription = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['packagesDetailsDescription', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getPackageById/${id}`);
            console.log(res.data);
            return res.data?.data;
        }
    });

    // State to control the visibility of the social media icons
    const [showShareIcons, setShowShareIcons] = useState(false);

    const handleShareButton = () => {
        console.log("Toggling Share Icons");
        setShowShareIcons(!showShareIcons);  // Toggle the visibility of share icons
    };

    // Construct share URLs for each platform
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(packagesDetailsDescription?.title + " " + window.location.href)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(packagesDetailsDescription?.title)}&url=${encodeURIComponent(window.location.href)}`,
        instagram: `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`, // Instagram doesn't support direct sharing URL
    };

    const handleShare = (platform) => {
        // Debugging the generated URLs
        console.log(`Opening ${platform} share link: ${shareUrls[platform]}`);
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    };

    return (
        <div>
            {/* feature */}
            <h1 className='font-bold lg:text-4xl text-xl mt-8'>Features</h1>
            <div className='w-[90%] my-8  '>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packagesDetailsDescription?.features?.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={feature?.featureImg}
                                alt={feature?.featureTitle}
                                className="rounded-t-lg block mx-auto h-16 object-cover"
                            />
                            <h3 className="text-[14px] text-center font-semibold text-gray-800 mt-4">
                                {feature.featureTitle}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center  '>
                <p className='lg:text-4xl text-xl font-bold'>Package Details</p>
                {/* <button
                    className='text-[12px] lg:text-xl bg-[#853493] py-2 lg:py-4 px-4 lg:px-8 text-white rounded-xl'
                    onClick={handleShareButton}  // Toggle the visibility of share icons
                >
                    Share Now
                </button> */}
            </div>
            <div className="w-full max-w-[100vw] lg:w-[100%]  lg:h-[38lvh] bg-gray-200 px-5 lg:px-10 mt-10 rounded-[30px] mb-10">
                <div
                    className="text-sm sm:text-base lg:text-lg text-black py-5 lg:py-10 leading-relaxed break-words whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: packagesDetailsDescription?.desc }}
                />
            </div>

            {/* Social media icons for sharing, displayed when `showShareIcons` is true */}
            {showShareIcons && (
                <div className='flex justify-center lg:right-[50%] items-center h-screen absolute lg:top-[773px] gap-6  '>
                    <FaFacebookF
                        className='text-blue-600 text-3xl cursor-pointer'
                        onClick={() => handleShare('facebook')}
                    />
                    <FaTwitter
                        className='text-blue-400 text-3xl cursor-pointer'
                        onClick={() => handleShare('twitter')}
                    />
                    <FaWhatsapp
                        className='text-green-500 text-3xl cursor-pointer'
                        onClick={() => handleShare('whatsapp')}
                    />
                    <FaInstagram
                        className='text-pink-500 text-3xl cursor-pointer'
                        onClick={() => handleShare('instagram')}
                    />
                </div>
            )}
        </div>
    );
};

export default PackageDetailsDescription;
