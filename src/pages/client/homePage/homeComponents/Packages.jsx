import { useState } from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { TbShare3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Packages = () => {
    const axiosPublic = useAxiosPublic();

    const { data: packagesData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['packagesData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPackages');
            return res.data?.data;
        }
    });
    const [showShareOptions, setShowShareOptions] = useState(null); // Track which package's share options are open

    // Social Media Share URLs
    const socialShareUrls = {
        facebook: (pkg) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
            )}&quote=${encodeURIComponent(pkg.description + ' for $' + pkg.price)}`,
        twitter: (pkg) =>
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                pkg.description + ' for $' + pkg.price
            )}&url=${encodeURIComponent(window.location.href)}`,
        email: (pkg) =>
            `mailto:?subject=Check out this package!&body=${encodeURIComponent(
                pkg.description + ' for $' + pkg.price + '. Visit: ' + window.location.href
            )}`,
        instagram: () =>
            `https://www.instagram.com/`, // Instagram requires the app for direct sharing
    };

    if (isLoading) {
        return (
            <div className=' h-screen flex-col flex justify-center items-center ' >
                <h1 className='text-center' >Loading...</h1>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 '>
            {packagesData.map((pkg) => (
                <div key={pkg._id} className=' pb-5  rounded shadow relative'>
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/food/spices.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-main-color p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 onClick={() =>
                            setShowShareOptions(showShareOptions === pkg._id ? null : pkg._id)
                        } className='absolute top-4 right-3 bg-white hover:bg-main-color hover:bg-main-color hover:bg-main-color rounded-full text-3xl p-1'></TbShare3>
                    </div>


                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <Link to={`/package-details/${pkg?._id}`}><MdArrowOutward className='text-4xl p-2 bg-main-color hover:bg-black rounded-full text-black hover:text-white me-2'>
                        </MdArrowOutward>
                        </Link>
                    </div>


                    {/* Share Options Dropdown */}
                    {showShareOptions === pkg._id && (
                        <div className='absolute top-0 mt-2 right-20 bg-white border rounded shadow-lg z-10'>
                            <ul className='p-2 flex gap-4'>
                                <li>
                                    <a
                                        href={socialShareUrls.facebook(pkg)}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-600 hover:text-blue-800 text-xl'
                                    >
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={socialShareUrls.twitter(pkg)}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-400 hover:text-blue-600 text-xl'
                                    >
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={socialShareUrls.email(pkg)}
                                        className='text-gray-600 hover:text-gray-800 text-xl'
                                    >
                                        <FaEnvelope />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={socialShareUrls.instagram()}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-pink-500 hover:text-pink-700 text-xl'
                                    >
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Packages;