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
                No packages found for the selected filters.
                <div className='my-10' >
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
    const [priceRange, setPriceRange] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('all');
    const {id} = useParams()

    const { data: branchByPackageData = [], isLoading } = useQuery({
        queryKey: ['branchByPackageData',id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages-by-branch/${id}`);
            console.log(res.data?.data)
            return res.data?.data;
        }
    });



    const { data: locations = [] } = useQuery({
        queryKey: ['locationsData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllLocations');
            return res.data?.data;
        }
    });

    // Filter packages based on price range and location
    const filterPackages = (priceRange, location) => {
        let filtered = branchByPackageData;

        if (priceRange !== 'all') {
            filtered = filtered.filter(pkg => {
                if (priceRange === 'low') return pkg.price < 100;
                if (priceRange === 'medium') return pkg.price >= 100 && pkg.price <= 500;
                if (priceRange === 'high') return pkg.price > 500;
                return true;
            });
        }

        if (location !== 'all') {
            filtered = filtered.filter(pkg => pkg?.branch?.location?.location === location);
        }

        return filtered;
    };

    const filteredPackages = filterPackages(priceRange, selectedLocation);

    console.log("selectedLocation", selectedLocation)

    return (
        <div className='bg-slate-100 w-full' >
            <div className=' lg:my-24  my-16 flex flex-col lg:flex-row'>
                {/* Sidebar Section */}
                <div className='w-full lg:w-1/4 p-5 bg-white shadow'>
                    <h3 className='text-xl font-bold mb-4'>Filters</h3>
                    <div className='flex flex-col gap-4'>
                        {/* Price Range Filter */}
                        <div className='flex flex-col'>
                            <label className='block font-semibold'>Price Range</label>
                            <div className="flex flex-col items-start gap-y-4 my-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="price"
                                        value="all"
                                        checked={priceRange === 'all'}
                                        onChange={() => setPriceRange('all')}
                                        className="mr-2"
                                    />
                                    All
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="price"
                                        value="low"
                                        checked={priceRange === 'low'}
                                        onChange={() => setPriceRange('low')}
                                        className="mr-2"
                                    />
                                    Low
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="price"
                                        value="medium"
                                        checked={priceRange === 'medium'}
                                        onChange={() => setPriceRange('medium')}
                                        className="mr-2"
                                    />
                                    Medium ($100-$500)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="price"
                                        value="high"
                                        checked={priceRange === 'high'}
                                        onChange={() => setPriceRange('high')}
                                        className="mr-2"
                                    />
                                    High ($500)
                                </label>
                            </div>
                        </div>

                        {/* Location Filter */}
                        <div className='flex flex-col'>
                            <label className='block font-semibold'>Location</label>
                            <select
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className='mt-2 p-2 border rounded'
                            >
                                <option value="all">All</option>
                                {locations.map((location) => (
                                    <option key={location._id} value={location.location}>
                                        {location.location}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Packages Section */}
                <div className='w-full lg:w-3/4 p-5'>
                    <div className='text-center mb-10 font-bold'>
                        <p className='text-2xl lg:text-4xl text-main-color'>Our All Packages</p>
                        <p className='mt-4 text-sm lg:text-xl'>
                            Choose your preferred package now and book it within the specified time frame.
                        </p>
                    </div>

                    <div className='mt-8'>
                        <Packages packages={filteredPackages} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchByPackages;
