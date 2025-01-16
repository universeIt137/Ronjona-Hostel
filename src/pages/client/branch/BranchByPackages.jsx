import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { TbShare3 } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SkeletonLoader from '../../../components/skeleton-loader/SkeletonLoader';

// Package card component
const Packages = ({ packages, isLoading }) => {
    window.scrollTo(0, 0);
    const [showShareOptions, setShowShareOptions] = useState(null);

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
        instagram: () => `https://www.instagram.com/`,
    };

    if (isLoading) {
        return <SkeletonLoader />;
    }

    if (!isLoading && packages.length === 0) {
        return (
            <div className="text-center text-lg text-gray-500">
                <div className='my-10' >

                <h1>No packages found for this branch. </h1>

                    <SkeletonLoader></SkeletonLoader>
                </div>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10'>
            {packages.map((pkg) => (
                <div key={pkg._id} className='pb-5 rounded shadow relative'>
                    <Link to={`/package-details/${pkg?._id}`}>
                        <div className="relative">
                            <img
                                className='rounded-xl h-72 w-full'
                                src={pkg.img[0]}
                                alt={pkg.name}
                            />
                            <div className="absolute top-3 left-3 bg-main-color p-2 text-sm font-semibold rounded-lg">
                                New Launch
                            </div>
                            <TbShare3
                                onClick={() => setShowShareOptions(showShareOptions === pkg._id ? null : pkg._id)}
                                className='absolute top-4 right-3 bg-white hover:bg-main-color rounded-full text-3xl p-1'
                            />
                        </div>

                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                <p className='font-bold text-xl'>{pkg.name}</p>
                                <p>
                                    Starting @ <span className='font-bold'>${pkg.price}/-</span>
                                </p>
                            </div>
                            <Link to={`/package-details/${pkg?._id}`}>
                                <MdArrowOutward className='text-4xl p-2 bg-main-color hover:bg-black rounded-full text-black hover:text-white me-2' />
                            </Link>
                        </div>
                    </Link>

                    {/* Share Options Dropdown */}
                    {showShareOptions === pkg._id && (
                        <div className='absolute top-0 mt-2 right-20 bg-white rounded shadow-lg z-10'>
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

// Main component
const BranchByPackages = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams()

    const { data: branchByPackageData = [], isLoading } = useQuery({
        queryKey: ['branchByPackageData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages-by-branch/${id}`);
            console.log(res.data?.data)
            return res.data?.data;
        }
    });









    return (
        <div className='bg-slate-100 ' >
            <div className=' lg:my-24   my-20 '>

                {/* Packages Section */}
                <div className='p-5'>
                    <div className=' mb-10 font-bold'>
                        <p className='text-2xl lg:text-4xl text-center text-black'>Our Packages</p>
                        <p className='mt-4 text-center text-sm lg:text-xl'>
                            Choose your preferred package now and book it within the specified time frame.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <Packages packages={branchByPackageData} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchByPackages;
