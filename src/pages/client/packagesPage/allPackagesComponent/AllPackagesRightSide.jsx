import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import React Icons
import { IoMdShareAlt } from 'react-icons/io';
import { MdArrowOutward } from 'react-icons/md';
import { TbShare3 } from 'react-icons/tb';

const Packages = ({ packages }) => {
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

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 '>
            {packages.map((pkg) => (
                <div key={pkg.id} className=' pb-5  rounded shadow relative'>
                    <div className="relative">
                        <img className='rounded-xl h-72 w-full' src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1733452829/samples/food/spices.jpg"
                            alt="A variety of spices" />
                        <div className="absolute top-3 left-3  bg-main-color p-2 text-sm font-semibold rounded-lg">
                            New Launch
                        </div>
                        <TbShare3 onClick={() =>
                            setShowShareOptions(showShareOptions === pkg.id ? null : pkg.id)
                        } className='absolute top-4 right-3 bg-white hover:bg-main-color hover:bg-main-color hover:bg-main-color rounded-full text-3xl p-1'></TbShare3>
                    </div>


                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-xl'>Lansdowne</p>
                            <p>Starting @ <span className='font-bold'>$564/-</span></p>
                        </div>
                        <MdArrowOutward className='text-4xl p-2 bg-main-color hover:bg-black rounded-full text-black hover:text-white me-2'></MdArrowOutward>
                    </div>


                    {/* Share Options Dropdown */}
                    {showShareOptions === pkg.id && (
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


// AllPackagesRightSide Component
const AllPackagesRightSide = () => {
    const [activeButton, setActiveButton] = useState('All Packages'); // Default active button

    const buttons = [
        { label: 'All Packages', id: 'all-packages' },
        { label: 'Populated', id: 'populated' },
        { label: 'Medium Range', id: 'medium-range' },
        { label: 'High Range', id: 'high-range' },
    ];

    const packagesData = [
        { id: 1, price: 50, description: 'Basic package with essential features.' },
        { id: 2, price: 100, description: 'Includes popular features and services.' },
        { id: 3, price: 150, description: 'Best for medium-sized needs.' },
        { id: 4, price: 250, description: 'Premium package with advanced features.' },
        { id: 5, price: 300, description: 'Tailored solutions to meet specific requirements.' },
    ];

    // Filter packages based on price ranges
    const filteredPackages = (() => {
        switch (activeButton) {
            case 'Populated':
                return packagesData.filter((pkg) => pkg.price <= 100);
            case 'Medium Range':
                return packagesData.filter((pkg) => pkg.price > 100 && pkg.price <= 200);
            case 'High Range':
                return packagesData.filter((pkg) => pkg.price > 200);
            default:
                return packagesData; // All Packages
        }
    })();

    return (
        <div className='bg-slate-100 w-full'>
            {/* Top section */}
            <div className='justify-items-center m-10 font-bold'>
                <p className='lg:text-4xl text-main-color'>Our All Packages</p>
                <p className='mt-4 text-xl'>
                    Choose your preferred package now and book it within the specified time frame.
                </p>
                <div className='flex gap-8 mt-4'>
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => setActiveButton(button.label)}
                            className={`px-4 py-2 rounded-t-lg transition-colors ${activeButton === button.label
                                ? 'bg-main-color text-white' // Active button styles
                                : 'bg-gray-200 text-black'   // Inactive button styles
                                }`}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Packages Component */}
            <div className='mt-8'>
                <Packages packages={filteredPackages} />
            </div>
        </div>
    );
};

export default AllPackagesRightSide;
