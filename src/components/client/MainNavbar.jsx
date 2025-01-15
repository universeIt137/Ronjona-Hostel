import React, { useState, useEffect } from 'react';
import { Navbar, Drawer, Button } from "flowbite-react";
import { FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
    window.scrollTo(0,0)
    const [isOpen, setIsOpen] = useState(false); // Drawer visibility state
    const [isScrolled, setIsScrolled] = useState(false); // Scroll state
    const [showGetInTouchDropdown, setShowGetInTouchDropdown] = useState(false); // Get In Touch dropdown visibility
    const [showGalleryDropdown, setShowGalleryDropdown] = useState(false); // Gallery dropdown visibility

    // Function to handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black bg-opacity-50' : 'bg-white opacity-100'}`}>
            {!isScrolled && (
                <div className="flex items-center gap-4 bg-black text-white justify-center">
                    <p className='text-xs md:text-md lg:text-md'>
                        10000+ students have experienced the Luxurious Hive Life.
                    </p>
                    <FaAngleRight className='text-center m-o md:m-2'></FaAngleRight>
                    <div>
                        <p> call : 01777177771</p>
                    </div>
                </div>
            )}

            <div className='w-11/12 mx-auto ' >
                {/* Navbar */}
                <Navbar className={`${isScrolled ? 'bg-black bg-opacity-50' : 'bg-white opacity-100'} transition-all duration-300 `} fluid rounded>
                    {/* Brand */}
                    <NavLink className='h-14 md:h-10' to="/">
                        <img
                            src="https://res.cloudinary.com/dntcuf8u3/image/upload/v1735990482/Ronjona/fcxyldbbg3gtm0ung8kt.png"
                            className="mr-2  h-8 md:h-9 rounded-lg"
                            alt="Logo"
                        />
                    </NavLink>

                    {/* Large screen navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6  ">
                        <NavLink to="/" className={`text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:underline decoration-main-color`}>
                            Home
                        </NavLink>

                        {/* Get In Touch dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowGetInTouchDropdown(true)}
                            onMouseLeave={() => setShowGetInTouchDropdown(false)}
                        >
                            <p className={`text-lg font-medium cursor-pointer ${isScrolled ? 'text-white' : 'text-black'} hover:underline decoration-main-color`}>
                                Get In Touch
                            </p>
                            {showGetInTouchDropdown && (
                                <div
                                    className="absolute top-full left-0  w-48 bg-white shadow-lg rounded-md z-50"
                                >

                                    <NavLink NavLink to={"/about"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About Us</NavLink>
                                    {/* <NavLink NavLink to={"/mission"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Mission</NavLink> */}
                                    <NavLink NavLink to={"/vission"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Vision & Mission</NavLink>
                                    <NavLink NavLink to={"/management-info"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Management Info</NavLink>
                                </div>
                            )}
                        </div>

                        {/* Gallery dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowGalleryDropdown(true)}
                            onMouseLeave={() => setShowGalleryDropdown(false)}
                        >
                            <p className={`text-lg font-medium cursor-pointer ${isScrolled ? 'text-white' : 'text-black'} hover:underline decoration-main-color`}>
                                Gallery
                            </p>
                            {showGalleryDropdown && (
                                <div
                                    className="absolute top-full left-0  w-48 bg-white shadow-lg rounded-md z-50"
                                >
                                    <NavLink to="/image-gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Image Gallery</NavLink>
                                    <NavLink to="/video-gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Video Gallery</NavLink>
                                </div>
                            )}
                        </div>

                        <NavLink to={`/our-branch`} className={`text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:underline decoration-main-color`}>
                            Our Branches
                        </NavLink>
                        <NavLink to={`/all-packages`} className={`text-lg font-medium ${isScrolled ? 'text-white' : 'text-black'} hover:underline decoration-main-color`}>
                            Our Packages
                        </NavLink>
                    </div>

                    {/* Drawer toggle for mobile */}
                    <div className="flex md:hidden">
                        <Button className="bg-main-color text-white" onClick={() => setIsOpen(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </Button>
                    </div>
                </Navbar>
            </div>

            {/* Drawer for mobile */}
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <Drawer.Header>
                    <h2>Menu</h2>
                </Drawer.Header>
                <Drawer.Items>
                    <NavLink to="/" className="block text-lg font-medium text-gray-700 hover:underline py-2">
                        Home
                    </NavLink>

                    {/* Get In Touch dropdown */}
                    <div className='py-2'>
                        <button
                            onClick={() => setShowGetInTouchDropdown(!showGetInTouchDropdown)}
                            className="block text-lg font-medium text-gray-700 w-full text-left"
                        >
                            Get In Touch
                            {showGetInTouchDropdown ? <FaAngleUp className="inline ml-2" /> : <FaAngleRight className="inline ml-2" />}
                        </button>
                        {showGetInTouchDropdown && (
                            <div className="pl-4">
                                <NavLink NavLink to={"/about-us"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About Us</NavLink>
                                <NavLink NavLink to={"/mission"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Mission & Vission</NavLink>
                                <NavLink NavLink to={"/management-info"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Management Info</NavLink>
                            </div>
                        )}
                    </div>

                    {/* Gallery dropdown */}
                    <div className='py-2'>
                        <button
                            onClick={() => setShowGalleryDropdown(!showGalleryDropdown)}
                            className="block text-lg font-medium text-gray-700 w-full text-left"
                        >
                            Gallery
                            {showGalleryDropdown ? <FaAngleUp className="inline ml-2" /> : <FaAngleRight className="inline ml-2" />}
                        </button>
                        {showGalleryDropdown && (
                            <div className="pl-4">
                                <NavLink NavLink to={"/image-gallery"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Image Gallery</NavLink>
                                <NavLink NavLink to={"/video-gallery"} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Video Gallery</NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to={"/our-branch"} className="block text-lg font-medium text-gray-700 hover:underline py-2">
                        Our Branches
                    </NavLink>
                    <NavLink to={"/our-packages"} className="block text-lg font-medium text-gray-700 hover:underline py-2">
                        Our Packages
                    </NavLink>
                </Drawer.Items>
            </Drawer>

        </div>
    );
};

export default MainNavbar;
