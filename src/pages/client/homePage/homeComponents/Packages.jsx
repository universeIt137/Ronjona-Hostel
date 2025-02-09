import { useState } from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { TbShare3 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../../../components/skeleton-loader/SkeletonLoader";
import { Helmet } from "react-helmet-async";

const Packages = () => {
    const axiosPublic = useAxiosPublic();

    const [showAll, setShowAll] = useState(false);

    const { data: packagesData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['packagesData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllPackages');
            return res.data?.data;
        }
    });
    const [showShareOptions, setShowShareOptions] = useState(null); // Track which package's share options are open

    const displayPackages = showAll ? packagesData : packagesData.slice(0, 4);

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
            <div>
                <SkeletonLoader></SkeletonLoader>
            </div>
        )
    }

    return (
        <div className=" w-11/12 mx-auto lg:my-4  " >
            <Helmet>
                <title>Ronjona | Home Page</title>
            </Helmet>
            <h1 className=" py-8 text-3xl lg:text-4xl font-bold hover:underline " >Our Packages</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 '>
                {displayPackages.map((pkg) => (
                    <div
                        key={pkg._id}
                        className="pb-5 rounded shadow relative transform transition-transform duration-300 hover:scale-105"
                    >
                        <NavLink to={`/package-details/${pkg?._id}`}><div className="relative">
                            <img
                                className="rounded-xl h-72 w-full"
                                src={pkg?.img[0]}
                                alt="A variety of spices"
                            />
                            <div className="absolute top-3 left-3 bg-[#97509F] text-white p-2 text-sm font-semibold rounded-lg">
                                New Launch
                            </div>
                            <TbShare3
                                onClick={() =>
                                    setShowShareOptions(showShareOptions === pkg._id ? null : pkg._id)
                                }
                                className="absolute top-4 right-3 bg-[#97509F] text-white  rounded-full text-3xl p-1"
                            ></TbShare3>
                        </div>

                            <div className="flex justify-between items-center mt-3 px-3">
                                <div>
                                    <p className="font-bold text-xl">{pkg?.title}</p>
                                    <p>
                                        Starting @ <span className="font-bold">$ {pkg?.price} /-</span>
                                    </p>
                                </div>

                            </div>
                        </NavLink>

                        {/* Share Options Dropdown */}
                        {showShareOptions === pkg._id && (
                            <div className="absolute top-0 mt-2 right-20 bg-white border rounded shadow-lg z-10">
                                <ul className="p-2 flex gap-4">
                                    <li>
                                        <a
                                            href={socialShareUrls.facebook(pkg)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 text-xl"
                                        >
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={socialShareUrls.twitter(pkg)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-600 text-xl"
                                        >
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={socialShareUrls.email(pkg)}
                                            className="text-gray-600 hover:text-gray-800 text-xl"
                                        >
                                            <FaEnvelope />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href={socialShareUrls.instagram()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-pink-500 hover:text-pink-700 text-xl"
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
            {/* Show More / Show Less Buttons */}
            <div className="flex justify-center mt-6">
                {!showAll && packagesData.length > 4 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mr-4"
                    >
                        Show More
                    </button>
                )}
                {showAll && (
                    <button
                        onClick={() => setShowAll(false)}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default Packages;